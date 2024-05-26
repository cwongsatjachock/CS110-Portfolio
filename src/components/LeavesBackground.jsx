import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const LeafFallBackground = props => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.position.y -= delta * 0.05; // Adjust speed of falling leaves here
    if (ref.current.position.y < -1.2) {
      ref.current.position.y = 1.2;
    }
  });

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#21B6A8" 
          size={0.01} 
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const LeavesCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-10]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <LeafFallBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default LeavesCanvas;
