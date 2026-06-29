import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AuraSphere = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();

  const targetPos = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Passive rotation
      meshRef.current.rotation.x = Math.sin(time / 4) * 0.2;
      meshRef.current.rotation.y = Math.cos(time / 2) * 0.2;

      // Mouse influence
      const x = (mouse.x * viewport.width) / 4;
      const y = (mouse.y * viewport.height) / 4;
      targetPos.current.set(x, y, 0);
      meshRef.current.position.lerp(targetPos.current, 0.05);

      // Dynamic distortion based on hover or movement
      meshRef.current.distort = THREE.MathUtils.lerp(
        meshRef.current.distort || 0.4,
        hovered ? 0.8 : 0.4,
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[1, 100, 100]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#8B5CF6"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#22D3EE"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const NeuralNodes = () => {
  const { mouse, viewport } = useThree();
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 150; i++) {
      const x = THREE.MathUtils.randFloatSpread(20);
      const y = THREE.MathUtils.randFloatSpread(20);
      const z = THREE.MathUtils.randFloatSpread(10);
      temp.push({
        position: new THREE.Vector3(x, y, z),
        initialPos: new THREE.Vector3(x, y, z),
        speed: THREE.MathUtils.randFloat(0.01, 0.05)
      });
    }
    return temp;
  }, []);

  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    nodes.forEach((node, i) => {
      const mesh = groupRef.current.children[i];
      if (mesh) {
        // Floating movement
        mesh.position.y = node.initialPos.y + Math.sin(time * node.speed + i) * 0.2;
        mesh.position.x = node.initialPos.x + Math.cos(time * node.speed + i) * 0.2;

        // Subtle reaction to mouse
        const dx = (mouse.x * viewport.width) / 2 - mesh.position.x;
        const dy = (mouse.y * viewport.height) / 2 - mesh.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 3) {
            mesh.position.x += dx * 0.01;
            mesh.position.y += dy * 0.01;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const NeuralAura = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas eventSource={typeof document !== 'undefined' ? document.getElementById('root') : undefined} eventPrefix="client">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <NeuralNodes />
        <AuraSphere />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      </Canvas>
    </div>
  );
};

export default NeuralAura;
