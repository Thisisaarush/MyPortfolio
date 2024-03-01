"use client"

import Image from "next/image"
import { Carousel } from "@material-tailwind/react"

// images
import ecomm1 from "../../../public/mockups/ecomm-1.png"
import ecomm2 from "../../../public/mockups/ecomm-2.png"
import ecomm3 from "../../../public/mockups/ecomm-3.png"
import food1 from "../../../public/mockups/food-1.png"
import food2 from "../../../public/mockups/food-2.png"
import food3 from "../../../public/mockups/food-3.png"
import home1 from "../../../public/mockups/home-1.png"
import home2 from "../../../public/mockups/home-2.png"
import smart1 from "../../../public/mockups/smart-1.png"
import smart2 from "../../../public/mockups/smart-2.png"

export const DesignCarousel = () => {
  return (
    <Carousel
      placeholder="Designs"
      autoplay
      loop
      className="max-w-5xl lg:rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src={ecomm1}
        alt="ecommerce app 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={ecomm2}
        alt="ecommerce app 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={ecomm3}
        alt="ecommerce app 3"
        className="h-full w-full object-cover"
      />
      <Image
        src={food1}
        alt="food app 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={food2}
        alt="food app 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={food3}
        alt="food app 3"
        className="h-full w-full object-cover"
      />
      <Image
        src={home1}
        alt="home renovation 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={home2}
        alt="home renovation 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={smart1}
        alt="smart home app 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={smart2}
        alt="smart home app 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}
