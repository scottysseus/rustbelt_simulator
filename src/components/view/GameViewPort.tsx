import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { MapControls, Stats } from '@react-three/drei'
import { Map } from './Map'
import { GameState } from '../../game_logic'
import { uiDispatcher, UiState } from '../GameDisplay'
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

export function GameView (props: {gameState: GameState, uiState: UiState, dispatchUi: uiDispatcher}) {
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
      <Map gridInterval={1} mapState={props.gameState.map} uiState={props.uiState} dispatchUi={props.dispatchUi} />
      <Stats className='stats' showPanel={1} />
      <axesHelper args={[10]} />
    </>
  )
}

export function GameViewPort (props) {
  return (
    <Canvas>
      <GameView {...props} />
    </Canvas>
  )
}
