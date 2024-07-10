import Image from "next/image"
import Link from "next/link"

import { LucideExternalLink } from "lucide-react"
import { siGithub } from "simple-icons"

import { RenderIcon } from "@/components/technologies"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import { ProjectInfo } from "./data"

export function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h3 className="mb-4 text-lg font-medium">{project.title}</h3>

        <div className="my-2 flex flex-row flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2">
              {tag}
            </Badge>
          ))}
        </div>

        {project.description.map((paragraph, index) => (
          <p
            key={paragraph.substring(0, 10) + index}
            className="mb-2 text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}

        {project.link && (
          <Button variant="link" className="mt-2 !p-0" asChild>
            <Link href={project.link} target="_blank">
              {project.archived ? "Archived" : "Live"} Website
              <LucideExternalLink className="ml-2 size-4" />
            </Link>
          </Button>
        )}

        {project.githubLink && (
          <Button
            variant="link"
            className="ml-4 mt-2 !p-0 text-muted-foreground"
            asChild
          >
            <Link href={project.githubLink} target="_blank">
              Source Code
              <RenderIcon
                icon={{ ...siGithub, hex: "8f8f8f" }}
                className="ml-2 size-4"
              />
            </Link>
          </Button>
        )}
      </div>

      <Carousel>
        <CarouselContent className="-ml-8">
          {project.images.map((image) => (
            <CarouselItem key={image.src} className="basis-[10rem] pl-8">
              <div className="relative aspect-[1170/2532] overflow-clip rounded-xl sm:basis-1/3">
                <Image
                  src={image.src}
                  alt={`Screenshot of ${project.title}`}
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  sizes="10rem"
                  fill
                  className="select-none object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </article>
  )
}
