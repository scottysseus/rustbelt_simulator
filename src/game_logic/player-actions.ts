import produce from 'immer'
import { tileCatalog } from '../data/tile-catalog'
import { GameState, isTileUnderConstruction, TileUnderConstruction } from './interfaces'

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

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
  })
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

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
    draft.player.resources.workers.free -= delta
  })
}
