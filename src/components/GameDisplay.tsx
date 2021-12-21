import { useReducer } from 'react'
import { createGameState } from '../game_logic'
import { Hud } from './hud/Hud'
import { reducer, State } from './reducers'
import { GameViewPort } from './view/GameViewPort'

const startingState: State = {
  game: createGameState(),
  ui: { selectedTile: null }
}

export function GameDisplay () {
  const [state, dispatch] = useReducer(reducer, startingState)

  return (
    <div className='container'>
      <GameViewPort state={state} dispatch={dispatch} />
      <Hud state={state} dispatch={dispatch} />
    </div>
  )
}
