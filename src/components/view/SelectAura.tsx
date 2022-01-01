import * as THREE from 'three'

const AURA_SIDE_ALPHA_START = 0.7

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform vec3 color;

varying vec2 vUv;

void main() {
  gl_FragColor = mix(
    vec4(color, ${AURA_SIDE_ALPHA_START}),
    vec4(color, 0.0),
    vUv.y
  );
}
`

type SelectAuraProps = {
  /**
   * `hover` is ignored when `selected` is true.
   */
  hover: boolean,
  selected: boolean
}

export function SelectAura (props: SelectAuraProps) {
  const selected = props.selected
  const hover = props.selected ? false : props.hover
  const color = props.selected ? new THREE.Color('#FF6D6D') : new THREE.Color('#ffffff')
  const colorBottom = props.selected ? new THREE.Color('#FF0000') : new THREE.Color('#ffffff')

  return (
    <group
      visible={hover || selected}
      position={[0.5, 0, 0.5]}
      scale={[1.001, 1, 1.001]}
    >
      <AuraSide rotation={0} color={color} />
      <AuraSide rotation={1} color={color} />
      <AuraSide rotation={2} color={color} />
      <AuraSide rotation={3} color={color} />
      <AuraBottom color={colorBottom} />
    </group>
  )
}

type AuraSideProps = {
  color: THREE.Color
  rotation: number
}

const AURA_SIDE_HEIGHT = 2

function AuraSide (props: AuraSideProps) {
  return (
    <group
      rotation={new THREE.Euler(0, Math.PI / 2 * props.rotation)}
    >
      <mesh
        position={[0, AURA_SIDE_HEIGHT / 2, 0.5]}
      >
        <planeGeometry args={[1, AURA_SIDE_HEIGHT]} />
        <shaderMaterial
          uniforms={{
            color: {
              value: props.color
            }
          }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  )
}

type AuraBottomProps = {
  color: THREE.Color
}

const AURA_BOTTOM_ROTATION = new THREE.Euler(-Math.PI / 2)
const AURA_BOTTOM_ALPHA = 0.7

function AuraBottom (props: AuraBottomProps) {
  return (
    <mesh
      rotation={AURA_BOTTOM_ROTATION}
      position={[0, 0.002, 0]}
    >
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={props.color}
        opacity={AURA_BOTTOM_ALPHA}
        depthWrite={false}
        transparent
      />
    </mesh>
  )
}
