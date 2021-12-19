import { GameState, isTileUnderConstruction, Tile, TileType, TileUnderConstruction } from './interfaces'
import { advanceTurnCounter, applyRevenue, applyWorkers, resetWorkers, resolveContracts } from './turn'
import { map as mapDefinition } from '../data/map'
import { tileCatalog } from '../data/tile-catalog'
import { projectCatalog } from '../data/project-catalog'
export * from './interfaces'

const STARTING_MONEY = 1000000
const STARTING_WORKERS = 3

export function createGameState (): GameState {
  const state = {
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
    },
    tileCatalog,
    projectCatalog
  }

  return state
}

function initializeTiles (): Array<Tile> {
  return mapDefinition.tiles.map((catalogEntryId: TileType): Tile => ({
    type: catalogEntryId,
    activeProject: null
  }))
}

export function playerInitiateProject (state: GameState, tileIndex: number, projectIndex: number): GameState {
  const tile = state.map.tiles[tileIndex] as TileUnderConstruction
  const tileDefinition = tileCatalog[tile.type]
  const activeProject = {
    type: tileDefinition.projects[projectIndex],
    progress: 0,
    assignedWorkers: 0
  }
  return {
    ...state,
    map: {
      ...state.map,
      tiles: state.map.tiles.map((v, i) => i === tileIndex
        ? {
            ...v,
            activeProject
          }
        : v)
    }
  } // TODO extract helper funcs?
}

export function playerAssignWorkers (initialState: GameState, tileIndex: number, workerCount: number): GameState {
  let state = initialState
  const tile = state.map.tiles[tileIndex]
  if (isTileUnderConstruction(tile)) {
    const priorWorkers = tile.activeProject.assignedWorkers
    const delta = workerCount - priorWorkers
    state = {
      ...state,
      map: {
        ...state.map,
        tiles: state.map.tiles.map((v, i) => i === tileIndex && isTileUnderConstruction(v)
          ? {
              ...v,
              activeProject: {
                ...v.activeProject,
                assignedWorkers: v.activeProject.assignedWorkers + delta
              }
            }
          : v)
      },
      player: {
        ...state.player,
        resources: {
          ...state.player.resources,
          workers: {
            ...state.player.resources.workers,
            free: state.player.resources.workers.free - delta
          }
        }
      }
    }
  }
  return state
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
