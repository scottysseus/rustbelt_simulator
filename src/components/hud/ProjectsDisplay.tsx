import { Tile } from '../../game_logic'
import { GameDispatch } from '../GameDisplay'
import { ActiveProjectDisplay } from './ActiveProjectDisplay'
import { SelectProjectDisplay } from './SelectProjectDisplay'

export function ProjectsDisplay (props: {tile?: Tile, dispatch: GameDispatch }) {
  if (!props.tile) {
    return (<></>)
  }

  if (props.tile.activeProject) {
    // Show worker assignment display
    return (<ActiveProjectDisplay activeProject={props.tile.activeProject} />)
  } else {
    return (<SelectProjectDisplay tile={props.tile} dispatch={props.dispatch} />)
  }
}
