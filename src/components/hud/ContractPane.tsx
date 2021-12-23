import { Card, Collapse, List, ListItem, Typography } from '@mui/material'
import { Contract, GameState } from '../../game_logic'
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
              {props.contract.reward}
            </Typography>
          </div>
          <Typography>{props.contract.description}</Typography>
        </Card>
      </ListItem>
    </Collapse>
  )
}

export function ContractPane (props: {contracts: Contract[]}) {
  const contracts = props.contracts.map(contract => contractItem({ contract }))

  return (
    <List className='contract-pane pane contract-list'>
      <TransitionGroup>
        {contracts}
      </TransitionGroup>
    </List>
  )
}
