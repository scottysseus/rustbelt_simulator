import { AppBar, Badge, Divider, Typography } from '@mui/material'
import { GameState } from '../../game_logic'

function formatRevenue (value: number) {
  if (value >= 0) {
    return `+$${Math.abs(value)}`
  } else {
    return `-$${Math.abs(value)}`
  }
}

export function PlayerSummaryStrip (props: {gameState: GameState}) {
  const revenue = props.gameState.player.resources.money.revenue
  const idle = props.gameState.player.resources.workers.free

  return (
    <AppBar className='player-summary-strip'>
      <Typography>${props.gameState.player.resources.money.balance}</Typography>
      <Divider orientation='vertical' variant='middle' />
      <Typography>{formatRevenue(revenue)}/turn</Typography>
      <Divider orientation='vertical' variant='middle' />
      <Typography>🙂{props.gameState.player.victory.happiness}</Typography>
      <Divider orientation='vertical' variant='middle' />
      <Typography>
        <Badge invisible={idle < 1} badgeContent={idle} color='primary'>
          👤{props.gameState.player.resources.workers.max}
        </Badge>
      </Typography>
      <Divider orientation='vertical' variant='middle' />
      <Typography>Turns Elapsed: {props.gameState.game.turnCounter}</Typography>
    </AppBar>
  )
}
