/**
 * State changes might cause some variables to hold stale references.
 * After a state change, be aware of:
 * - For-in and for-of loops when the array was replaced.
 * - For loops when the array changed length.
 * - Any other stale reference
 */

import { projectCatalog } from '../data/project-catalog'
import { tileCatalog } from '../data/tile-catalog'
import { Contract, GameState, isTileUnderConstruction } from './interfaces'
import { replaceOne } from './shared'

export function applyRevenue (state: GameState): GameState {
  return {
    ...state,
    player: {
      ...state.player,
      resources: {
        ...state.player.resources,
        money: {
          ...state.player.resources.money,
          balance: state.player.resources.money.balance + state.player.resources.money.revenue
        }
      }
    }
  }
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
  const newTile = {
    ...tile,
    activeProject: {
      ...tile.activeProject,
      progress: newProgress,
      assignedWorkers: 0
    }
  }

  return {
    ...state,
    map: {
      ...state.map,
      tiles: replaceOne(state.map.tiles, tile, newTile)
    }
  }
}

function checkIfTileCompleted (state: GameState, tileIndex: number): GameState {
  const tile = state.map.tiles[tileIndex]
  if (!isTileUnderConstruction(tile)) { return state }
  const projectDefinition = projectCatalog[tile.activeProject.type]
  const tileDefinition = tileCatalog[tile.type]

  if (tile.activeProject.progress !== projectDefinition.effort) {
    return state
  }

  const newTile = {
    // morph the tile into the target type
    type: projectDefinition.targetTileType,
    activeProject: null
  }
  return {
    ...state,
    map: {
      ...state.map,
      tiles: replaceOne(state.map.tiles, tile, newTile)
    },
    player: {
      ...state.player,
      // dole out the rewards
      victory: {
        ...state.player.victory,
        happiness: state.player.victory.happiness + tileDefinition.happiness
      },
      resources: {
        ...state.player.resources,
        money: {
          ...state.player.resources.money,
          revenue: state.player.resources.money.revenue + tileDefinition.revenue
        }
      }
    }
  }
}

export function resetWorkers (state: GameState): GameState {
  return {
    ...state,
    player: {
      ...state.player,
      resources: {
        ...state.player.resources,
        workers: {
          ...state.player.resources.workers,
          free: state.player.resources.workers.max
        }
      }
    }
  }
}

export function resolveContracts (initialState: GameState): GameState {
  let state = initialState
  // TODO: fix staleness
  for (const contract of state.player.contracts.open) {
    state = contractMaybeComplete(state, contract)
    if (contract.completed) {
      state = contractCollectRewards(state, contract)
    }
  }

  state = organizeContracts(state)
  return state
}

function contractMaybeComplete (state: GameState, contract: Contract): GameState {
  throw new Error('Not implemented')
}

function contractCollectRewards (state: GameState, contract: Contract): GameState {
  throw new Error('Not implemented')
}

/**
 * move any contracts set as 'completed' to the completed array
 */
function organizeContracts (state: GameState): GameState {
  return {
    ...state,
    player: {
      ...state.player,
      contracts: {
        open: state.player.contracts.open.filter((v) => !v.completed),
        completed: [...state.player.contracts.completed, ...state.player.contracts.open.filter((v) => v.completed)]
      }
    }
  }
}

export function advanceTurnCounter (state: GameState): GameState {
  return {
    ...state,
    game: {
      ...state.game,
      turnCounter: state.game.turnCounter + 1
    }
  }
}

export function checkWinLoss (state: GameState): boolean {
  return state.player.resources.money.balance > 0
}
