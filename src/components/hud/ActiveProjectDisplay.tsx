import { Button, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import { projectCatalog } from '../../data/project-catalog'
import { ActiveProject, ProjectDefinition, WorkerState } from '../../game_logic'
import { dispatcher } from '../reducers'
import { ProjectCard } from './ProjectCard'

function activeProjectContent (props: {
  activeProject: ActiveProject,
  projectDefinition: ProjectDefinition,
  onWorkersChange: (event: any) => void,
  workers: WorkerState
}) {
  const min = 0
  const remainingEffort = props.projectDefinition.effort - props.activeProject.progress
  const max = Math.min(props.activeProject.assignedWorkers + props.workers.free, remainingEffort)
  const value = props.activeProject.assignedWorkers
  const progress = props.activeProject.progress / props.projectDefinition.effort * 100
  const bufferProgress = progress + value / props.projectDefinition.effort * 100
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}><LinearProgress variant='buffer' value={progress} valueBuffer={bufferProgress} /></Grid>
      <Grid item xs={8}><Typography>{props.projectDefinition.description}</Typography></Grid>
      <Grid item xs={4}>
        👤<Input
          value={value}
          size='small'
          onChange={props.onWorkersChange}
          inputProps={{
            step: 1,
            min,
            max,
            type: 'number'
          }}
          />
      </Grid>
    </Grid>
  )
}

export function ActiveProjectDisplay (props: {activeProject: ActiveProject, tileIndex: number, workers: WorkerState, dispatch: dispatcher}) {
  const projectDefinition = projectCatalog[props.activeProject.type]
  const onWorkersChange = (event: any) => {
    const workerCount = parseInt(event.target.value)
    if (!isNaN(workerCount)) {
      props.dispatch({ type: 'assignWorkers', tileIndex: props.tileIndex, workerCount })
    }
  }

  const onCancelProject = () => {
    props.dispatch({ type: 'cancelProject', tileIndex: props.tileIndex })
  }

  return (
    <ProjectCard
      project={projectDefinition} action={
        <Button onClick={onCancelProject}>Cancel</Button>
    }
      content={
        activeProjectContent({ activeProject: props.activeProject, projectDefinition: projectDefinition, onWorkersChange: onWorkersChange, workers: props.workers })
    }
    />
  )
}
