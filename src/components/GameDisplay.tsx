import { CSSProperties, forwardRef, useReducer } from 'react'
import { createGameState } from '../game_logic'
import { Hud } from './hud/Hud'
import { reducer, State } from './reducers'
import { GameViewPort } from './view/GameViewPort'

const startingState: State = {
  game: createGameState(),
  ui: { selectedTile: null }
}

type GameDisplayProps = {
  style?: CSSProperties // applied by transition
}

export const GameDisplay = forwardRef<HTMLDivElement, GameDisplayProps>((props, ref) => {
  const [state, dispatch] = useReducer(reducer, startingState)

  return (
    <div style={props.style} ref={ref} className='container'>
      <GameViewPort state={state} dispatch={dispatch} />
      <Hud state={state} dispatch={dispatch} />
    </div>
  )
})
