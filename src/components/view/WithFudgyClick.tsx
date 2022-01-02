import { GroupProps } from '@react-three/fiber'
import { useState } from 'react'

const LEFT_MOUSE_BUTTON = 0

/**
 * HOC that adds "fudgy" click events that can be handled via an `onFudgyClick` prop.
 * If this HOC is called in a functional component, consider memoization.
 */
export default function withFudgyClick (Component: (props: GroupProps) => JSX.Element) {
  return ({ onFudgyClick, ...props }: { onFudgyClick: () => void } & Omit<GroupProps, 'onPointerDown' | 'onPointerUp'>) => {
    const [mousePos, setMousePos] = useState([0, 0])

    return (
      <Component
        onPointerDown={(event) => {
          if (event.nativeEvent.button !== LEFT_MOUSE_BUTTON) { return }
          setMousePos([event.nativeEvent.clientX, event.nativeEvent.clientY])
        }}
        onPointerUp={(event) => {
          if (event.nativeEvent.button !== LEFT_MOUSE_BUTTON) { return }
          const distance = Math.hypot(event.nativeEvent.clientX - mousePos[0], event.nativeEvent.clientY - mousePos[1])
          if (distance < 10) {
            onFudgyClick()
          }
        }}
        {...props}
      />
    )
  }
}
