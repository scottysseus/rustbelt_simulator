import { tileCatalog } from '../data/tile-catalog'
import { GameState, isTileUnderConstruction, TileUnderConstruction } from './interfaces'
import { replaceOne } from './shared'

export function playerInitiateProject (state: GameState, tileIndex: number, projectIndex: number): GameState {
  const tile = state.map.tiles[tileIndex]
  const tileDefinition = tileCatalog[tile.type]
  const newTile: TileUnderConstruction = {
    ...tile,
    activeProject: {
      type: tileDefinition.projects[projectIndex],
      progress: 0,
      assignedWorkers: 0
    }
  }
  return {
    ...state,
    map: {
      ...state.map,
      tiles: replaceOne(state.map.tiles, tile, newTile)
    }
  }
}

export function playerAssignWorkers (state: GameState, tileIndex: number, workerCount: number): GameState {
  const tile = state.map.tiles[tileIndex]
  if (!isTileUnderConstruction(tile)) {
    return state
  }
  const priorWorkers = tile.activeProject.assignedWorkers
  const delta = workerCount - priorWorkers
  const newTile: TileUnderConstruction = {
    ...tile,
    activeProject: {
      ...tile.activeProject,
      assignedWorkers: tile.activeProject.assignedWorkers + delta
    }
  }

  return {
    ...state,
    map: {
      ...state.map,
      tiles: replaceOne(state.map.tiles, tile, newTile)
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
