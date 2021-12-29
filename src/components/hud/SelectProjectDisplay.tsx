import { Button, List, ListItem, Typography } from '@mui/material'
import { projectCatalog } from '../../data/project-catalog'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'
import { ProjectCard } from './ProjectCard'

export function SelectProjectDisplay (props: {tile: Tile, tileIndex: number, dispatch: dispatcher}) {
  const tileDefinition = tileCatalog[props.tile.type]
  const projects = tileDefinition.projects.map((id) => projectCatalog[id])
  console.log('projects', projects, props.tile)
  const projectList = projects.map((project, index) => {
    const onClick = () => {
      props.dispatch({ type: 'selectProject', projectIndex: index, tileIndex: props.tileIndex })
    }

    return (
      <ListItem className='project-list-item' key={project.id}>
        <ProjectCard
          project={project}
          content={
            <Typography variant='body2'>{project.description}</Typography>
        }
          action={
            <Button onClick={onClick}>Start</Button>
        }
        />
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
