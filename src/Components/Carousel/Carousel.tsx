"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import ecomm from "../../../public/mockups/ecomm.png";
import food from "../../../public/mockups/food.png";
import homeReno from "../../../public/mockups/homeReno.png";
import ng from "../../../public/mockups/ng.png";
import smartHome from "../../../public/mockups/smartHome.png";

//images data
const data = [ecomm, food, homeReno, ng, smartHome];

export const Carousel = () => {
  let [[heroImageNumber, direction], setHeroImage] = useState([0, 0]);
  let prevIdx = heroImageNumber;

  // changing hero slides based on time
  useEffect(() => {
    const timeOut = setTimeout(() => {
      paginate(1);
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [heroImageNumber]);

  // changing hero slides based on direction
  const paginate = (direction: 1 | -1) => {
    if (heroImageNumber >= 3 && direction > 0) {
      setHeroImage([0, direction]);
    } else if (heroImageNumber <= 0 && direction < 0) {
      setHeroImage([3, direction]);
    } else {
      setHeroImage([heroImageNumber + direction, direction]);
    }
  };

  // handling active dots
  const isActive = (index: number): boolean => {
    if (index === heroImageNumber) return true;
    return false;
  };

  return (
    <div className="relative mx-auto my-0 h-max max-w-5xl">
      <div className="relative overflow-hidden h-[400px] sm:h-[550px] md:h-[650px] w-screen max-w-5xl">
        <Image
          src={data[heroImageNumber]}
          alt="Carousel"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 100vw"
          quality={50}
        />

        <ul className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 p-1">
          {data?.map((slide, idx: number) => (
            <li
              key={idx}
              onClick={() => {
                const dir = idx > prevIdx ? 1 : -1;
                setHeroImage([idx, dir]);
              }}
              className={`h-[4px] w-[30px] cursor-pointer bg-black hover:opacity-100 ${
                isActive(idx) ? "opacity-70" : "opacity-20"
              }`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
