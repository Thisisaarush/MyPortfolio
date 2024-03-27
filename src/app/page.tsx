import "cal-sans"

// components
import HeroSection from "@/Components/HeroSection/HeroSection"
import RainbowPrism from "@/Components/RainbowPrism/RainbowPrism"
import PreviousCompanies from "@/Components/PreviousCompanies/PreviousCompanies"
import ProjectsSection from "@/Components/ProjectsSection/ProjectsSection"
import DesignSection from "@/Components/DesignSection/DesignSection"

export default function Page() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      {/* <RainbowPrism /> */}
      <ProjectsSection />
      <DesignSection />
      {/* <PreviousCompanies /> */}
    </main>
  )
}
