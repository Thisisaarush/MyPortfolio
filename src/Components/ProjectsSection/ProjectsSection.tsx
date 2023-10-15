import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import shoe from "../../../public/shoe.jpg";
import bees from "../../../public/bees.png";
import discord from "../../../public/discord.png";

const ProjectsSection = () => {
  return (
    <div className="bg-black/90 text-white uppercase">
      <div className="flex flex-col sm:flex-row max-w-5xl m-auto gap-6 px-4 py-24">
        <span className="w-1/4 text-gray-300 text-xl font-light">
          Achievements
        </span>

        <div className="flex flex-col text-5xl md:text-7xl">
          <div>
            <span className="font-bold">Projects</span>
            <span className="font-extralight"> - </span>
          </div>
          <span className="font-extralight">Full Stack Web Apps</span>
          <Link
            href="/projects"
            className="text-base mt-10 w-fit py-2 px-4 border rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black  hover:underline-offset-4 transition-all font-semibold duration-150 ease-in-out"
          >
            All Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row m-auto">
        <div className="relative flex w-full">
          <Link
            href="https://shoez-store.vercel.app/"
            target="_blank"
            className="md:opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out relative h-[800px] md:h-[1000px] w-full sm:w-full overflow-hidden"
          >
            <Image
              src={shoe}
              alt="project"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="hover:scale-110 transition-all duration-300 ease-in-out"
              quality={50}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </Link>
          <div className="absolute bottom-0 py-8 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full">
            <span className="font-bold text-2xl">Shoez Store</span>
            <Link
              href="https://github.com/Thisisaarush/ShoezStore"
              target="_blank"
              className="py-1 px-2 text-center font-light hover:underline hover:underline-offset-4"
            >
              Source Code
            </Link>
          </div>
        </div>

        <div className="relative flex w-full">
          <Link
            href="https://mybeesapp.com/"
            target="_blank"
            className="md:opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out relative h-[800px] md:h-[1000px] w-full sm:w-full overflow-hidden"
          >
            <Image
              src={bees}
              alt="project"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="hover:scale-110 transition-all duration-300 ease-in-out"
              quality={50}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </Link>
          <div className="absolute bottom-0 py-8 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full">
            <span className="font-bold text-2xl">My Bees</span>
            <Link
              href="https://www.ab-inbev.com/"
              target="_blank"
              className="py-1 px-2 text-center font-light hover:underline hover:underline-offset-4"
            >
              AB InBev
            </Link>
          </div>
        </div>

        <div className="relative flex w-full">
          <Link
            href="https://discooord.vercel.app/"
            target="_blank"
            className="md:opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out relative h-[800px] md:h-[1000px] w-full sm:w-full overflow-hidden"
          >
            <Image
              src={discord}
              alt="project"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="hover:scale-110 transition-all duration-300 ease-in-out"
              quality={50}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </Link>
          <div className="absolute bottom-0 py-8 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full">
            <span className="font-bold text-2xl">Weather App</span>
            <Link
              href="https://github.com/Thisisaarush/Discooord"
              target="_blank"
              className="py-1 px-2 text-center font-light hover:underline hover:underline-offset-4"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
