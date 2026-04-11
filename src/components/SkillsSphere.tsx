"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, TrackballControls } from "@react-three/drei";
import { useInView } from "framer-motion";
import { useDevice } from "@/hooks/useDevice";
import * as THREE from "three";

const Skill = ({ position, text }: { position: [number, number, number], text: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.4}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
};

const SkillCloud = ({ skills, isMobile }: { skills: string[], isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const count = skills.length;
    const radius = isMobile ? 2.5 : 3.5;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ]);
    }
    return pos;
  }, [skills, isMobile]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Skill key={skill} position={positions[i]} text={skill} />
      ))}
    </group>
  );
};

const SkillsSphere = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const { isMobile, isTablet } = useDevice();

  const skills = [
    "React", "Next.js", "Node.js", "Express", 
    "MongoDB", "MySQL", "Python", "AI/ML",
    "Tailwind", "TypeScript", "Postman", "Git",
    "Three.js", "Framer", "Vercel", "Testing"
  ];

  return (
    <div 
      ref={containerRef}
      className="h-[350px] sm:h-[600px] w-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden"
    >
      {isInView ? (
        <Canvas camera={{ position: [0, 0, isMobile ? 12 : 10], fov: isMobile ? 45 : 35 }} gl={{ powerPreference: "high-performance" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillCloud skills={skills} isMobile={isMobile} />
          {!isMobile && <TrackballControls noZoom />}
        </Canvas>
      ) : (
        <div className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">
          <span className="text-cyan-500/50 text-xs font-mono uppercase tracking-widest">Loading Sphere...</span>
        </div>
      )}
    </div>
  );
};

export default SkillsSphere;
