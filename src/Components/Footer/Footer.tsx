import React from "react";
import Link from "next/link";

// icons
import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 text-white mt-28 py-20 px-4 uppercase">
      <div className="max-w-5xl m-auto flex flex-col gap-16 md:flex-row md:justify-around">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="text-3xl">
            <span className="font-bold">Aarush Tanwar</span>
            <span className="font-extralight"> - </span>
            <span className="font-extralight">
              Full Stack Developer - Jaipur / INDIA
            </span>
          </div>

          <Link
            href="mailto:tanwaraarush007@gmail.com"
            className="text-base w-fit py-2 px-4 border rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black  hover:underline-offset-4 transition-all font-semibold duration-150 ease-in-out"
          >
            Send an Email
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-light">Follow Me</span>
          <div className="grayscale flex gap-4">
            <Link href="https://github.com/Thisisaarush" target="_blank">
              <Image src={github} alt="github" width={35} height={35} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thisisaarush/"
              target="_blank"
            >
              <Image src={linkedin} alt="linkedin" width={35} height={35} />
            </Link>
            <Link href="https://twitter.com/Thisisaarush" target="_blank">
              <Image src={twitter} alt="twitter" width={35} height={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
