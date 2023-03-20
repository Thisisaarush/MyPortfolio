"use client";

import React, { useEffect, useState } from "react";

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
    <div className="absolute text-white top-1/4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
      <span className="font-black uppercase text-6xl sm:text-8xl mb-6">
        {title[currentTitle]}
      </span>
      {/* <span className="capitalize hidden sm:block text-gray-300">
        Aarush Tanwar - Full Stack Developer located in Jaipur, INDIA
      </span>
      <span className="capitalize hidden sm:block text-gray-300">
        Specialised in building unique and robust web apps
      </span> */}
    </div>
  );
};

export default HeroSection;
