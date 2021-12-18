import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'

export function SelectProjectDisplay (props: {tile: Tile, dispatch: dispatcher}) {
  const projects = props.tile.definition.projects
  console.log('projects', projects, props.tile)
  const projectList = projects.map((project, index) => {
    const onClick = () => {
      // TODO: Get the tile index here to pass up with the dispatch or otherwise figure out how to fix the fact
      // that I don't know what the tile index is
      props.dispatch({ type: 'selectProject', projectIndex: index })
    }
    return (
      <TableRow key={project.name}>
        <TableCell><Typography>{project.name}</Typography></TableCell>
        <TableCell><Typography>{project.cost}</Typography></TableCell>
        <TableCell><Typography>{project.effort}</Typography></TableCell>
        <TableCell><Typography>{project.targetTileDefinition.name}</Typography></TableCell>
        <TableCell><Button onClick={onClick}>Start</Button></TableCell>
      </TableRow>
    )
  })

  return (
    <>
      <Typography variant='h6'>Projects</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {['Name', 'Cost', 'Effort', 'Goal', ''].map((s) => (<TableCell key={s}>{s}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {projectList}
        </TableBody>
      </Table>
    </>
  )
}
