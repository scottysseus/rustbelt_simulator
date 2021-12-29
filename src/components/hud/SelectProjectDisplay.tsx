import { Button, Card, CardActions, CardContent, CardHeader, List, ListItem, ListSubheader, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { projectCatalog } from '../../data/project-catalog'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'
import { TagList } from './TagList'

export function SelectProjectDisplay (props: {tile: Tile, tileIndex: number, dispatch: dispatcher}) {
  const tileDefinition = tileCatalog[props.tile.type]
  const projects = tileDefinition.projects.map((id) => projectCatalog[id])
  console.log('projects', projects, props.tile)
  const projectList = projects.map((project, index) => {
    const onClick = () => {
      props.dispatch({ type: 'selectProject', projectIndex: index, tileIndex: props.tileIndex })
    }
    const targetTileDefinition = tileCatalog[project.targetTileType]
    return (
      <ListItem className='project-list-item' key={project.id}>
        <Card className='project-card'>
          <CardHeader
            className='project-card-header'
            title={project.name}
            subheader={
              <>
                {'$' + project.cost + ' 👤' + project.effort + ' → ' +
                targetTileDefinition.name + ' $' + targetTileDefinition.revenue + '/turn 🙂' + targetTileDefinition.happiness}
                <TagList tags={targetTileDefinition.tags} />
              </>
            }
            titleTypographyProps={{ variant: 'button' }}
            subheaderTypographyProps={{ variant: 'body2' }}
            action={
              <Button onClick={onClick}>Start</Button>
            }
          />
          <CardContent className='project-card-content'>
            <Typography variant='body2'>{project.description}</Typography>
          </CardContent>
        </Card>
      </ListItem>
    )
  })

  return (
    <>
      <Typography><b>Projects</b></Typography>
      <List>{projectList}</List>
    </>
  )
}
