import React, { useEffect, useState } from "react";
import Particles from "../Particles/Particles";

// Title data
const title = ["Developer", "Designer", "Frontend", "Backend"];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentTitle >= title.length - 1) {
        setCurrentTitle(0);
      } else {
        setCurrentTitle(currentTitle + 1);
      }
    }, 4000);
  }, [currentTitle]);

  return (
    <div className="w-screen h-screen relative bg-gradient-to-br from-black via-[#191919] to-black flex flex-col gap-16 justify-center items-center px-4">
      <span className="hero-section font-bold lowercase text-white text-5xl sm:text-6xl md:text-9xl z-10">
        {title[currentTitle]}
      </span>
      <span className="text-center text-white/70 text-sm z-10 tracking-wide max-w-xl">
        Hi, I'm Aarush, Experienced full stack developer building scalable
        solutions with Typescript, React(NextJS), Svelte, NodeJS etc.
      </span>
      <Particles className="absolute inset-0" quantity={200} />
    </div>
  );
};

export default HeroSection;
