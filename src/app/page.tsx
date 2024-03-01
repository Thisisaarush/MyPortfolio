import "cal-sans"

// components
import DesignSection from "@/components/DesignSection/DesignSection"
import HeroSection from "@/components/HeroSection/HeroSection"
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection"
// import RainbowPrism from "@/components/RainbowPrism/RainbowPrism";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      {/* <RainbowPrism /> */}
      <ProjectsSection />
      <DesignSection />
    </main>
  )
}
