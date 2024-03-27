import React from "react"
import Image from "next/image"

// Icons
import bees from "../../../public/brands/bees.png"
import RF from "../../../public/brands/RF.png"
import genpact from "../../../public/brands/genpact.png"
import rightpoint from "../../../public/brands/rightpoint.png"
import Link from "next/link"

const PreviousCompanies: React.FC = () => {
  return (
    <div className="pt-24 px-4 flex justify-center items-center flex-col gap-24 uppercase">
      <div className="flex text-5xl md:text-7xl text-center">
        <span className="font-bold">
          Work <span className="font-extralight"> - Previously Worked For</span>
        </span>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-10 lg:justify-between max-w-5xl w-full">
        <Link
          href="https://www.rightpoint.com/"
          className="w-36 h-36 flex justify-center items-center rounded-full bg-white overflow-hidden"
        >
          <Image src={rightpoint} alt="rightpoint" />
        </Link>
        <Link
          href="https://www.genpact.com/"
          className="w-36 h-36 flex justify-center items-center rounded-full bg-white overflow-hidden"
        >
          <Image src={genpact} alt="genpact" />
        </Link>
        <Link
          href="https://mybeesapp.com/"
          className="w-36 h-36 flex justify-center items-center rounded-full bg-white overflow-hidden"
        >
          <Image src={bees} alt="bees" />
        </Link>
        <Link
          href="https://www.raymourflanigan.com/"
          className="w-36 h-36 flex justify-center items-center rounded-full bg-white overflow-hidden"
        >
          <Image src={RF} alt="RF" />
        </Link>
      </div>
    </div>
  )
}

export default PreviousCompanies
