import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { MapControls, Stats } from '@react-three/drei'
import { Map } from './Map'
import { dispatcher, State } from '../reducers'
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
      <MapControls target={[10, 0, 10]} />
      <PlainPlane />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} position={[-3, 10, 5]} />
      <Map gridInterval={1} mapState={props.state.game.map} uiState={props.state.ui} dispatch={props.dispatch} />
      <Stats className='stats' showPanel={1} />
      <axesHelper args={[10]} />
    </>
  )
}

export function GameViewPort (props: GameViewProps) {
  return (
    <Canvas
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
