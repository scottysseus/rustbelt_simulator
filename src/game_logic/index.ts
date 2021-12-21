import { GameState, Tile, TileType } from './interfaces'
import { advanceTurnCounter, applyRevenue, applyWorkers, resetWorkers, resolveContracts } from './turn'
import { map as mapDefinition } from '../data/map'
export * from './interfaces'
export * from './player-actions'

const STARTING_MONEY = 1000000
const STARTING_WORKERS = 3

export function createGameState (): GameState {
  return {
    game: {
      turnCounter: 0
    },
    player: {
      resources: {
        money: {
          balance: STARTING_MONEY,
          revenue: -10
        },
        workers: {
          max: STARTING_WORKERS,
          free: STARTING_WORKERS
        }
      },
      victory: {
        happiness: 10,
        goal: 100
      },
      contracts: {
        open: [],
        completed: []
      }
    },
    map: {
      tiles: initializeTiles(),
      size: mapDefinition.size
    }
  }
}

function initializeTiles (): Array<Tile> {
  return mapDefinition.tiles.map((catalogEntryId: TileType): Tile => ({
    type: catalogEntryId,
    activeProject: null
  }))
}

export function advanceTurn (initialState: GameState): GameState {
  let state = initialState
  state = applyRevenue(state)
  state = applyWorkers(state)
  state = resetWorkers(state)
  state = resolveContracts(state)
  state = advanceTurnCounter(state)
  // checkWinLoss(state)
  return state
}
