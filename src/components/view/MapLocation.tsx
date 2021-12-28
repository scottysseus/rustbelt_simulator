
import { useLoader } from '@react-three/fiber'
import { useCallback, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { GroupPrimitive } from './GroupPrimitive'
import { SelectAura } from './SelectAura'

/**
 * Represents an occupied tile on the map.
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number, tile: Tile, selected: boolean, onSelected: () => void}) {
  const x = props.gridInterval * props.column
  const z = props.gridInterval * props.row

  const tileDefinition = tileCatalog[props.tile.type]

  if (!tileDefinition || !tileDefinition.modelPath) {
    console.log(props.tile.type)
  }
  const gltf = useLoader(GLTFLoader, tileDefinition.modelPath)

  const scene = useMemo(
    () => sceneClone(gltf.scene, tileDefinition.name),
    [gltf.scene, tileDefinition.name]
  )

  useEffect(() => {
    if (props.tile.rotation !== 0) {
      rotateAboutPoint(scene, new THREE.Vector3(0.5, 1, 0.5), new THREE.Vector3(0, 1, 0), props.tile.rotation, false)
    }
  }, [scene, props.tile.rotation, x, z])

  const [hover, setHover] = useState(false)
  const onPointerOver = useCallback(() => setHover(true), [])
  const onPointerOut = useCallback(() => setHover(false), [])

  const onClick = useCallback((event: THREE.Event) => {
    console.log('Clicked on Map Location', tileDefinition.name, props.row, props.column)
    props.onSelected()
  }, [props, tileDefinition.name])

  return (
    <group
      position={[x, 0, z]}
    >
      <GroupPrimitive
        position={[0, 0, 1]}
        object={scene}
        onClick={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      />
      <SelectAura hover={hover} selected={props.selected} />
    </group>
  )
}

function forEachMesh (object3d: THREE.Object3D, cb: (mesh: THREE.Mesh) => void) {
  if (object3d instanceof THREE.Mesh) {
    cb(object3d)
  }
  for (const child of object3d.children) {
    forEachMesh(child, cb)
  }
}

function sceneClone (originalScene: THREE.Group, newName: string) {
  const newScene = originalScene.clone(true)
  newScene.name = newName
  forEachMesh(newScene, (mesh) => {
    mesh.castShadow = true
    mesh.receiveShadow = true
  })
  return newScene
}

// obj - your object (THREE.Object3D or derived)
// point - the point of rotation (THREE.Vector3)
// axis - the axis of rotation (normalized THREE.Vector3)
// theta - radian value of rotation
// pointIsWorld - boolean indicating the point is in world coordinates (default = false)
function rotateAboutPoint (obj: THREE.Object3D, point: THREE.Vector3, axis: THREE.Vector3, theta:number, pointIsWorld: boolean) {
  pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld

  if (pointIsWorld) {
    obj.parent?.localToWorld(obj.position) // compensate for world coordinate
  }

  obj.position.sub(point) // remove the offset
  obj.position.applyAxisAngle(axis, theta) // rotate the POSITION
  obj.position.add(point) // re-add the offset

  if (pointIsWorld) {
    obj.parent?.worldToLocal(obj.position) // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta) // rotate the OBJECT
}
