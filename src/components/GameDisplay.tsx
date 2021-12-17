import { useReducer } from 'react'
import { hydrate } from '../data/hydrate'
import { map } from '../data/map'
import { catalog as projectCatalog } from '../data/project-catalog'
import { catalog as tileCatalog } from '../data/tile-catalog'
import { createGameState } from '../game_logic'
import { Hud } from './Hud'
import { gameReducer, uiReducer, UIState } from './reducers'
import { GameViewPort } from './view/GameViewPort'

export function GameDisplay (props) {
  const catalogs = hydrate(tileCatalog, projectCatalog)

  // To begin the game, we need an initial state
  // However, that state will be initialized from a description of the game map and a tile catalog
  const startingState = createGameState(map, catalogs.tileCatalog, catalogs.projectCatalog)
  const startingUiState: UIState = {
  }

  const [gameState, dispatch] = useReducer(gameReducer, startingState)
  const [uiState, dispatchUI] = useReducer(uiReducer, startingUiState)

  return (
    <div className='container'>
      <GameViewPort gameState={gameState} uiState={uiState} dispatchUi={dispatchUI} />
      <Hud gameState={gameState} uiState={uiState} dispatchGame={dispatch} dispatchUI={dispatchUI} />
    </div>
  )
}
