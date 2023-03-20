"use client";

import React, { useState, useEffect } from "react";
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
        intensity={0.5}
        luminanceThreshold={1}
        luminanceSmoothing={1}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}

const RainbowPrism = () => {
  const [dpr, setDpr] = useState(0.8);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (Loading)
    return (
      <div className="text-4xl text-white bg-black z-50 min-h-screen flex justify-center items-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 rounded-full animate-pulse dark:bg-gray-500"></div>
          <div className="w-6 h-6 rounded-full animate-pulse dark:bg-gray-500"></div>
          <div className="w-6 h-6 rounded-full animate-pulse dark:bg-gray-500"></div>
        </div>
      </div>
    );

  return (
    <div className="w-screen h-screen -z-50 bg-black">
      <Canvas
        dpr={dpr}
        orthographic
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 100], zoom: 100 }}
      >
        <color attach="background" args={["black"]} />
        <PerformanceMonitor
          onDecline={() => setDpr(0.4)}
          onIncline={() => setDpr(0.8)}
        >
          <Scene />
          <Effects />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default RainbowPrism;
