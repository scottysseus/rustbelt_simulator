import { useReducer } from 'react'
import { hydrate } from '../data/hydrate'
import { map } from '../data/map'
import { catalog as projectCatalog } from '../data/project-catalog'
import { catalog as tileCatalog } from '../data/tile-catalog'
import { advanceTurn, createGameState, GameState } from '../game_logic'
import { Hud } from './Hud'
import { GameViewPort } from './view/GameViewPort'

export interface UiState {
  selectedTile?: number
}

export interface GameAction {
  type: string
  projectIndex?: number
}
function reducer (state: GameState, action: GameAction): GameState {
  console.log(action)
  switch (action.type) {
    case 'advanceTurn':
      advanceTurn(state)
  }
  return Object.assign({}, state)
}

function uiReducer (state: UiState, action: {type: string, tileIndex: number}): UiState {
  switch (action.type) {
    case 'selectTile':
      return Object.assign({}, state, { selectedTile: action.tileIndex })
    default:
      return Object.assign({}, state)
  }
}
export type uiDispatcher = (action: {type: string, tileIndex: number}) => void
export type GameDispatch = (action: GameAction) => void

export function GameDisplay () {
  const catalogs = hydrate(tileCatalog, projectCatalog)

  // To begin the game, we need an initial state
  // However, that state will be initialized from a description of the game map and a tile catalog
  const startingState = createGameState(map, catalogs.tileCatalog, catalogs.projectCatalog)
  const startingUiState: UiState = {
  }

  const [gameState, dispatch] = useReducer(reducer, startingState)
  const [uiState, dispatchUI] = useReducer(uiReducer, startingUiState)

  return (
    <div className='container'>
      <GameViewPort gameState={gameState} uiState={uiState} dispatchUi={dispatchUI} />
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <Hud gameState={gameState} uiState={uiState} dispatch={dispatch} />
    </div>
  )
}
