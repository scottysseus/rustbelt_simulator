import { Card, CardContent, CardHeader, Collapse, List, ListSubheader, ListItem, Typography } from '@mui/material'
import { Contract } from '../../game_logic'
import { TransitionGroup } from 'react-transition-group'

function contractItem (props: {contract: Contract}) {
  return (
    <Collapse appear className='contract-list-item-collapse' key={props.contract.name}>
      <ListItem className='contract-list-item-collapse'>
        <Card className='contract-card'>
          <CardHeader
            className='contract-card-heading'
            title={props.contract.name}
            subheader={props.contract.reward}
            titleTypographyProps={{ variant: 'button' }}
            subheaderTypographyProps={{ variant: 'body2' }}
          />
          <CardContent className='contract-card-content'>
            <Typography>{props.contract.description}</Typography>
          </CardContent>
        </Card>
      </ListItem>
    </Collapse>
  )
}

export function ContractPane (props: {openContracts: ReadonlyArray<Contract>, completeContracts: ReadonlyArray<Contract>}) {
  return (
    <List className='contract-pane pane contract-list'>
      <TransitionGroup>
        <Collapse appear><ListSubheader>Open</ListSubheader></Collapse>
        {props.openContracts.map(contract => contractItem({ contract }))}
        {props.completeContracts.length > 0 && <Collapse appear><ListSubheader>Complete</ListSubheader></Collapse>}
        {props.completeContracts.length > 0 && props.completeContracts.map(contract => contractItem({ contract }))}
      </TransitionGroup>
    </List>
  )
}
