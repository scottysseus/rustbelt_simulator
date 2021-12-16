import { Card, CardContent, Typography } from '@mui/material'
import { ProjectsDisplay } from './ProjectsDisplay'
import { Tile } from '../../game_logic'
import { GameDispatch } from '../GameDisplay'

export function TileSummary (props: {tile?: Tile, dispatch: GameDispatch}) {
  if (!props.tile) {
    return (<div />)
  }

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant='h6'>{props.tile.definition.name}</Typography>
        <ProjectsDisplay tile={props.tile} dispatch={props.dispatch} />
      </CardContent>
    </Card>
  )
}
