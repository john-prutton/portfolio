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
    </main>
  )
}
