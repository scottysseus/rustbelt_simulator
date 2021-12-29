import { Card, CardContent, CardHeader, Collapse, List, ListSubheader, ListItem, Typography } from '@mui/material'
import { Contract, ContractProgress, GameState } from '../../game_logic'
import { TransitionGroup } from 'react-transition-group'

function contractItem (props: {contract: Contract, progress: ContractProgress}) {
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
            <Typography variant='body2'>{props.contract.description}</Typography>
          </CardContent>
        </Card>
      </ListItem>
    </Collapse>
  )
}

export function ContractPane (props: {gameState: GameState}) {
  return (
    <List className='contract-pane pane contract-list'>
      <TransitionGroup>
        <Collapse appear><ListSubheader>Open</ListSubheader></Collapse>
        {props.gameState.player.contracts.open.map(contract => contractItem({ contract, progress: contract.calculateProgress(props.gameState) }))}
        {props.gameState.player.contracts.completed.length > 0 &&
          <Collapse appear><ListSubheader>Complete</ListSubheader></Collapse>}
        {props.gameState.player.contracts.completed.length > 0 &&
          props.gameState.player.contracts.completed.map(contract => contractItem({ contract, progress: contract.calculateProgress(props.gameState) }))}
      </TransitionGroup>
    </List>
  )
}
