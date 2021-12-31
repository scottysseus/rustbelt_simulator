
import { ReactNode, useCallback, useState } from 'react'
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
  const onPointerOver = useCallback(() => setHover(true), [])
  const onPointerOut = useCallback(() => setHover(false), [])
  const onPointerDown = useCallback((event) => {
    if (!(event.button === LEFT_MOUSE_BUTTON)) {
      return
    }
    setMouseX(event.clientX)
    setMouseY(event.clientY)
  }, [])
  const onPointerUp = useCallback((event) => {
    if (!(event.button === LEFT_MOUSE_BUTTON)) {
      return
    }
    console.log('Mouse Button', event.button)
    // Have a little fudge factor for mouse movement
    if (Math.abs(event.clientX - mouseX + event.clientY - mouseY) < 50) {
      props.onSelected()
    }
  }, [props, mouseX, mouseY])

  return (
    <group
      position={[x, 0, z]}
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
