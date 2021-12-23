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

export function Skybox () {
  return (
    <mesh>
      <sphereGeometry args={[800]} />
      <shaderMaterial
        args={[{
          uniforms: {
            colorHi: {
              value: new THREE.Color('#10c4fb')
            },
            colorLo: {
              value: new THREE.Color('#d4e7f4')
            }
          },
          vertexShader,
          fragmentShader
        }]}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
