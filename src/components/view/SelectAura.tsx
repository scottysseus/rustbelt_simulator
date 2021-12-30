import * as THREE from 'three'

const AURA_ALPHA_START = 0.7
const AURA_ALPHA_BOTTOM = 0.7
const AURA_HEIGHT = 2

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
    vec4(color, ${AURA_ALPHA_START}),
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
      <mesh
        rotation={new THREE.Euler(-Math.PI / 2)}
        position={[0, 0.002, 0]}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          args={[{
            color: colorBottom,
            opacity: AURA_ALPHA_BOTTOM,
            depthWrite: false,
            transparent: true
          }]}
        />
      </mesh>
    </group>
  )
}

type AuraSideProps = {
  color: THREE.Color,
  rotation: number
}

function AuraSide (props: AuraSideProps) {
  return (
    <group
      rotation={new THREE.Euler(0, Math.PI / 2 * props.rotation)}
    >
      <mesh
        position={[0, AURA_HEIGHT / 2, 0.5]}
      >
        <planeGeometry args={[1, AURA_HEIGHT]} />
        <shaderMaterial
          args={[{
            uniforms: {
              color: {
                value: props.color
              }
            },
            vertexShader,
            fragmentShader,
            transparent: true,
            depthWrite: false
          }]}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  )
}
