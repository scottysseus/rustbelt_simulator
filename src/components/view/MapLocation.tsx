
import { useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Tile } from '../../game_logic/interfaces'

/**
 * This component is meant represent one map location whose actual mesh child will change based on game state
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number, tile: Tile, selected: boolean, onSelected: () => void}) {
  const ref = useRef<THREE.Group>(null)

  const x = props.gridInterval * props.column
  const z = props.gridInterval * (props.row + 1)

  const gltf = useLoader(GLTFLoader, props.tile.definition.modelPath)

  const onPointerOver = (event: THREE.Event) => {
    console.log(event)
    if (ref.current != null) {
      setColorRecursive(ref.current, new THREE.Color(0x663399))
    }
  }
  const onPointerOut = (event: THREE.Event) => {
    if (ref.current != null) {
      setColorRecursive(ref.current, null)
    }
  }

  const onClick = (event: THREE.Event) => {
    console.log('Clicked on Map Location', props.tile.definition.name, props.row, props.column)
    props.onSelected()
  }

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[x, 0, z]}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    />
  )
}

function setColorRecursive (object3d: THREE.Object3D, color: THREE.Color | null) {
  if (object3d instanceof THREE.Mesh) {
    const mesh = object3d as THREE.Mesh
    if (!(mesh.material instanceof THREE.MeshStandardMaterial)) {
      console.warn('Found wrong material type:', mesh.material.constructor.name)
      return
    }
    const material = mesh.material
    if (!material.userData.originalColor) {
      material.userData.originalColor = material.color
    }
    if (!color) {
      material.color = material.userData.originalColor
    } else {
      material.color = color
    }
  }
  for (const child of object3d.children) {
    setColorRecursive(child, color)
  }
}
