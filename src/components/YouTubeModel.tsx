import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const YouTubeModel = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1.4, 0.2]} />
      <meshStandardMaterial
        color="#FFD700"
        metalness={0.8}
        roughness={0.2}
        emissive="#FFD700"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};