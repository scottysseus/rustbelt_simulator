import { AppBar, Chip, Divider, Typography } from '@mui/material'
import { ComponentPropsWithoutRef } from 'react'
import { PlayerState } from '../../game_logic'

type MuiColor = ComponentPropsWithoutRef<typeof Chip>['color']
type SummaryPaneRowProps = {
  icon: string
  value: number
  chip?: {
    caption: string
    color: MuiColor
  }
}

function formatRevenue (value: number) {
  if (value >= 0) {
    return `+$${Math.abs(value)}`
  } else {
    return `-$${Math.abs(value)}`
  }
}

export function PlayerSummaryStrip (props: {id: string, playerState: PlayerState}) {
  const summary: SummaryPaneRowProps[] = [
    {
      icon: 'attach_money',
      value: props.playerState.resources.money.balance,
      chip: {
        caption: formatRevenue(props.playerState.resources.money.revenue),
        color: 'primary'
      }
    },
    {
      icon: 'sentiment_satisfied_alt',
      value: props.playerState.victory.happiness
    },
    {
      icon: 'person',
      value: props.playerState.resources.workers.max,
      chip: {
        caption: `${props.playerState.resources.workers.free} idle`,
        color: 'warning'
      }
    }
  ]

  const revenue = props.playerState.resources.money.revenue

  return (
    <AppBar id={props.id} className='player-summary-strip'>
      <Typography>${props.playerState.resources.money.balance}</Typography>
      <Chip color={revenue < 0 ? 'error' : 'default'} label={formatRevenue(revenue)} />
      <Divider orientation='vertical' variant='middle' />
    </AppBar>
  )
}
