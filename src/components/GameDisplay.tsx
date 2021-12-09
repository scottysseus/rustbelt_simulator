import { HUD } from './HUD'
import { GameViewPort } from './view/GameViewPort'

export function GameDisplay (props) {
  return (
    <div className='container'>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <HUD onClick={(e) => { console.log('HUD clicked') }} />
      <div className='viewport-section'>
        <div className='viewport-center'>
          <GameViewPort />
        </div>
      </div>
    </div>
  )
}
