import { Chip, Paper, Typography } from '@mui/material'

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
    <tr className='player-summary-pane-row'>
      <td><i className='material-icons'>{props.icon}</i></td>
      <td><Typography>{props.value}</Typography></td>
      <td>{props.chip && <Chip label={props.chip.caption} color={props.chip.color} />}</td>
    </tr>
  )
}

export function PlayerSummaryPane (props) {
  const rows = summary.map(row => summaryPaneRow(row))
  return (
    <Paper id={props.id} className='player-summary-pane'>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </Paper>
  )
}
