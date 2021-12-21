import { projectCatalog } from './data/project-catalog'
import { advanceTurn, createGameState, isTileUnderConstruction, playerAssignWorkers, playerInitiateProject } from './game_logic'

export function playGameLogic () {
  // To begin the game, we need an initial state
  // However, that state will be initialized from a description of the game map and a tile catalog
  let state = createGameState()

  // We  will mimic a few player turns and inspect the state

  // Turn 1

  // Player clicks on the ruined fire station at space x:0, y:0
  const selectedTileIndex = 0
  // Player selects the "Repair" project, which is the first project in the list of projects for the tile
  const selectedProjectIndex = 0

  // Inspect the tile to see what it is
  let tile = state.map.tiles[selectedTileIndex]
  console.log(tile.type)

  // Commit that action: "Start repairing the fire station"
  state = playerInitiateProject(state, selectedTileIndex, selectedProjectIndex)

  // Player adds workers to the project
  const workerCount = 3
  state = playerAssignWorkers(state, selectedTileIndex, workerCount)

  // End turn 1
  state = advanceTurn(state)

  // Inspect the state of the game and see how work is progressing
  // NOTE: refresh stale reference
  tile = state.map.tiles[selectedTileIndex]
  if (isTileUnderConstruction(tile)) {
    console.log(
      tile.activeProject.progress,
      '/',
      projectCatalog[tile.activeProject.type].effort
    )
  }

  // Turn 2
  // Player wants to keep working on the fire station
  // Player adds workers to the project
  state = playerAssignWorkers(state, selectedTileIndex, workerCount)

  // End turn 2
  state = advanceTurn(state)

  // Inspect the state of the game and see how work is progressing
  tile = state.map.tiles[selectedTileIndex]
  if (isTileUnderConstruction(tile)) {
    console.log(
      tile.activeProject.progress,
      '/',
      projectCatalog[tile.activeProject.type].effort
    )
  }

  // Turn 3
  // Player wants to keep working on the fire station
  // Player adds workers to the project
  state = playerAssignWorkers(state, selectedTileIndex, workerCount)

  // End turn 3
  state = advanceTurn(state)

  // Inspect the state of the game and see how work is progressing
  tile = state.map.tiles[selectedTileIndex]
  console.log(tile.type)
}
