import { GameState, Tile, isTileUnderConstruction } from './interfaces'

export function applyRevenue (state: GameState) {
  state.player.resources.money.balance = state.player.resources.money.balance + state.player.resources.money.revenue
}

// This is the guts of the game!
export function applyWorkers (state: GameState) {
  // Keep it simple
  for (const tile of state.map.tiles) {
    applyWorkersAtTile(state, tile)
  }
}

export function applyWorkersAtTile (state: GameState, tile: Tile) {
  if (isTileUnderConstruction(tile)) {
    const delta = tile.activeProject.assignedWorkers
    tile.activeProject.progress += delta
    tile.activeProject.assignedWorkers = 0

    // Check if project is done
    if (tile.activeProject.progress === tile.activeProject.project.effort) {
      // Change the catalog entry
      tile.definition = tile.activeProject.project.targetTileDefinition
      const t = tile as Tile
      delete t.activeProject

      // Give player rewards for the tile
      state.player.victory.happiness += tile.definition.happiness
      state.player.resources.money.revenue += tile.definition.revenue
    }
  }
}

export function resetWorkers (state: GameState) {
  state.player.resources.workers.free = state.player.resources.workers.max
}

export function resolveContracts (state: GameState) {
  for (const contract of state.player.contracts.open) {
    contract.check(state)
    if (contract.completed) {
      contract.reward(state)
    }
  }

  const newOpen = []
  let contract
  while ((contract = state.player.contracts.open.pop()) !== undefined) {
    if (contract.completed) {
      state.player.contracts.completed.push(contract)
    } else {
      newOpen.push(contract)
    }
  }
  state.player.contracts.open.unshift(...newOpen)
}

export function advanceTurnCounter (state: GameState) {
  state.game.turnCounter = state.game.turnCounter + 1
}

export function checkWinLoss (state: GameState): boolean {
  return state.player.resources.money.balance > 0
}
