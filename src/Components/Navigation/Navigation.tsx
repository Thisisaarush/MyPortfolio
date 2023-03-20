import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../../public/Logo.png";

const Navigation = () => {
  return (
    <ul className="z-10 text-sm md:text-base py-2 absolute text-white top-6 left-1/2 -translate-x-1/2 transition-all duration-150 ease-in-out bg-[#1e1e1e] bg-opacity-90 rounded-md backdrop-blur-md flex justify-between items-center max-w-5xl w-[95vw] px-8">
      <li>
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
      </li>

      <li className="gap-2 md:gap-8 flex justify-center items-center uppercase">
        <Link
          href="/projects"
          className="hover:text-gray-300 hover:underline hover:underline-offset-4 p-2"
        >
          Projects
        </Link>
        <Link
          href="mailto:tanwaraarush007@gmail.com"
          className="hover:text-gray-300 hover:underline hover:underline-offset-4 p-2"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
