import { MapLocation } from './MapLocation'

/**
 * This component is meant to group all map tiles
 * @param props
 * @returns
 */
export function Map (props: {numRows: number, numColumns: number, gridInterval: number}) {
  const mapLocations = []
  for (let i = 0; i < props.numRows; i++) {
    for (let j = 0; j < props.numColumns; j++) {
      mapLocations.push(
        <MapLocation key={`${i}${j}`} row={i} column={j} gridInterval={props.gridInterval} />
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
