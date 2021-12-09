import { HUD } from './HUD'

export function GameDisplay (props) {
  return (
    <div className='container'>
      <HUD onClick={(e) => { console.log('HUD clicked') }} />
    </div>
  )
}
