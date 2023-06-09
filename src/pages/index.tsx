import React from "react";
import Head from "next/head";
import "cal-sans";

// components
import DesignSection from "@/Components/DesignSection/DesignSection";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ProjectsSection from "@/Components/ProjectsSection/ProjectsSection";
// import RainbowPrism from "@/Components/RainbowPrism/RainbowPrism";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aarush Tanwar</title>
        <meta
          name="description"
          content="Full Stack Developer, Designer Portfolio - Aarush Tanwar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        <HeroSection />
        {/* <RainbowPrism /> */}
        <ProjectsSection />
        <DesignSection />
      </main>
    </>
  );
}
