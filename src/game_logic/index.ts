import { enableMapSet } from 'immer'

import { GameState, Tile, TileType, Contract } from './interfaces'
import { advanceTurnCounter, applyRevenue, applyWorkers, resetWorkers, resolveContracts } from './turn'
import { map as mapDefinition } from '../data/map'
import { contractQueue } from '../data/contract-catalog'
import { NUM_OPEN_CONTRACTS } from './constants'
export * from './interfaces'
export * from './player-actions'

enableMapSet()

const STARTING_MONEY = 1000000
const STARTING_WORKERS = 10

export function createGameState (): GameState {
  const openContracts: Contract[] = []
  console.log(`contract queue initialized as: ${contractQueue}`)
  do {
    const toOpen = contractQueue.pop()
    if (toOpen !== undefined) {
      openContracts.push(toOpen)
    }
  } while (openContracts.length < NUM_OPEN_CONTRACTS)

  console.log(`contract queue has been reduced to: ${contractQueue}`)

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
        open: openContracts,
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
