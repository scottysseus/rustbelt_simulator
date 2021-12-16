import { Suspense } from 'react'
import { MapState } from '../../game_logic'
import { uiDispatcher, UiState } from '../GameDisplay'
import { MapLocation } from './MapLocation'
import { Html, useProgress } from '@react-three/drei'

function ijToIndex (i: number, j: number, rowSize: number) {
  return i * rowSize + j
}

function Loader () {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
/**
 * This component is meant to group all map tiles
 * @param props
 * @returns
 */
export function Map (props: {mapState: MapState, gridInterval: number, uiState: UiState, dispatchUi: uiDispatcher}) {
  const mapLocations = []

  for (let i = 0; i < props.mapState.size.x; i++) {
    for (let j = 0; j < props.mapState.size.y; j++) {
      const index = ijToIndex(i, j, props.mapState.size.x)
      mapLocations.push(
        <Suspense fallback={<Loader />}>
          <MapLocation
            key={`${i}${j}`}
            row={i}
            column={j}
            tile={props.mapState.tiles[index]}
            gridInterval={props.gridInterval}
            selected={props.uiState.selectedTile === index}
            onSelected={() => {
              props.dispatchUi({ type: 'selectTile', tileIndex: index })
            }}
          />
        </Suspense>
      )
    }
  }

  return (
    <group position={[0, 0, 0]}>
      <gridHelper args={[100, 100, 'white', 'gray']} />
      {mapLocations}
    </group>
  )
}
