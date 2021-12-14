import { Hud } from './Hud'
import { GameViewPort } from './view/GameViewPort'

export function GameDisplay () {
  return (
    <div className='container'>
      <Hud />
      <div className='viewport-section'>
        <div className='viewport-center'>
          <GameViewPort />
        </div>
      </div>
    </div>
  )
}
