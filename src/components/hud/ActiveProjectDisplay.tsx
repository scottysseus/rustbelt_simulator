import { CardContent, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import { projectCatalog } from '../../data/project-catalog'
import { ActiveProject, WorkerState } from '../../game_logic'
import { dispatcher } from '../reducers'

export function ActiveProjectDisplay (props: {activeProject: ActiveProject, tileIndex: number, workers: WorkerState, dispatch: dispatcher}) {
  const projectDefinition = projectCatalog[props.activeProject.type]
  const onWorkersChange = (event) => {
    const workerCount = parseInt(event.target.value)
    if (!isNaN(workerCount)) {
      props.dispatch({ type: 'assignWorkers', tileIndex: props.tileIndex, workerCount })
    }
  }

  const min = 0
  const remainingEffort = projectDefinition.effort - props.activeProject.progress
  const max = Math.min(props.activeProject.assignedWorkers + props.workers.free, remainingEffort)
  const value = props.activeProject.assignedWorkers
  const progress = props.activeProject.progress / projectDefinition.effort * 100
  const bufferProgress = progress + value / projectDefinition.effort * 100

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
}
