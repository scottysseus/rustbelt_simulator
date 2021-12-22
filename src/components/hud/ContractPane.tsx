import { Card, Collapse, List, ListItem, Stack, Typography } from '@mui/material'
import { Contract } from '../../game_logic'
import { catalog } from '../../data/contract-catalog'
import { TransitionGroup } from 'react-transition-group'

function contractItem (props: {contract: Contract}) {
  return (
    <Collapse className='contract-list-item-collapse' key={props.contract.name}>
      <ListItem className='contract-list-item-collapse'>
        <Card className='contract-card'>
          <div className='contract-card-heading'>
            <Typography sx={{ fontSize: 'h6.fontSize' }}>{props.contract.name}</Typography>
            <Typography variant='caption'>
              {/* TODO devise a way to consistently display rewards */}
              {props.contract.reward}
            </Typography>
          </div>
          <Typography>{props.contract.description}</Typography>
        </Card>
      </ListItem>
    </Collapse>
  )
}

export function ContractPane () {
  const contracts = Object.keys(catalog).map(contractId => contractItem({ contract: catalog[contractId] }))

  return (
    <List className='contract-pane pane contract-list' spacing={2}>
      <TransitionGroup>
        {contracts}
      </TransitionGroup>
    </List>
  )
}
