import React from "react";
import { Carousel } from "../Carousel/Carousel";

const DesignSection = () => {
  return (
    <div className="uppercase flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-5xl m-auto gap-6 px-4 py-24">
        <span className="text-xl text-gray-700 font-extralight">
          Exploration
        </span>

        <div className="text-5xl md:text-7xl text-center">
          <span className="font-bold">Design</span>
          <span className="font-extralight"> - </span>
          <span className="font-extralight">UI/UX Web & Mobile Designs</span>
        </div>
        <ul className="flex items-center flex-col justify-center gap-6 md:flex-row text-lg md:gap-16 mt-8">
          <li>-concept-</li>
          <li>-creative-</li>
          <li>-innovation-</li>
          <li>-tendency-</li>
        </ul>
      </div>

      <Carousel />
    </div>
  );
};

export default DesignSection;
