import { Hud } from './Hud'
import { GameViewPort } from './view/GameViewPort'

export function GameDisplay () {
  return (
    <div className='container'>
      <GameViewPort />
      <Hud />
    </div>
  )
}
