import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, OrbitControls } from '@react-three/drei';

const NeuralCore = () => {
  const mainRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mainRef.current) {
      mainRef.current.rotation.y = time * 0.2;
      mainRef.current.rotation.z = time * 0.1;
    }
  });

  const dots = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const t = Math.random() * Math.PI * 2;
      const u = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 0.5;
      temp.push([
        r * Math.sin(t) * Math.cos(u),
        r * Math.sin(t) * Math.sin(u),
        r * Math.cos(t)
      ]);
    }
    return temp;
  }, []);

  return (
    <group ref={mainRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#FF3300"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#FF3300"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.5} />
        </mesh>
      ))}

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF3300" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
    </group>
  );
};

const HeroCore = () => {
  return (
    <Canvas gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <NeuralCore />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        makeDefault
      />
    </Canvas>
  );
};

export default HeroCore;
