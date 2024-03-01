"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "../../../public/Logo.png"

const Navigation = () => {
  const pathname = usePathname()

  return (
    <ul
      className={`z-20 text-sm md:text-base absolute text-white top-8 left-1/2 -translate-x-1/2 transition-all duration-150 ease-in-out ${
        pathname === "/" ? "bg-transparent" : "bg-black/90"
      } rounded-full backdrop-blur-md flex justify-between items-center max-w-4xl w-[90vw] px-6 sm:px-8 py-2`}
    >
      <li>
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
      </li>

      <li className="gap-4 sm:gap-8 flex justify-center items-center capitalize text-white/70">
        {/* <Link href="/blog" className="hover:text-white p-1">
          Blog
        </Link> */}
        <Link href="/projects" className="hover:text-white p-1">
          Projects
        </Link>
        <Link
          href="mailto:tanwaraarush007@gmail.com"
          className="hover:text-white p-1"
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
