"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from "react"

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion"
import Lenis from "lenis"

import { IconCarousel } from "./icon-carousel"
import { Icon } from "./technologies"

export const HeroParallax = ({
  icons
}: {
  icons: {
    languages: Icon[]
    frameworks: Icon[]
    tools: Icon[]
  }
}) => {
  const firstRow = icons.languages
  const secondRow = icons.frameworks
  const thirdRow = icons.tools

  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
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
      className="relative flex h-[200vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className=""
      >
        <IconCarousel icons={firstRow} autoScrollDirection="backward" />
        <IconCarousel icons={secondRow} autoScrollDirection="forward" />
        <IconCarousel icons={thirdRow} autoScrollDirection="backward" />
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
        The Ultimate <br /> development studio
      </h1>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{
        y: -20
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0 bg-red-500"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  )
}
