import { MapState } from '../../game_logic'
import { dispatcher, UIState } from '../reducers'
import { MapLocation } from './MapLocation'

function ijToIndex (i: number, j: number, rowSize: number) {
  return i * rowSize + j
}

/**
 * This component is meant to group all map tiles
 * @param props
 * @returns
 */
export function Map (props: {mapState: MapState, gridInterval: number, uiState: UIState, dispatch: dispatcher}) {
  const mapLocations = []

  for (let i = 0; i < props.mapState.size.x; i++) {
    for (let j = 0; j < props.mapState.size.y; j++) {
      const index = ijToIndex(i, j, props.mapState.size.y)
      if (index > props.mapState.tiles.length) {
        throw new Error('Invalid Index')
      }
      mapLocations.push(
        <MapLocation
          key={`${i},${j}`}
          row={i}
          column={j}
          tile={props.mapState.tiles[index]}
          gridInterval={props.gridInterval}
          selected={props.uiState.selectedTile === index}
          onSelected={() => {
            props.dispatch({ type: 'selectTile', tileIndex: index })
          }}
        />
      )
    }
  }

  return (
    <group>
      {mapLocations}
    </group>
  )
}
