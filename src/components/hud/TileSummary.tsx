import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { ProjectsDisplay } from './ProjectsDisplay'
import { Tile, WorkerState } from '../../game_logic'
import { dispatcher } from '../reducers'
import CloseIcon from '@mui/icons-material/Close'
import { tileCatalog } from '../../data/tile-catalog'
import { TagList } from './TagList'

export function TileSummary (props: {
  tile: Tile | null,
  tileIndex: number | null,
  workers: WorkerState,
  dispatch: dispatcher
}) {
  if (props.tile === null || props.tileIndex === null) {
    return null
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
        title={`${tileDefinition.name}`}
        action={
          <IconButton onClick={onCloseClick}><CloseIcon /></IconButton>
        }
        subheader={
          <>
            {'$' + tileDefinition.revenue + '/turn , 🙂' + tileDefinition.happiness}
            <TagList tags={tileDefinition.tags} />
          </>
}
        titleTypographyProps={{ variant: 'h6' }}
        subheaderTypographyProps={{ variant: 'body2' }}
      />
      <CardContent className='tile-card-content'>
        <Typography style={{ paddingBottom: '12px' }} variant='body2'>{tileDefinition.description}</Typography>
        {tileDefinition.projects && tileDefinition.projects.length > 0 && <ProjectsDisplay tile={props.tile} tileIndex={props.tileIndex} workers={props.workers} dispatch={props.dispatch} />}
      </CardContent>
    </Card>
  )
}
