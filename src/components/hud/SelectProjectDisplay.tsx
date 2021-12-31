import { Button, List, ListItem, Tooltip, Typography } from '@mui/material'
import { projectCatalog } from '../../data/project-catalog'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'
import { ProjectCard } from './ProjectCard'

export function SelectProjectDisplay (props: {tile: Tile, tileIndex: number, dispatch: dispatcher, balance: number}) {
  const tileDefinition = tileCatalog[props.tile.type]
  const projects = tileDefinition.projects.map((id) => projectCatalog[id])
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
            <Tooltip title={project.cost > props.balance ? 'Not enough funds' : ''}>
              <span>
                <Button disabled={project.cost > props.balance} onClick={onClick}>Start</Button>
              </span>
            </Tooltip>
          }
        />
      </ListItem>
    )
  })

  return (
    <>
      <Typography><b>Projects</b></Typography>
      <List className='project-list'>{projectList}</List>
    </>
  )
}
