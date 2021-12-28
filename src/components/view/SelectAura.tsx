import * as THREE from 'three'

const AURA_BOTTOM_ALPHA = 0.2
const AURA_BOTTOM_PLANE_ALPHA = 0.7
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
    vec4(color, ${AURA_BOTTOM_ALPHA}),
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
  const theColor = props.selected ? new THREE.Color('#c85136') : new THREE.Color('#7f7f7f')
  const theBottomColor = props.selected ? new THREE.Color('#ff0000') : new THREE.Color('#343434')

  return (
    <group
      visible={hover || selected}
      position={[0.5, 0, 0.5]}
      scale={[1.001, 1, 1.001]}
    >
      <AuraSide rotation={0} color={theColor} />
      <AuraSide rotation={1} color={theColor} />
      <AuraSide rotation={2} color={theColor} />
      <AuraSide rotation={3} color={theColor} />
      <mesh
        rotation={new THREE.Euler(-Math.PI / 2)}
        position={[0, 0.002, 0]}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          args={[{
            color: theBottomColor,
            opacity: AURA_BOTTOM_PLANE_ALPHA,
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
