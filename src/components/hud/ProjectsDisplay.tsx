import { isTileUnderConstruction, Tile } from '../../game_logic'
import { dispatcher } from '../reducers'
import { ActiveProjectDisplay } from './ActiveProjectDisplay'
import { SelectProjectDisplay } from './SelectProjectDisplay'

export function ProjectsDisplay (props: {tile: Tile, dispatch: dispatcher }) {
  if (isTileUnderConstruction(props.tile)) {
    // Show worker assignment display
    return (<ActiveProjectDisplay activeProject={props.tile.activeProject} />)
  } else {
    return (<SelectProjectDisplay tile={props.tile} dispatch={props.dispatch} />)
  }
}
