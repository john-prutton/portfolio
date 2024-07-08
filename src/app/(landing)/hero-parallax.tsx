"use client"

import React, { useEffect } from "react"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Lenis from "lenis"

import { Hero } from "./hero"
import { IconCarousel } from "./icon-carousel"
import { frameworks, languages, tools } from "./technologies"

export const HeroParallax = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )

  const initialOpacity = 0.2
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [initialOpacity, 1]),
    springConfig
  )
  const rotateZ = useTransform(
    useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig),
    (v) => `min(var(--max-rotate-z,0deg),${v}deg)`
  )
  const translateY = useTransform(
    useSpring(
      useTransform(scrollYProgress, [0, 0.2, 1], [-100, 0, 100]),
      springConfig
    ),
    (v) => `max(var(--min-translate-y,0%),${v}%)`
  )

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={ref}
      className="relative -mt-8 flex flex-col self-auto overflow-hidden antialiased [perspective:500px] [transform-style:preserve-3d] md:-mt-16"
    >
      <Hero className="z-10 py-20 md:pt-40 lg:pt-96" />

      <motion.div
        className="sm:[--max-rotate-z:20deg] sm:[--min-translate-y:-999%]"
        style={{
          rotateX,
          rotateZ,
          opacity,
          translateY
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: initialOpacity }}
        transition={springConfig}
      >
        <IconCarousel icons={languages} autoScrollDirection="backward" />
        <IconCarousel icons={frameworks} autoScrollDirection="forward" />
        <IconCarousel icons={tools} autoScrollDirection="backward" />
      </motion.div>

      <div className="absolute bottom-0 h-1/5 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
