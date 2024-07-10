import { HeroParallax } from "./hero"
import { ProjectsSection } from "./projects"

export default function Home() {
  return (
    <main className="space-y-16">
      <HeroParallax />
      <ProjectsSection />
    </main>
  )
}
