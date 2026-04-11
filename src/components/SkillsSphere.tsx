"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, TrackballControls } from "@react-three/drei";
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

const SkillCloud = ({ skills }: { skills: string[] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos.push([
        3 * Math.sin(phi) * Math.cos(theta),
        3 * Math.sin(phi) * Math.sin(theta),
        3 * Math.cos(phi),
      ]);
    }
    return pos;
  }, [skills]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    "React", "Next.js", "Node.js", "Express", 
    "MongoDB", "MySQL", "Python", "AI/ML",
    "Tailwind", "TypeScript", "Postman", "Git",
    "Three.js", "Framer", "Vercel", "Testing"
  ];

  return (
    <div className="h-[400px] sm:h-[600px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, isMobile ? 12 : 10], fov: isMobile ? 45 : 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillCloud skills={skills} />
        <TrackballControls noZoom />
      </Canvas>
    </div>
  );
};

export default SkillsSphere;
