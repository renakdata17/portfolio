import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Blob() {
  const groupRef = useRef(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const pointer = state.pointer ?? state.mouse;
    group.rotation.y += 0.0025;
    group.rotation.x = pointer.y * 0.25;
    group.rotation.z = pointer.x * 0.15;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh>
          <icosahedronGeometry args={[1.5, 4]} />
          <MeshDistortMaterial
            color="#52f5c4"
            distort={0.4}
            speed={1.8}
            roughness={0.15}
            metalness={0.4}
          />
        </mesh>
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#65a7ff" wireframe transparent opacity={0.25} />
        </mesh>
      </Float>
      <Sparkles count={60} scale={4.5} size={2.5} speed={0.3} color="#65a7ff" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={1.4} color="#52f5c4" />
      <pointLight position={[-4, -2, -3]} intensity={1} color="#65a7ff" />
      <Blob />
    </Canvas>
  );
}
