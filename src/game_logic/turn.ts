import { GameState, Tile, isTileUnderConstruction } from "./interfaces";

export function applyRevenue(state: GameState) {
  state.player.resources.money.balance = state.player.resources.money.balance + state.player.resources.money.revenue;
}


// This is the guts of the game!
export function applyWorkers(state: GameState) {
  // Keep it simple
  for (const tile of state.map.tiles) {
    applyWorkersAtTile(state, tile);
  }
}

export function applyWorkersAtTile(state: GameState, tile: Tile) {
  if (isTileUnderConstruction(tile)) {
    const delta = tile.activeProject.assignedWorkers;
    tile.activeProject.progress += delta;
    tile.activeProject.assignedWorkers = 0;


    // Check if project is done
    if (tile.activeProject.progress == tile.activeProject.project.effort) {
      // Change the catalog entry
      tile.catalogEntry = state.tileCatalog[tile.activeProject.project.targetCatalogEntryId];
      let t = tile as Tile;
      delete t.activeProject;
    }

  }
}

export function resetWorkers(state: GameState) {
  state.player.resources.workers.free = state.player.resources.workers.max;
}

export function resolveContracts(state: GameState) {
  for (const contract of state.player.contracts.open) {
    contract.check(state);
    if (contract.completed) {
      contract.reward(state);
    }
  }

  const newOpen = [];
  let contract;
  while (contract = state.player.contracts.open.pop()) {
    if (contract.completed) {
      state.player.contracts.completed.push(contract as CompletedContract);
    } else {
      newOpen.push(contract);
    }
  }
  state.player.contracts.open.unshift(...newOpen);
}

export function advanceTurnCounter(state: GameState) {
  state.game.turnCounter = state.game.turnCounter + 1;
}

export function checkWinLoss(state: GameState): boolean {
  return state.player.resources.money.balance > 0;
}
