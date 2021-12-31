import { enableMapSet } from 'immer'

import { GameState, Tile, TileType, Contract } from './interfaces'
import { advanceTurnCounter, applyRevenue, applyWorkers, adjustWorkers, resolveContracts, calculateRevenue, calculateHappiness } from './turn'
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
  do {
    const toOpen = contractQueue.pop()
    if (toOpen !== undefined) {
      openContracts.push(toOpen)
    }
  } while (openContracts.length < NUM_OPEN_CONTRACTS)

  let state:GameState = {
    game: {
      turnCounter: 0
    },
    player: {
      resources: {
        money: {
          balance: STARTING_MONEY,
          revenue: -10000
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
      },
      projects: {
        completed: []
      }
    },
    map: {
      tiles: initializeTiles(),
      size: mapDefinition.size
    }
  }

  state = calculateRevenue(state)
  state = calculateHappiness(state)
  return state
}

function initializeTiles (): Array<Tile> {
  return mapDefinition.tiles.map((catalogEntryId: TileType, i: number): Tile => ({
    type: catalogEntryId,
    rotation: mapDefinition.rotations[i],
    activeProject: null
  }))
}

export function advanceTurn (state: GameState): GameState {
  state = applyRevenue(state)
  state = applyWorkers(state)
  state = adjustWorkers(state)
  state = resolveContracts(state)
  state = advanceTurnCounter(state)
  state = calculateRevenue(state)
  state = calculateHappiness(state)
  // checkWinLoss(state)
  return state
}
