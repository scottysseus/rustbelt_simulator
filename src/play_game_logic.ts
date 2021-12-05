import { advanceTurn, createGameState, playerAssignWorkers, playerInitiateProject, TileUnderConstruction } from "./game_logic/index";
import { map } from './data/map';
import { catalog } from './data/tile-catalog';

export function playGameLogic() {
// To begin the game, we need an initial state
// However, that state will be initialized from a description of the game map and a tile catalog
const state = createGameState(map, catalog);

// We  will mimic a few player turns and inspect the state

// Turn 1

// Player clicks on the ruined fire station at space x:0, y:0
const selectedTileIndex = 0;
// Player selects the "Repair" project, which is the first project in the list of projects for the tile
const selectedProjectIndex = 0;


// Inspect the tile to see what it is
let tile = (state.map.tiles.at(selectedTileIndex) as TileUnderConstruction);
console.log(tile.catalogEntry);

// Commit that action: "Start repairing the fire station"
playerInitiateProject(state, selectedTileIndex,  selectedProjectIndex);

// Player adds workers to the project
let workerCount = 3;
playerAssignWorkers(state, selectedTileIndex, workerCount);

// End turn 1
advanceTurn(state);

// Inspect the state of the game and see how work is progressing
// MAJOR TODO: make it easier to inspect this state
tile = (state.map.tiles.at(selectedTileIndex) as TileUnderConstruction);
console.log(
  tile.activeProject.progress,
  "/",
  tile.activeProject.project.effort
);


// Turn 2
// Player wants to keep working on the fire station
// Player adds workers to the project
playerAssignWorkers(state, selectedTileIndex, workerCount);

// End turn 2
advanceTurn(state);

// Inspect the state of the game and see how work is progressing
// MAJOR TODO: make it easier to inspect this state
tile = (state.map.tiles.at(selectedTileIndex) as TileUnderConstruction);
console.log(
  tile.activeProject.progress,
  "/",
  tile.activeProject.project.effort
);

// Turn 3
// Player wants to keep working on the fire station
// Player adds workers to the project
playerAssignWorkers(state, selectedTileIndex, workerCount);

// End turn 3
advanceTurn(state);

// Inspect the state of the game and see how work is progressing
// MAJOR TODO: make it easier to inspect this state
tile = (state.map.tiles.at(selectedTileIndex) as TileUnderConstruction);
console.log(tile.catalogEntry);

}