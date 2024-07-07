import { HeroParallax } from "./hero-parallax"
import { frameworks, languages, tools } from "./technologies"

export default function Home() {
  return (
    <main>
      <HeroParallax
        icons={{
          frameworks,
          tools,
          languages
        }}
      />
      <div className="h-svh bg-red-500"></div>
    </main>
  )
}
