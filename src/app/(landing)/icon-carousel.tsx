"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { motion } from "framer-motion"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import { Icon, RenderIcon } from "./technologies"

export function IconCarousel({
  icons,
  autoScrollDirection
}: {
  icons: Icon[]
  autoScrollDirection: "forward" | "backward"
}) {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 0.5,
          startDelay: 0,
          stopOnInteraction: false,
          direction: autoScrollDirection
        })
      ]}
      opts={{
        dragFree: true,
        loop: true
      }}
      className="relative w-full cursor-grab select-none"
    >
      <div className="absolute left-0 z-10 h-full w-1/4 bg-gradient-to-l from-transparent to-background" />
      <div className="absolute right-0 z-10 h-full w-1/4 bg-gradient-to-r from-transparent to-background" />

      <CarouselContent className="-ml-16">
        {icons.map((icon) => (
          <CarouselItem
            key={icon.slug}
            className="relative basis-1/3 pb-10 pl-16 sm:basis-1/4 md:basis-1/5"
          >
            <motion.div
              // initial={{ opacity: 0, scale: 0 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 200,
              //   damping: 15
              // }}
              // viewport={{ once: false }}
              className="relative mx-auto w-fit"
            >
              <div
                style={{
                  backgroundColor: `color-mix(in lch, #${icon.hex} 10%, transparent)`
                }}
                className="relative aspect-square w-full overflow-clip rounded p-3"
              >
                <div
                  style={{ background: "#" + icon.hex }}
                  className="absolute w-full rounded-full opacity-25 blur-lg"
                />

                <RenderIcon icon={icon} className="relative w-full" />
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
