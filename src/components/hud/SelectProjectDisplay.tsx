import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { catalog as projectCatalog } from '../../data/project-catalog'
import { catalog as tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { dispatcher } from '../reducers'

export function SelectProjectDisplay (props: {tile: Tile, dispatch: dispatcher}) {
  const tileDefinition = tileCatalog[props.tile.definition]
  const projects = tileDefinition.projects.map((id) => projectCatalog[id])
  console.log('projects', projects, props.tile)
  const projectList = projects.map((project, index) => {
    const onClick = () => {
      // TODO: Get the tile index here to pass up with the dispatch or otherwise figure out how to fix the fact
      // that I don't know what the tile index is
      props.dispatch({ type: 'selectProject', projectIndex: index })
    }
    const targetTileDefinition = tileCatalog[project.targetTileDefinition]
    return (
      <TableRow key={project.name}>
        <TableCell><Typography>{project.name}</Typography></TableCell>
        <TableCell><Typography>{project.cost}</Typography></TableCell>
        <TableCell><Typography>{project.effort}</Typography></TableCell>
        <TableCell><Typography>{targetTileDefinition.name}</Typography></TableCell>
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
