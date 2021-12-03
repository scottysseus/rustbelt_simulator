export * from './interfaces';
import { GameMapDefinition, GameState, InProgressTile } from "./interfaces";
import { advanceTurnCounter, applyRevenue, applyWorkers, checkWinLoss, resetWorkers, resolveContracts } from "./turn";

const STARTING_MONEY = 1000000;
const STARTING_WORKERS = 3;

export function createGameState(mapDefinition: GameMapDefinition) {
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
        completed: []
      }
    },
    map: {}
  };

  state.map = {

  }

  return state;
}

export function playerInitiateProject(state: GameState, tileIndex: number, projectId: string) {
  state.map.tiles[tileIndex].state = 'in-progress';
  const tile = state.map.tiles[tileIndex] as InProgressTile;
  tile.projectId = projectId;
  tile.progress = 0;
  tile.assignedWorkers = 0;
}

export function playerAssignWorkers(state: GameState, tileIndex: number, workercount: number) {
  const tile = state.map.tiles[tileIndex] as InProgressTile;
  tile.assignedWorkers = workercount;
}


export function advanceTurn(state: GameState) {
  applyRevenue(state);
  applyWorkers(state);
  resetWorkers(state);
  resolveContracts(state);
  advanceTurnCounter(state);
  return checkWinLoss(state);
}