import { ContractPane } from './ContractPane'
import { PlayerSummaryPane } from './PlayerSummaryPane'

export function HUD (props) {
  return (
    <div className='hud'>
      <PlayerSummaryPane />
      <ContractPane />
    </div>
  )
}
