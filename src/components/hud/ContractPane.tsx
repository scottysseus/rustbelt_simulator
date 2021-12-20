import { Card, Stack, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentDissatisfied'

type ContractItemProps = {
  name: string
  description: string
  rewardMoneyPerTurn: number
  rewardHappiness: number
  condition: string
}

const testContracts: ContractItemProps[] = [
  {
    name: 'Green tourism',
    description: 'Improve the town\'s wellness while also driving green tourism revenue by building more parks.',
    rewardMoneyPerTurn: 10,
    rewardHappiness: 8,
    condition: 'Build 3 #park properties.'
  },
  {
    name: 'I\'m lovin\' it',
    description: 'Everyone loves the addictive flavor of fast food, but the poor nutrition has a cost to public health.',
    condition: 'Build 5 #fastFood properties.',
    rewardMoneyPerTurn: 10,
    rewardHappiness: 8
  },
  {
    name: 'Broken windows theory',
    description: 'Cleanliness begets cleanliness: clean up all properties in Rustfield.',
    condition: 'Restore all properties.',
    rewardMoneyPerTurn: 10,
    rewardHappiness: 8
  }
]

function contractItem (props: ContractItemProps) {
  return (
    <Card key={props.name} className='contract-card contract-list-item'>
      <div className='contract-card-heading'>
        <Typography sx={{ fontSize: 'h6.fontSize' }}>{props.name}</Typography>
        <Typography variant='caption'>
          (+${props.rewardMoneyPerTurn}/turn) +<SentimentSatisfiedAltIcon fontSize='inherit' />{props.rewardHappiness}
        </Typography>
      </div>
      <Typography>{props.condition}</Typography>
    </Card>
  )
}

export function ContractPane () {
  const contracts = testContracts.map(contract => contractItem(contract))

  return (
    <Stack className='contract-pane pane contract-list' spacing={2}>
      {contracts}
    </Stack>
  )
}
