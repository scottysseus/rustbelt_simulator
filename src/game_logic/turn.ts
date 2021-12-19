/**
 * If one of these functions has an extra argument, it and its corresponding object within the GameState must be referentially equivalent.
 */

import { TileUnderConstruction } from '.'
import { projectCatalog } from '../data/project-catalog'
import { tileCatalog } from '../data/tile-catalog'
import { GameState, Tile, isTileUnderConstruction, Contract } from './interfaces'

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
  for (const tile of state.map.tiles) {
    state = applyWorkersAtTile(state, tile)
  }
  return state
}

export function applyWorkersAtTile (initialState: GameState, tile: Tile): GameState {
  let state = initialState
  if (isTileUnderConstruction(tile)) {
    state = applyProgressAtTile(state, tile)

    // Check if project is done
    state = checkIfTileCompleted(state, tile)
  }
  return state
}

function applyProgressAtTile (state: GameState, tile: TileUnderConstruction): GameState {
  const delta = tile.activeProject.assignedWorkers
  const newProgress = tile.activeProject.progress + delta

  return {
    ...state,
    map: {
      ...state.map,
      tiles: state.map.tiles.map((v) => v === tile && isTileUnderConstruction(v)
        ? {
            ...v,
            activeProject: {
              ...v.activeProject,
              progress: newProgress,
              assignedWorkers: 0
            }
          }
        : v)
    }
  }
}

function checkIfTileCompleted (initialState: GameState, tile: TileUnderConstruction): GameState {
  let state = initialState
  const projectDefinition = projectCatalog[tile.activeProject.type]
  const tileDefinition = tileCatalog[tile.type]

  if (tile.activeProject.progress === projectDefinition.effort) {
    state = {
      ...state,
      map: {
        ...state.map,
        tiles: state.map.tiles.map((v) => v === tile
          ? {
              // morph the tile into the target type
              type: projectDefinition.targetTileType,
              activeProject: null
            }
          : v)
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

  return state
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
