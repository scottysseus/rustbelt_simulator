import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

export function doThreeJs () {
  // Select the canvas from the document
  const canvReference = document.getElementById('threejscanvas')

  if (!canvReference) {
    throw new Error('no canvas!')
  }

  const loader = new GLTFLoader()

  const aspectRatio = canvReference.clientWidth / canvReference.clientHeight

  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
  camera.position.z = 5
  camera.position.x = -2
  camera.position.y = 1

  const scene = new THREE.Scene()
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0xfffffff })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Then pass it to the renderer constructor
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvReference
  })

  const controls = new MapControls(camera, renderer.domElement)
  controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05

  controls.screenSpacePanning = false

  controls.minDistance = 1
  controls.maxDistance = 5

  controls.maxPolarAngle = Math.PI / 2

  scene.background = new THREE.Color().setHSL(0.6, 0, 1)
  // scene.fog = new THREE.Fog(scene.background, 1, 100)

  const light = new THREE.PointLight(0xffffff, 1)
  scene.add(light)

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  hemiLight.color.setHSL(1, 1, 1)
  hemiLight.groundColor.setHSL(0.095, 1, 0.75)
  hemiLight.position.set(0, 50, 0)
  scene.add(hemiLight)

  const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
  scene.add(hemiLightHelper)

  // GROUND

  const groundGeo = new THREE.PlaneGeometry(10000, 10000)
  const groundMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
  groundMat.color.setHSL(0.095, 1, 0.75)

  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.position.y = -33
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  loader.load('models/diner.glb', function (gltf) {
    scene.add(gltf.scene)
    const light2 = new THREE.PointLight(0xfffff, 4)
    light2.position.x = gltf.scene.position.x - 3
    light2.position.y = gltf.scene.position.y + 2
    scene.add(light2)
  }, undefined, function (error) {
    console.error(error)
  })

  renderer.setPixelRatio(aspectRatio)
  renderer.setSize(canvReference.clientWidth, canvReference.clientHeight)

  const animate = () => {
    window.requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
