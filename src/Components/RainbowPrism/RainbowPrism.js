"use client";

import React, { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { PerformanceMonitor, usePerformanceMonitor } from "@react-three/drei";
import { Scene } from "./SubComponents/Scene";

function Effects() {
  // A switch that turns effects on and off.
  const [hasEffects, setHasEffects] = useState(true);
  const texture = useLoader(
    LUTCubeLoader,
    "https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/DwlG-F-6800-STD.cube"
  );

  // A callback destructuring for the onChange parameter.
  // `factor` is the current quality scale between 0 and 1.
  usePerformanceMonitor({
    onChange: ({ factor }) => {
      // If effects are currently enabled and
      // the factor is higher than average...
      if (hasEffects && factor > 0.5) {
        // ...decrease quality.
        effect.qualityScale = round(0.5 + 0.5 * factor, 1);
      }

      // Handle other conditions
      // when PerformanceMonitor says
      // to decline or incline
    },
  });

  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        levels={9}
        intensity={1.5}
        luminanceThreshold={1}
        luminanceSmoothing={1}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}

const RainbowPrism = () => {
  const [dpr, setDpr] = useState(2);

  return (
    <div className="w-screen h-screen -z-50">
      <Canvas
        dpr={dpr}
        orthographic
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 100], zoom: 80 }}
      >
        <color attach="background" args={["black"]} />
        <PerformanceMonitor
          onDecline={() => setDpr(1.5)}
          onIncline={() => setDpr(2)}
        >
          <Scene />
          <Effects />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default RainbowPrism;
