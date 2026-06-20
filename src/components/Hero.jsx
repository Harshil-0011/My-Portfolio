import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

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

const Hero = () => {
  return (
    <section className="relative min-h-screen split-screen bg-obsidian overflow-hidden">
      <div className="scanning-line" />

      {/* Left Column: Identity */}
      <div className="flex flex-col justify-center p-8 md:p-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-technical text-safety-orange mb-6 block">
            APPLIED AI ENGINEER // SYSTEMS ARCHITECT
          </span>
          <h1 className="text-huge font-headline font-black text-pure-white uppercase">
            Harshil<br />
            Gorasiya
          </h1>
          <p className="mt-12 text-xl font-body text-pure-white/60 max-w-lg leading-relaxed">
            Architecting autonomous intelligence through RAG, Agentic Pipelines, and high-performance neural infrastructure.
          </p>

          <div className="mt-16 flex flex-wrap gap-6">
            <button
              className="magnetic-button"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translate(0px, 0px)`;
              }}
            >
              View Case Files
            </button>
            <div className="flex items-center gap-4 text-technical text-pure-white/40">
              <span className="w-12 h-[1px] bg-pure-white/20" />
              BASED IN GERMANY
            </div>
          </div>
        </motion.div>

        {/* System Coordinates (Decorative) */}
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <div className="font-mono text-[10px] text-pure-white/20 space-y-1">
            <p>LAT: 49.1427° N</p>
            <p>LNG: 9.2109° E</p>
            <p>SYS_STATUS: OPTIMIZED</p>
          </div>
        </div>
      </div>

      {/* Right Column: Neural Core */}
      <div className="relative h-[60vh] lg:h-full cursor-grab active:cursor-grabbing">
        <Canvas shadows gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <NeuralCore />
        </Canvas>

        {/* Interaction Prompt */}
        <div className="absolute bottom-10 right-10 pointer-events-none">
          <div className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest flex items-center gap-3">
            Drag to orbit neural core
            <div className="w-1 h-1 bg-safety-orange animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
