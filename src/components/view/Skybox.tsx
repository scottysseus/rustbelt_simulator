import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform vec3 colorLo;
  uniform vec3 colorHi;

  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(mix(colorLo, colorHi, (vUv.y*2.0)-1.0), 1.0);
  }
`

const COLOR_HI = new THREE.Color('#10c4fb')
const COLOR_LO = new THREE.Color('#d4e7f4')

export function Skybox () {
  return (
    <mesh>
      <sphereGeometry args={[800]} />
      <shaderMaterial
        uniforms={{
          colorHi: {
            value: COLOR_HI
          },
          colorLo: {
            value: COLOR_LO
          }
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
