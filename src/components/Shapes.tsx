import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function Shapes() {
  const shapes = React.useRef([]);
  const materials = [
    new THREE.MeshStandardMaterial({ color: '#00A3FF', metalness: 0.5, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: '#8A2BE2', metalness: 0.5, roughness: 0.2 }),
  ];

  useFrame((state) => {
    for (let i = 0; i < shapes.current.length; i++) {
      const shape = shapes.current[i];
      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <mesh
        ref={(el) => (shapes.current[0] = el)}
        position={[-2, 0, 0]}
        material={materials[0]}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      </mesh>
      <mesh
        ref={(el) => (shapes.current[1] = el)}
        position={[2, 0, 0]}
        material={materials[1]}
      >
        <octahedronGeometry args={[1]} />
      </mesh>
    </group>
  );
}