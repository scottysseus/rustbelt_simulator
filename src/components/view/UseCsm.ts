import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { CSM } from 'three/examples/jsm/csm/CSM'

export default function useCsm () {
  const csmRef = useRef<CSM>()
  const scene = useThree(state => state.scene)
  const camera = useThree(state => state.camera)

  useEffect(() => {
    // map is 15x15
    const lightDirection = new THREE.Vector3(3, -7, -2).normalize()
    csmRef.current = new CSM({
      maxFar: 15,
      cascades: 4,
      // @ts-ignore enums are bad
      mode: 'practical',
      parent: scene,
      shadowMapSize: 4096,
      camera: camera,
      lightDirection: lightDirection,
      lightIntensity: 0.4,
      lightNear: 0.1,
      lightFar: 40,
      lightMargin: 6,
      shadowBias: -0.0005
    })
    csmRef.current.fade = true

    return () => {
      if (csmRef.current) {
        csmRef.current.remove()
      }
    }
  }, [camera, scene])

  useFrame(() => {
    if (csmRef.current) {
      csmRef.current.update()
    }
  })
}
