import React from 'react'
import { PlayerSummaryPane } from './PlayerSummaryPane'

export function GameDisplay (props) {
  return (
    <div id='container'>
      <PlayerSummaryPane id='player-summary' />
      <div id='turn-summary'>turn summary</div>
      <div id='contracts'>contracts</div>
      <div id='details'>details</div>
    </div>
  )
}
