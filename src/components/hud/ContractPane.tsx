import { Card, Stack, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentDissatisfied'
import { Contract } from '../../game_logic'
import { catalog } from '../../data/contract-catalog'

function contractItem (props: {contract: Contract}) {
  return (
    <Card key={props.contract.name} className='contract-card contract-list-item'>
      <div className='contract-card-heading'>
        <Typography sx={{ fontSize: 'h6.fontSize' }}>{props.contract.name}</Typography>
        <Typography variant='caption'>
          {/* TODO devise a way to consistently display rewards */}
          {props.contract.reward}
        </Typography>
      </div>
      <Typography>{props.contract.description}</Typography>
    </Card>
  )
}

export function ContractPane () {
  const contracts = Object.keys(catalog).map(contractId => contractItem({ contract: catalog[contractId] }))

  return (
    <Stack className='contract-pane pane contract-list' spacing={2}>
      {contracts}
    </Stack>
  )
}
