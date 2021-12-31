import { Modal } from '@mui/material'
import { CSSProperties, forwardRef, useEffect, useState } from 'react'
import { useImmerReducer } from 'use-immer'
import { createGameState } from '../game_logic'
import { Hud } from './hud/Hud'
import { reducer, State, Action } from './reducers'
import { GameViewPort } from './view/GameViewPort'

const startingState: State = {
  game: createGameState(),
  ui: { selectedTile: null }
}

type GameDisplayProps = {
  style?: CSSProperties // applied by transition
  started: boolean
}

export const GameDisplay = forwardRef<HTMLDivElement, GameDisplayProps>((props, ref) => {
  const [state, dispatch] = useImmerReducer<State, Action>(reducer, startingState)
  const [transitioningTurn, setTransitioningTurn] = useState(false)
  useEffect(() => {
    if (props.started) {
      setTransitioningTurn(true)
      const timerId = setTimeout(() => { setTransitioningTurn(false) }, 2000)
      return () => { clearTimeout(timerId) }
    }
  }, [props.started, state.game.game.turnCounter])

  return (
    <div style={props.style} ref={ref} className='container'>
      <GameViewPort state={state} dispatch={dispatch} />
      <Hud state={state} dispatch={dispatch} />
      <Modal open={transitioningTurn}><div className='turn-transition-modal'>{'Turn ' + state.game.game.turnCounter}</div></Modal>
    </div>
  )
})
