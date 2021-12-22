
import { useLoader } from '@react-three/fiber'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'

const COLOR_HOVERED = new THREE.Color(0x663399)
const COLOR_SELECTED = new THREE.Color(0x660000)

/**
 * Represents an occupied tile on the map.
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number, tile: Tile, selected: boolean, onSelected: () => void}) {
  const x = props.gridInterval * props.column
  const z = props.gridInterval * (props.row + 1)

  const tileDefinition = tileCatalog[props.tile.type]
  const gltf = useLoader(GLTFLoader, tileDefinition.modelPath)

  const ref = useRef<THREE.Group>(null)
  const [color, setColor] = useState<THREE.Color | null>(null)

  useEffect(() => {
    if (props.selected) {
      setColor(COLOR_SELECTED)
    } else {
      setColor(null)
    }
  }, [props.selected])

  useEffect(() => {
    if (ref.current) {
      setColorRecursive(ref.current, color)
    }
  }, [ref, color])

  const onClick = useCallback((event: THREE.Event) => {
    console.log('Clicked on Map Location', tileDefinition.name, props.row, props.column)
    props.onSelected()
  }, [props, tileDefinition.name])

  return (
    <primitive
      ref={ref}
      object={gltf.scene.clone(true)}
      position={[x, 0, z]}
      onClick={onClick}
      onPointerOver={() => {
        if (!props.selected) { setColor(COLOR_HOVERED) }
      }}
      onPointerOut={() => {
        if (!props.selected) { setColor(null) }
      }}
    />
  )
}

/**
 * Changes the color of a primitive. A color of null resets to the original color.
 *
 * Technical answer: Updates the color of the material of all Mesh descendants belonging to an Object3D node.
 * Object3D is the base class for both Group (the actual type of our primitive) and Mesh.
 * @param object3d
 * @param color
 * @returns
 */
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
