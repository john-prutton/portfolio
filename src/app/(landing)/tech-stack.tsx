"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { motion } from "framer-motion"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import { frameworks, languages, RenderIcon, tools } from "./technologies"

export const TechStack = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="mt-16"
  >
    {Object.entries({ languages, frameworks, tools }).map(
      ([name, group], i) => (
        <div key={name}>
          <h2 className="mb-2 text-muted-foreground/50">
            {name.toLocaleUpperCase()}
          </h2>

          <Carousel
            plugins={[
              AutoScroll({
                speed: 0.5,
                startDelay: 0,
                stopOnInteraction: false,
                direction: i === 1 ? "backward" : "forward"
              })
            ]}
            opts={{
              dragFree: true,
              loop: true
            }}
            className="relative cursor-grab select-none"
          >
            <div className="absolute left-0 z-10 h-full w-1/4 bg-gradient-to-l from-transparent to-background" />
            <div className="absolute right-0 z-10 h-full w-1/4 bg-gradient-to-r from-transparent to-background" />
            <CarouselContent>
              {group.map((icon) => (
                <CarouselItem
                  key={icon.slug}
                  className="relative basis-1/3 pb-10 sm:basis-1/4 md:basis-1/5"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    viewport={{ once: false }}
                    className="relative mx-auto w-fit"
                  >
                    <div
                      style={{
                        backgroundColor: `color-mix(in lch, #${icon.hex} 10%, transparent)`
                      }}
                      className="relative w-fit overflow-clip rounded p-3"
                    >
                      <div
                        style={{ background: "#" + icon.hex }}
                        className="absolute size-10 rounded-full opacity-25 blur-lg"
                      />

                      <RenderIcon icon={icon} className="relative size-10" />
                    </div>

                    <span className="absolute -bottom-2 left-1/2 w-[200%] -translate-x-1/2 translate-y-full text-center text-xs text-muted-foreground">
                      {icon.title}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )
    )}
  </motion.section>
)
