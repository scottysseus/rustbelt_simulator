import { Card, Stack, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentDissatisfied'

export const testContracts = [
  {
    name: 'Green tourism',
    description: 'Improve the town\'s wellness while also driving green tourism revenue by building more parks.',
    reward: <>(+$10/turn) +<SentimentSatisfiedAltIcon fontSize='inherit' />8</>,
    condition: 'Build 3 #park properties.',
    progress: '2/3'
  },
  {
    name: 'I\'m lovin\' it',
    description: 'Everyone loves the addictive flavor of fast food, but the poor nutrition has a cost to public health.',
    reward: <>(+$10/turn) +<SentimentSatisfiedAltIcon fontSize='inherit' />8</>,
    condition: 'Build 5 #fastFood properties.'
  },
  {
    name: 'Broken windows theory',
    description: 'Cleanliness begets cleanliness: clean up all properties in Rustfield.',
    reward: <>(+$10/turn) +<SentimentSatisfiedAltIcon fontSize='inherit' />8</>,
    condition: 'Restore all properties.',
    progress: '14/25'
  }
]

function contractItem (props) {
  return (
    <Card key={props.name} className='contract-card contract-list-item'>
      <div className='contract-card-heading'>
        <Typography sx={{ fontSize: 'h6.fontSize' }}>{props.name}</Typography>
        <Typography variant='caption'>{props.reward}</Typography>
      </div>
      <Typography>{props.condition}</Typography>
    </Card>
  )
}

export function ContractPane (props) {
  const contracts = testContracts.map(contract => contractItem(contract))

  return (
    <Stack className='contract-pane pane contract-list' spacing={2}>
      {contracts}
    </Stack>
  )
}
