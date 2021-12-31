import { isTileUnderConstruction, Tile, WorkerState } from '../../game_logic'
import { dispatcher } from '../reducers'
import { ActiveProjectDisplay } from './ActiveProjectDisplay'
import { SelectProjectDisplay } from './SelectProjectDisplay'

export function ProjectsDisplay (props: {tile: Tile, tileIndex: number, workers: WorkerState, dispatch: dispatcher, balance: number }) {
  if (isTileUnderConstruction(props.tile)) {
    // Show worker assignment display
    return (<ActiveProjectDisplay activeProject={props.tile.activeProject} tileIndex={props.tileIndex} workers={props.workers} dispatch={props.dispatch} />)
  } else {
    return (<SelectProjectDisplay balance={props.balance} tile={props.tile} tileIndex={props.tileIndex} dispatch={props.dispatch} />)
  }
}
