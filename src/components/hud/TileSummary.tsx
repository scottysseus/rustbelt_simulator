import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import { ProjectsDisplay } from './ProjectsDisplay'
import { Tile } from '../../game_logic'
import { gameDispatcher, uiDispatcher } from '../reducers'
import CloseIcon from '@mui/icons-material/Close'

export function TileSummary (props: {
  tile?: Tile,
  dispatchGame: gameDispatcher,
  dispatchUi: uiDispatcher
}) {
  if (!props.tile) {
    return (<div />)
  }

  const onCloseClick = () => {
    props.dispatchUi({
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
        <ProjectsDisplay tile={props.tile} dispatchGame={props.dispatchGame} />
      </CardContent>
    </Card>
  )
}
