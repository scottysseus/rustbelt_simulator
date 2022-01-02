import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { CSM } from 'three/examples/jsm/csm/CSM'
import { useDetectGPU } from '@react-three/drei'

const LIGHT_DIRECTION = new THREE.Vector3(3, -7, -2).normalize()

export default function useCsm () {
  const csmRef = useRef<CSM>()
  const fallbackLightRef = useRef<THREE.DirectionalLight>()
  const scene = useThree(state => state.scene)
  const camera = useThree(state => state.camera)
  const { tier } = useDetectGPU()

  const mode = tier === 3 ? 'csm' : 'fallback'

  useEffect(() => {
    if (mode === 'csm') {
      csmRef.current = new CSM({
        maxFar: 15,
        cascades: 4,
        // @ts-ignore enums are bad
        mode: 'practical',
        parent: scene,
        shadowMapSize: 4096,
        camera: camera,
        lightDirection: LIGHT_DIRECTION,
        lightIntensity: 1.0,
        lightNear: 1,
        lightFar: 40,
        lightMargin: 6,
        shadowBias: -0.0005
      })
      csmRef.current.fade = true
    } else if (mode === 'fallback') {
      fallbackLightRef.current = new THREE.DirectionalLight(0xffffff, 1.0)
      fallbackLightRef.current.position.copy(LIGHT_DIRECTION.clone().negate())
      scene.add(fallbackLightRef.current)
    }

    // cleanups allow switching between modes
    return () => {
      if (csmRef.current) {
        csmRef.current.remove()
        csmRef.current.dispose()
        csmRef.current = undefined
      }
      if (fallbackLightRef.current) {
        fallbackLightRef.current.removeFromParent()
        fallbackLightRef.current.dispose()
        fallbackLightRef.current = undefined
      }
    }
  }, [camera, mode, scene])

  // when in CSM mode, setup materials on every render,
  // since we have to traverse the scene to find new materials anyway
  useEffect(() => {
    if (!csmRef.current) { return }
    setupMaterials(scene, csmRef.current)
  })

  useFrame(() => {
    if (csmRef.current) {
      csmRef.current.update()
    }
  })
}

function setupMaterials (scene: THREE.Scene, csm: CSM) {
  scene.traverse((obj) => {
    if (obj.name === 'mapLocation') {
      obj.traverse((innerObj) => {
        if (innerObj instanceof THREE.Mesh) {
          csm.setupMaterial(innerObj.material)
        }
      })
    }

    if (obj.name === 'plainPlane') {
      const material = (obj as THREE.Mesh).material as THREE.Material
      csm.setupMaterial(material)
    }
  })
}
