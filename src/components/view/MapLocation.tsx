import { ThreeEvent } from '@react-three/fiber'
import { ReactNode, useState } from 'react'
import { tileCatalog } from '../../data/tile-catalog'
import { Tile } from '../../game_logic'
import { SelectAura } from './SelectAura'

const LEFT_MOUSE_BUTTON = 0
/**
 * Represents an occupied tile on the map.
 * @param props
 * @returns
 */
export function MapLocation (props: {row: number, column: number, gridInterval: number, tile: Tile, selected: boolean, onSelected: () => void}) {
  const x = props.gridInterval * props.column
  const z = props.gridInterval * props.row

  const tileDefinition = tileCatalog[props.tile.type]

  const ModelComponent = tileDefinition.modelComponent

  const [hover, setHover] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const onPointerOver = () => setHover(true)
  const onPointerOut = () => setHover(false)
  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    if (!(event.nativeEvent.button === LEFT_MOUSE_BUTTON)) {
      return
    }
    setMouseX(event.nativeEvent.clientX)
    setMouseY(event.nativeEvent.clientY)
  }
  const onPointerUp = (event: ThreeEvent<PointerEvent>) => {
    if (!(event.nativeEvent.button === LEFT_MOUSE_BUTTON)) {
      return
    }
    // Have a little fudge factor for mouse movement
    if (Math.abs(event.nativeEvent.clientX - mouseX + event.nativeEvent.clientY - mouseY) < 50) {
      props.onSelected()
    }
  }

  return (
    <group
      position={[x, 0, z]}
      name='mapLocation'
    >
      <RotateY angle={props.tile.rotation}>
        <ModelComponent
          position={[0, 0, 1]}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        />
      </RotateY>
      <SelectAura hover={hover} selected={props.selected} />
    </group>
  )
}

// rotate the child, whose size is 1-by-1, about its center, around the Y axis, by `angle` radians.
function RotateY (props: { children: ReactNode, angle: number }) {
  return (
    <group
      // from the top-left to the center
      position={[0.5, 0, 0.5]}
      rotation={[0, props.angle, 0]}
    >
      <group
        // from the center to the top-left
        position={[-0.5, 0, -0.5]}
      >
        {props.children}
      </group>
    </group>
  )
}
