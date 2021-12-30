
import { useCallback, useState } from 'react'
import * as THREE from 'three'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
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

  // TODO: ensure with exhaustive key type
  // if (!tileDefinition || !tileDefinition.modelPath) {
  //   console.log(props.tile.type)
  // }

  // TODO: rotate with groups
  // useEffect(() => {
  //   if (props.tile.rotation !== 0) {
  //     rotateAboutPoint(scene, new THREE.Vector3(0.5, 1, 0.5), new THREE.Vector3(0, 1, 0), props.tile.rotation, false)
  //   }
  // }, [scene, props.tile.rotation, x, z])

  // TODO shop-market is all ... askew

  const ModelComponent = tileDefinition.modelComponent

  const [hover, setHover] = useState(false)
  const onPointerOver = useCallback(() => setHover(true), [])
  const onPointerOut = useCallback(() => setHover(false), [])

  const onClick = useCallback((event: THREE.Event) => {
    console.log('Clicked on Map Location', tileDefinition.name, props.column, props.row)
    props.onSelected()
  }, [props, tileDefinition.name])

  return (
    <group
      position={[x, 0, z]}
    >
      <ModelComponent
        position={[0, 0, 1]}
        onClick={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      />
      <SelectAura hover={hover} selected={props.selected} />
    </group>
  )
}
