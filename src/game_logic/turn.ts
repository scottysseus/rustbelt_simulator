/**
 * State changes might cause some variables to hold stale references.
 * After a state change, be aware of:
 * - For-in and for-of loops when the array was replaced.
 * - For loops when the array changed length.
 * - Any other stale reference
 */

import produce from 'immer'
import { contractQueue } from '../data/contract-catalog'
import { NUM_OPEN_CONTRACTS } from './constants'
import { projectCatalog } from '../data/project-catalog'
import { tileCatalog } from '../data/tile-catalog'
import { GameState, TileUnderConstruction, isTileUnderConstruction, Tile } from './interfaces'
import { clamp } from './shared'

export function applyRevenue (state: GameState): GameState {
  return produce(state, draft => {
    draft.player.resources.money.balance += draft.player.resources.money.revenue
  })
}

export function applyWorkers (initialState: GameState): GameState {
  let state = initialState
  const initialLength = state.map.tiles.length
  for (let idx = 0; idx < state.map.tiles.length; idx++) {
    state = applyWorkersAtTile(state, idx)
    console.assert(initialLength === state.map.tiles.length)
  }
  return state
}

export function applyWorkersAtTile (initialState: GameState, tileIndex: number): GameState {
  let state = initialState
  if (isTileUnderConstruction(state.map.tiles[tileIndex])) {
    state = applyProgressAtTile(state, tileIndex)

    // Check if project is done
    state = checkIfTileCompleted(state, tileIndex)
  }
  return state
}

function applyProgressAtTile (state: GameState, tileIndex: number): GameState {
  const tile = state.map.tiles[tileIndex]
  if (!isTileUnderConstruction(tile)) {
    return state
  }
  const delta = tile.activeProject.assignedWorkers
  const newProgress = tile.activeProject.progress + delta

  const newTile: TileUnderConstruction = produce(tile, draft => {
    draft.activeProject.progress = newProgress
  })

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
  })
}

function checkIfTileCompleted (state: GameState, tileIndex: number): GameState {
  const tile = state.map.tiles[tileIndex]
  if (!isTileUnderConstruction(tile)) { return state }
  const projectDefinition = projectCatalog[tile.activeProject.type]
  const tileDefinition = tileCatalog[tile.type]

  // Exit early if project isn't done
  if (tile.activeProject.progress < projectDefinition.effort) {
    return state
  }

  // Add this project to the list of completed projects
  const newTile: Tile = {
    // morph the tile into the target type
    type: projectDefinition.targetTileType,
    activeProject: null,
    rotation: tile.rotation
  }

  return produce(state, draft => {
    draft.player.projects.completed.push(tile.activeProject.type)
    draft.player.resources.workers.free += tile.activeProject.assignedWorkers
    draft.map.tiles[tileIndex] = newTile
    draft.player.victory.happiness += tileDefinition.happiness
    draft.player.resources.money.revenue += tileDefinition.revenue
  })
}

export function adjustWorkers (state: GameState): GameState {
  return produce(state, draft => {
    for (const tile of draft.map.tiles) {
      if (tile.activeProject) {
        const remainingEffort = projectCatalog[tile.activeProject.type].effort - tile.activeProject.progress
        // Re-adjust workers to fit within bounds
        const oldAssignedWorkers = tile.activeProject.assignedWorkers
        const newAssignedWorkers = clamp(tile.activeProject.assignedWorkers, 0, remainingEffort)
        // refund the user any workers that were in excess.
        draft.player.resources.workers.free = draft.player.resources.workers.free + (oldAssignedWorkers - newAssignedWorkers)
        tile.activeProject.assignedWorkers = newAssignedWorkers
      }
    }
  })
}

export function resolveContracts (initialState: GameState): GameState {
  let state = initialState

  let contractIndex: number
  while ((contractIndex = findIndexOfSatisfiedOpenContract(state)) !== -1) {
    state = completeContract(state, contractIndex)
  }

  return openNewContracts(state)
}

/**
 * Returns the index of the first open contract whose conditions have
 * been satisfied or, if none was found, -1.
 */
function findIndexOfSatisfiedOpenContract (state: GameState): number {
  return state.player.contracts.open.findIndex(contract => {
    const satisfied = contract.isSatisfied(state)
    return satisfied
  })
}

/**
 * Collects the rewards of the contract at contractIndex of the `open` list and moves it to the `completed` list,
 */
function completeContract (state: GameState, contractIndex: number): GameState {
  console.debug('Completeing Contract', state.player.contracts.open[contractIndex])
  const newState = state.player.contracts.open[contractIndex].applyReward(state)
  return produce(newState, draft => {
    const completed = draft.player.contracts.open[contractIndex]
    draft.player.contracts.completed.push(completed)
    draft.player.contracts.open.splice(contractIndex, 1)
  })
}

/**
 * Attempts to open new contracts from the shuffled contract queue, if any remain, until the open contract list
 * contains NUM_OPEN_CONTRACTS.
 */
function openNewContracts (state: GameState): GameState {
  return produce(state, draft => {
    while (draft.player.contracts.open.length < NUM_OPEN_CONTRACTS) {
      const newContract = contractQueue.pop()
      if (newContract === undefined) {
        break
      }
      draft.player.contracts.open.push(newContract)
    }
  })
}

export function advanceTurnCounter (state: GameState): GameState {
  return produce(state, draft => {
    draft.game.turnCounter += 1
  })
}

export function checkWinLoss (state: GameState): boolean {
  return state.player.resources.money.balance > 0
}
