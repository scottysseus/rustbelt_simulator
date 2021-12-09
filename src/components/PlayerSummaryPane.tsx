import { Chip, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'

const summary = [
  {
    icon: 'attach_money',
    value: '23405',
    chip: {
      caption: '+300',
      color: 'primary'
    }
  },
  {
    icon: 'sentiment_satisfied_alt',
    value: '34'
  },
  {
    icon: 'person',
    value: 9,
    chip: {
      caption: '3 idle',
      color: 'warning'
    }
  }
]

function summaryPaneRow (props) {
  return (
    <TableRow key={props.icon} className='player-summary-pane-row'>
      <TableCell><i className='material-icons'>{props.icon}</i></TableCell>
      <TableCell><Typography>{props.value}</Typography></TableCell>
      <TableCell>{props.chip && <Chip label={props.chip.caption} color={props.chip.color} />}</TableCell>
    </TableRow>
  )
}

export function PlayerSummaryPane (props) {
  const rows = summary.map(row => summaryPaneRow(row))
  return (
    <Table id={props.id} className='player-summary-pane pane'>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  )
}
