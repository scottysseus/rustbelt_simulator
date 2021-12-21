import { Typography } from '@mui/material'
import { projectCatalog } from '../../data/project-catalog'
import { ActiveProject } from '../../game_logic'

export function ActiveProjectDisplay (props: {activeProject: ActiveProject}) {
  const projectDefinition = projectCatalog[props.activeProject.type]
  return (
    <>
      <Typography variant='h6'>Projects</Typography>
      {projectDefinition.name}
    </>
  )
}
