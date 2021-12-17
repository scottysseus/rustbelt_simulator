import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { ProjectsDisplay } from './ProjectsDisplay'
import { Tile } from '../../game_logic'
import { gameDispatcher, uiDispatcher } from '../reducers'
import CloseIcon from '@mui/icons-material/Close'

export function TileSummary (props: {
  tile?: Tile,
  dispatchGame: gameDispatcher,
  dispatchUI: uiDispatcher
}) {
  if (!props.tile) {
    return (<div />)
  }

  const onCloseClick = () => {
    props.dispatchUI({
      type: 'deselectTile'
    })
  }

  return (
    <Card elevation={3}>
      <CardHeader
        title={`${props.tile.definition.name} Details`}
        action={
          <IconButton onClick={onCloseClick}><CloseIcon /></IconButton>
        }
      />
      <CardContent>
        <ProjectsDisplay tile={props.tile} dispatch={props.dispatchGame} />
      </CardContent>
    </Card>
  )
}
