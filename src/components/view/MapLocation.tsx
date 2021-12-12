
import { useLoader } from '@react-three/fiber'
import { useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Tile } from '../game_logic'

/**
 * This component is meant represent one map location whose actual mesh child will change based on game state
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number, tile: Tile, selected: boolean, onSelected: () => void}) {
  // This reference gives us direct access to the THREE.Mesh object
  // Hold state for hovered and clicked events
  const [hovered, setHover] = useState(false)
  // Return the view, these are regular Threejs elements expressed in JSX

  const x = props.gridInterval * props.column
  const z = props.gridInterval * (props.row + 1)
  const y = 0

  const gltf = useLoader(GLTFLoader, props.tile.definition.modelPath)

  const onPointerOver = (event: THREE.Event) => {
    event.stopPropagation()
    setHover(true)
  }
  const onPointerOut = (event: THREE.Event) => {
    event.stopPropagation()
    setHover(false)
  }

  const onClick = (event) => {
    console.log('Clicked on Map Location', props.tile.definition.name, props.row, props.column)
    props.onSelected()
  }

  return (
    <primitive object={gltf.scene} position={[x, y, z]} onClick={onClick} />
  )
}
