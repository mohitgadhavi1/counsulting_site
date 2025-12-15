import { MathUtils, InstancedMesh, Object3D } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment } from '@react-three/drei'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'

const particles = Array.from({ length: 100 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10)
}))

export default function Particle() {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 50, position: [0, 0, 20] }}>
      <color attach="background" args={['#E5D9B6']} />
      <fog attach="fog" args={['#5F8D4E', 1, -1]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <Bubbles />
      <EffectComposer enableNormalPass={false}>
        <N8AO aoRadius={1} intensity={1} color="#5F8D4E" />
        <TiltShift2 blur={0.1} />
      </EffectComposer>
      <Environment preset="city" />
    </Canvas>
  )
}

function Bubbles() {
  const ref = useRef<InstancedMesh>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.pointer.x * Math.PI) / 6, 2.75, delta)
    }
  })
  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
      <sphereGeometry args={[0.5, 24, 24]} />
      <meshStandardMaterial roughness={1} color="#5F8D4E" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

interface BubbleProps {
  factor: number
  speed: number
  xFactor: number
  yFactor: number
  zFactor: number
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }: BubbleProps) {
  const ref = useRef<Object3D>(null)
  useFrame((state) => {
    if (ref.current) {
      const t = factor + state.clock.elapsedTime * (speed / 2)
      ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
      ref.current.position.set(
        Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4
      )
    }
  })
  return <Instance ref={ref} />
}
