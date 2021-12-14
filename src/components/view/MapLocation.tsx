import { useRef, useState } from 'react'

/**
 * This component is meant represent one map location whose actual mesh child will change based on game state
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number}) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, setHover] = useState(false)
  // Return the view, these are regular Threejs elements expressed in JSX

  const x = props.gridInterval / 2 + props.gridInterval * props.row
  const z = props.gridInterval / 2 + props.gridInterval * props.column
  const y = 0.75 / 2

  const onPointerOver = (event: THREE.Event) => {
    event.stopPropagation()
    setHover(true)
  }
  const onPointerOut = (event: THREE.Event) => {
    event.stopPropagation()
    setHover(false)
  }

  return (
    <group position={[x, y, z]}>
      <mesh
        ref={ref}
        scale={1}
        onClick={(event) => console.log('Clicked on Map Location', props.row, props.column)}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[0.75, 0.75, 0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </group>
  )
}
