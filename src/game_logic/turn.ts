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
import { Contract, GameState, TileUnderConstruction, isTileUnderConstruction, Tile } from './interfaces'

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

  if (tile.activeProject.progress !== projectDefinition.effort) {
    return state
  }

  const newTile: Tile = {
    // morph the tile into the target type
    type: projectDefinition.targetTileType,
    activeProject: null
  }

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
    draft.player.victory.happiness += tileDefinition.happiness
    draft.player.resources.money.revenue += tileDefinition.revenue
  })
}

export function resetWorkers (state: GameState): GameState {
  return produce(state, draft => {
    draft.player.resources.workers.free = draft.player.resources.workers.max
  })
}

export function resolveContracts (initialState: GameState): GameState {
  let state = initialState
  // TODO: fix staleness
  let contractIndex: number | null

  while ((contractIndex = findIndexOfSatisfiedOpenContract(state)) !== null) {
    state = contractComplete(state, contractIndex)
  }

  state = organizeContracts(state)
  return state
}

/**
 * Returns the index of the first open contract whose conditions have
 * been satisfied or, if none was found, null.
 */
function findIndexOfSatisfiedOpenContract (state: GameState): number | null {
  throw new Error('Not implemented')
}

/**
 * Collects the rewards of the contract at contractIndex of the `open` list,
 * and marks the contract as 'completed'. Assumes the contract has been satisfied.
 */
function contractComplete (state: GameState, contractIndex: number): GameState {
  return state.player.contracts.open[contractIndex].applyReward(state)
}

/**
 * Moves any contracts marked as 'completed' to the end of the completed list, maintaining order.
 * Ensures that the open contracts list has 3 contracts, or all remaining contracts if fewer than NUM_OPEN_CONTRACTS are remaining.
 */
function organizeContracts (state: GameState): GameState {
  const openContracts: Contract[] = [...state.player.contracts.open.filter((v) => !v.completed)]
  for (let contract = contractQueue.pop(); contract !== undefined && openContracts.length < NUM_OPEN_CONTRACTS; contract = contractQueue.pop()) {
    openContracts.push(contract)
  }
  return produce(state, draft => {
    draft.player.contracts.open = openContracts
    draft.player.contracts.completed.push(...draft.player.contracts.open.filter((v) => v.completed))
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
