import { Typography } from '@mui/material'
import { catalog as projectCatalog } from '../../data/project-catalog'
import { ActiveProject } from '../../game_logic'

export function ActiveProjectDisplay (props: {activeProject: ActiveProject}) {
  const project = projectCatalog[props.activeProject.project]
  return (
    <>
      <Typography variant='h6'>Projects</Typography>
      {project.name}
    </>
  )
}
