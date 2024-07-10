import { projects } from "./data"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold tracking-wide">Projects</h2>

      <div className="space-y-12 lg:space-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
