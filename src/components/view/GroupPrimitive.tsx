import { GroupProps } from '@react-three/fiber'
import { forwardRef } from 'react'

/**
 * Because the typechecking on <primitive> is non-existent. Yes, the capital letter is required.
 */
export const GroupPrimitive = forwardRef((props: GroupProps & { object: THREE.Group }, ref) => {
  return <primitive ref={ref} {...props} />
})
