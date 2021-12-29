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
  /*
  const grid2 = (
    <Grid item xs>
      <Input
        value={value}
        size='small'
        onChange={onWorkersChange}
        inputProps={{
          step: 1,
          min,
          max,
          type: 'number',
          'aria-labelledby': 'input-slider'
        }}
      />
    </Grid>
  )

  const grid1 = (
    <Grid item xs>
      <Slider
        value={typeof value === 'number' ? value : 0}
        min={min}
        max={max}
        onChange={onWorkersChange}
        aria-labelledby='input-slider'
      />
    </Grid>
  )
*/
  return (
    <ProjectCard
      project={projectDefinition} action={
        <Button>Cancel</Button>
    }
      content={
        activeProjectContent({ activeProject: props.activeProject, projectDefinition: projectDefinition, onWorkersChange: onWorkersChange, workers: props.workers })
    }
    />
  )
/*
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Project: {projectDefinition.name}
          </Typography>
          <LinearProgress variant='buffer' value={progress} valueBuffer={bufferProgress} />
        </Grid>
        <Grid container item xs={6}>
          <Card>
            <CardContent>
              <Typography>
                {projectDefinition.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Grid item xs>
            <Typography gutterBottom>
              Workers
            </Typography>
          </Grid>
          {grid1}
          {grid2}
        </Grid>
      </Grid>
    </div>
  )
  */
}
