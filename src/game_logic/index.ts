export * from './interfaces';
import { GameMapDefinition, GameState, isTileUnderConstruction, Tile, TileCatalog, TileCatalogEntryId, TileUnderConstruction } from "./interfaces";
import { advanceTurnCounter, applyRevenue, applyWorkers, checkWinLoss, resetWorkers, resolveContracts } from "./turn";

const STARTING_MONEY = 1000000;
const STARTING_WORKERS = 3;

export function createGameState(mapDefinition: GameMapDefinition, tileCatalog: TileCatalog): GameState {
  const state = {
    game: {
      turnCounter: 0
    },
    player: {
      resources: {
        money: {
          balance: STARTING_MONEY,
          revenue: 0
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
      tiles: initializeTiles(mapDefinition, tileCatalog),
      size: mapDefinition.size
    },
    tileCatalog
  };

  return state;
}

function initializeTiles(mapDefinition: GameMapDefinition, tileCatalog: TileCatalog): Array<Tile> {
  return mapDefinition.tiles.map((catalogEntryId: TileCatalogEntryId): Tile => ({
    catalogEntry: tileCatalog[catalogEntryId]
  }));
}

export function playerInitiateProject(state: GameState, tileIndex: number, projectIndex: number) {
  const tile = state.map.tiles[tileIndex] as TileUnderConstruction;
  tile.activeProject = {
    project: tile.catalogEntry.projects[projectIndex],
    progress: 0,
    assignedWorkers: 0
  };
}

export function playerAssignWorkers(state: GameState, tileIndex: number, workerCount: number) {
  const tile = state.map.tiles[tileIndex];
  if (isTileUnderConstruction(tile)) {
    const priorWorkers = tile.activeProject.assignedWorkers;
    const delta = workerCount - priorWorkers;
    tile.activeProject.assignedWorkers += delta;
    state.player.resources.workers.free -= delta;
  }
}


export function advanceTurn(state: GameState) {
  applyRevenue(state);
  applyWorkers(state);
  resetWorkers(state);
  resolveContracts(state);
  advanceTurnCounter(state);
  return checkWinLoss(state);
}