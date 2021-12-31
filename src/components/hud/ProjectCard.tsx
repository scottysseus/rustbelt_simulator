import { Card, CardContent, CardHeader } from '@mui/material'
import { tileCatalog } from '../../data/tile-catalog'
import { ProjectDefinition } from '../../game_logic'
import { TextUnit } from '../TextUnit'
import { TagList } from './TagList'

export function ProjectCard (props: {
    project: ProjectDefinition,
    content?: JSX.Element,
    action?: JSX.Element
}) {
  const targetTileDefinition = tileCatalog[props.project.targetTileType]
  return (
    <Card className='project-card'>
      <CardHeader
        className='project-card-header'
        title={props.project.name}
        subheader={
          <>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px' }}>
              <div style={{ flexShrink: 0 }}>{'🏷️ $' + props.project.cost + ' 👤' + props.project.effort + ' '}</div>🡆
              <div style={{ flexGrow: 3 }}>
                <b>{' ' + targetTileDefinition.name}</b> {' $' + targetTileDefinition.revenue + '/turn'} <TextUnit text={'🙂' + targetTileDefinition.happiness} />
                <TagList tags={targetTileDefinition.tags} />
              </div>
            </div>
          </>
        }
        titleTypographyProps={{ variant: 'button' }}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={props.action}
      />
      <CardContent className='project-card-content'>
        {props.content}
      </CardContent>
    </Card>
  )
}
