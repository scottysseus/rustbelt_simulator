import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import { ProjectsDisplay } from './ProjectsDisplay'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'
import CloseIcon from '@mui/icons-material/Close'
import { catalog as tileCatalog } from '../../data/tile-catalog'

export function TileSummary (props: {
  tile?: Tile,
  dispatch: dispatcher
}) {
  if (!props.tile) {
    return (<div />)
  }

  const onCloseClick = () => {
    props.dispatch({
      type: 'deselectTile'
    })
  }

  const tileDefinition = tileCatalog[props.tile.type]

  return (
    <Card elevation={3}>
      <CardHeader
        title={`${tileDefinition.name} Details`}
        action={
          <IconButton onClick={onCloseClick}><CloseIcon /></IconButton>
        }
      />
      <CardContent>
        <ProjectsDisplay tile={props.tile} dispatch={props.dispatch} />
      </CardContent>
    </Card>
  )
}
