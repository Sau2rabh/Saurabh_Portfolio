"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useDevice } from "@/hooks/useDevice";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Suppress the specific Three.js NaN bounding-sphere warning at module level
if (typeof window !== "undefined") {
  const _warn = console.warn.bind(console);
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.BufferGeometry.computeBoundingSphere")
    ) {
      return;
    }
    _warn(...args);
  };
}

/** Generate a clean sphere buffer with no NaN triplets */
function buildSphere(count: number): Float32Array {
  // Generate extra points to account for NaN rejections
  const raw = random.inSphere(new Float32Array(count * 3 * 2), { radius: 1.2 }) as Float32Array;
  const valid: number[] = [];
  for (let i = 0; i + 2 < raw.length && valid.length < count * 3; i += 3) {
    const x = raw[i], y = raw[i + 1], z = raw[i + 2];
    if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
      valid.push(x, y, z);
    }
  }
  // Pad with zeros if not enough valid points (edge case)
  while (valid.length < count * 3) valid.push(0, 0, 0);
  return new Float32Array(valid.slice(0, count * 3));
}

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const { isMobile, isTablet } = useDevice();
  const starCount = (isMobile || isTablet) ? 2000 : 5000;
  const [sphere] = useState(() => buildSphere(starCount));
  const [ready, setReady] = useState(false);

  // Defer mount by one frame so Three.js internals are fully initialised
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useFrame((_state, delta) => {
    if (!ref.current || isMobile || isTablet) return; // Completely stop rotation on mobile/tablet for static background
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  if (!ready) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
