import { Typography } from '@mui/material'
import { ActiveProject } from '../../game_logic'

export function ActiveProjectDisplay (props: {activeProject: ActiveProject}) {
  return (
    <>
      <Typography variant='h6'>Projects</Typography>
      {props.activeProject.project.name}
    </>
  )
}
