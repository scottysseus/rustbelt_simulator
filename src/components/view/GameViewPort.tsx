import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { MapControls, Stats } from '@react-three/drei'
import { Map } from './Map'

function PlainPlane () {
  return (
    <mesh
      position={[0, -0.01, 0]}
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

  return (
    <>
      <MapControls target={[10, 0, 10]} />
      <PlainPlane />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} position={[-3, 10, 5]} />
      <Map numColumns={10} numRows={10} gridInterval={1} />
      <Stats className='stats' showPanel={1} />
    </>
  )
}

export function GameViewPort () {
  return (
    <Canvas camera={{ position: [10, 10, 30], fov: 45 }}>
      <GameView />
    </Canvas>
  )
}
