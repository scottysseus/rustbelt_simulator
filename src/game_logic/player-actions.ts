import produce from 'immer'
import { projectCatalog } from '../data/project-catalog'
import { tileCatalog } from '../data/tile-catalog'
import { GameState, isTileUnderConstruction } from './interfaces'

export function playerInitiateProject (state: GameState, tileIndex: number, projectIndex: number): GameState {
  const tile = state.map.tiles[tileIndex]
  const tileDefinition = tileCatalog[tile.type]
  const project = projectCatalog[tileDefinition.projects[projectIndex]]

  const newTile = produce(tile, draft => {
    draft.activeProject = {
      type: project.id,
      progress: 0,
      assignedWorkers: 1
    }
  })

  const workers = state.player.resources.workers

  const newWorkers = produce(workers, draft => {
    draft.free = draft.free - 1
  })

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
    draft.player.resources.workers = newWorkers
    draft.player.resources.money.balance -= project.cost
  })
}

export function playerAssignWorkers (state: GameState, tileIndex: number, workerCount: number): GameState {
  const tile = state.map.tiles[tileIndex]
  if (!isTileUnderConstruction(tile)) {
    return state
  }
  const priorWorkers = tile.activeProject.assignedWorkers
  const delta = workerCount - priorWorkers

  const newTile = produce(tile, draft => {
    draft.activeProject.assignedWorkers += delta
  })

  return produce(state, draft => {
    draft.map.tiles[tileIndex] = newTile
    draft.player.resources.workers.free -= delta
  })
}
