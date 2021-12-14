import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { MapControls, Stats } from '@react-three/drei'
import { Map } from './Map'

function PlainPlane () {
  return (
    <mesh
      rotation={new THREE.Euler(-Math.PI / 2)}
    >
      <planeGeometry args={[1000, 1000, 20, 20]} />
      <meshBasicMaterial color='#747A36' />
    </mesh>
  )
}

function GameView () {
  //    -    +
  // X  Left Right
  // Y  Down Up
  // Z  Far  Near
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera
  camera.fov = 45
  camera.position.set(-10, 10, 10)
  camera.lookAt(0, 0, 0)
  camera.updateProjectionMatrix()
  return (
    <>
      <MapControls />
      <PlainPlane />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} position={[-3, 10, 5]} />
      <Map numColumns={10} numRows={10} gridInterval={1} />
      <Stats />
    </>
  )
}

export function GameViewPort () {
  return (
    <Canvas>
      <GameView />
    </Canvas>
  )
}
