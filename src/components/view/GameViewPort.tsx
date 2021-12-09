import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box (props: JSX.IntrinsicElements['mesh']) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, setHover] = useState(false)
  const [lower, setLower] = useState(0)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.001))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <group position={[0, -lower, 0]}>
      <mesh
        ref={ref}
        scale={1}
        onClick={(event) => setLower((prevLower) => prevLower + 0.5)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        {...props}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </group>
  )
}

function PlainPlane () {
  // const ref = useRef<THREE.Mesh>(null!)
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += 0.01
  // })
  return (
    <mesh
      // ref={ref}
      rotation={new THREE.Euler(-Math.PI / 2)}
    >
      <planeGeometry args={[1000, 1000, 20, 20]} />
      <meshBasicMaterial color='#747A36' />
    </mesh>
  )
}

export function GameViewPort () {
  //    -    +
  // X  Left Right
  // Y  Down Up
  // Z  Far  Near
  const camera = new THREE.OrthographicCamera(-10, 10, 10, -10)
  camera.translateX(-10)
  camera.translateY(10)
  camera.translateZ(10)
  camera.lookAt(0, 0, 0)
  return (
    <Canvas camera={camera}>
      <PlainPlane />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} position={[-3, 10, 5]} />
      <Box position={[-3, 0.5, 0]} />
      <Box position={[0, 0.5, 0]} />
      <Box position={[0, 0.5, 3]} scale={1.1} />
    </Canvas>
  )
}
