import { GameMapDefinition, GameState, isTileUnderConstruction, Tile, TileCatalog, TileCatalogEntryId, TileUnderConstruction, ProjectCatalog } from './interfaces'
import { advanceTurnCounter, applyRevenue, applyWorkers, checkWinLoss, resetWorkers, resolveContracts } from './turn'
import { map as mapDefinition } from '../data/map'
import { catalog as tileCatalog } from '../data/tile-catalog'
import { catalog as projectCatalog } from '../data/project-catalog'
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
  return mapDefinition.tiles.map((catalogEntryId: TileCatalogEntryId): Tile => ({
    definition: catalogEntryId
  }))
}

export function playerInitiateProject (state: GameState, tileIndex: number, projectIndex: number) {
  const tile = state.map.tiles[tileIndex] as TileUnderConstruction
  const tileDefinition = tileCatalog[tile.definition]
  tile.activeProject = {
    project: tileDefinition.projects[projectIndex],
    progress: 0,
    assignedWorkers: 0
  }
}

export function playerAssignWorkers (state: GameState, tileIndex: number, workerCount: number) {
  const tile = state.map.tiles[tileIndex]
  if (isTileUnderConstruction(tile)) {
    const priorWorkers = tile.activeProject.assignedWorkers
    const delta = workerCount - priorWorkers
    tile.activeProject.assignedWorkers += delta
    state.player.resources.workers.free -= delta
  }
}

export function advanceTurn (state: GameState) {
  applyRevenue(state)
  applyWorkers(state)
  resetWorkers(state)
  resolveContracts(state)
  advanceTurnCounter(state)
  return checkWinLoss(state)
}
