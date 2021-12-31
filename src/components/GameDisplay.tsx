import { Modal } from '@mui/material'
import { useEffect, useState } from 'react'
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
  started: boolean
}

export function GameDisplay (props: GameDisplayProps) {
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
    <>
      <GameViewPort state={state} dispatch={dispatch} />
      <Hud state={state} dispatch={dispatch} />
      <Modal open={transitioningTurn}><div className='turn-transition-modal'>{'Turn ' + (state.game.game.turnCounter + 1)}</div></Modal>
    </>
  )
}
