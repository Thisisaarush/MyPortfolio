import "cal-sans"

// components
import DesignSection from "@/Components/DesignSection/DesignSection"
import HeroSection from "@/Components/HeroSection/HeroSection"
import ProjectsSection from "@/Components/ProjectsSection/ProjectsSection"
// import RainbowPrism from "@/Components/RainbowPrism/RainbowPrism";

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
