import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { MapControls, Stats } from '@react-three/drei'
import { Map } from './Map'
import { dispatcher, State } from '../reducers'
import { Skybox } from './Skybox'

function PlainPlane () {
  return (
    <mesh
      position={[0, -0.002, 0]}
      rotation={new THREE.Euler(-Math.PI / 2)}
      receiveShadow
    >
      <planeGeometry args={[1000, 1000, 20, 20]} />
      <meshStandardMaterial color='#747A36' />
    </mesh>
  )
}

type GameViewProps = {
  state: State
  dispatch: dispatcher
}

function GameView (props: GameViewProps) {
  //    -    +
  // X  Left Right
  // Y  Down Up
  // Z  Far  Near

  return (
    <>
      <MapControls maxPolarAngle={1 / 2 * Math.PI - Math.PI / 16} target={[10, 0, 10]} />
      <PlainPlane />
      <Skybox />
      <ambientLight intensity={0.3} />
      <directionalLight
        args={['white', 0.6]}
        position={[-3, 7, 2]}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-bias={-0.0003}
      />
      <Map gridInterval={1} mapState={props.state.game.map} uiState={props.state.ui} dispatch={props.dispatch} />
      <Stats className='stats' showPanel={1} />
      {/* <gridHelper position={[0, 0.002, 0]} args={[100, 100, 'white', 'gray']} />
      <axesHelper position={[0, 0.004, 0]} args={[10]} /> */}
    </>
  )
}

export function GameViewPort (props: GameViewProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 10, 30], fov: 45 }}
      raycaster={{
        filter: (items, state) => {
          if (items.length > 0) { return [items[0]] }
          return []
        }
      }}
    >
      <GameView {...props} />
    </Canvas>
  )
}
