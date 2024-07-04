"use client"

import Image from "next/image"

import { motion } from "framer-motion"
import { LucideSendHorizonal } from "lucide-react"

import PictureOfMe from "@/../public/me.jpeg"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section className="mx-auto grid items-center gap-8 sm:grid-cols-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative aspect-square overflow-clip rounded-sm grayscale sm:order-2"
      >
        <Image
          src={PictureOfMe}
          priority
          placeholder="blur"
          blurDataURL={PictureOfMe.blurDataURL}
          alt="Me"
          fill
          // sizes="(max-width: 600px) 100vw, 800px"
          className="object-cover object-[50%_40%]"
        />
      </motion.div>

      <div className="">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="block text-3xl"
        >
          Hi, my name is
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="block text-5xl font-black text-primary"
        >
          John Prutton
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 text-lg tracking-widest text-muted-foreground"
        >
          I am a{" "}
          <span className="[color:color-mix(in_oklab,hsl(var(--primary))_40%,white)]">
            Fullstack Web Developer
          </span>
          , with a passion for creating{" "}
          <span className="[color:color-mix(in_oklab,hsl(var(--primary))_40%,white)]">
            elegant and performant
          </span>{" "}
          web applications.
        </motion.p>

        <Button asChild className="mt-8 w-full py-8 text-xl font-semibold">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <LucideSendHorizonal className="mr-2" />
            Get in touch
          </motion.button>
        </Button>
      </div>
    </section>
  )
}
