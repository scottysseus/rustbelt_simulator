import React, { useReducer } from 'react'
import { hydrate } from '../data/hydrate'
import { map } from '../data/map'
import { catalog as projectCatalog } from '../data/project-catalog'
import { catalog as tileCatalog } from '../data/tile-catalog'
import { createGameState } from '../game_logic'
import { Hud } from './hud/Hud'
import { reducer, State } from './reducers'
import { GameViewPort } from './view/GameViewPort'

export const GameDisplay = React.forwardRef((props, ref) => {
  const catalogs = hydrate(tileCatalog, projectCatalog)

  // To begin the game, we need an initial state
  // However, that state will be initialized from a description of the game map and a tile catalog
  const startingState: State = {
    game: createGameState(map, catalogs.tileCatalog, catalogs.projectCatalog),
    ui: {}
  }

  const [state, dispatch] = useReducer(reducer, startingState)

  return (
    <div style={props.style} ref={ref} className='container'>
      <GameViewPort state={state} dispatch={dispatch} />
      <Hud state={state} dispatch={dispatch} />
    </div>
  )
})
