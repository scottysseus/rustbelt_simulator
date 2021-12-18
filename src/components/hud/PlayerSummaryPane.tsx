import { Chip, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
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

function summaryPaneRow (props: SummaryPaneRowProps) {
  return (
    <TableRow key={props.icon} className='player-summary-pane-row'>
      <TableCell><i className='material-icons'>{props.icon}</i></TableCell>
      <TableCell><Typography>{props.value}</Typography></TableCell>
      <TableCell>{props.chip && <Chip label={props.chip.caption} color={props.chip.color} />}</TableCell>
    </TableRow>
  )
}

function formatRevenue (value: number) {
  if (value >= 0) {
    return `+ $${Math.abs(value)}`
  } else {
    return `- $${Math.abs(value)}`
  }
}

export function PlayerSummaryPane (props: {id: string, playerState: PlayerState}) {
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
  const rows = summary.map(row => summaryPaneRow(row))
  return (
    <Table id={props.id} className='player-summary-pane pane'>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  )
}
