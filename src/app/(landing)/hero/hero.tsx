"use client"

import { motion } from "framer-motion"
import { LucideSendHorizonal } from "lucide-react"

import { cn } from "@/lib/utils"

import { FlipWords } from "./flip-words"
import { MovingBorderButton } from "./moving-border-button"

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "pointer-events-none mx-auto grid items-center gap-8 sm:grid-cols-2",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="block text-3xl"
        >
          Start building your
        </motion.span>

        <FlipWords
          words={["Web App", "MVP", "Backend", "Business"]}
          className="text-5xl font-black text-primary"
          duration={3000}
          wordAnimations={{
            initial: {
              opacity: 0,
              y: 10
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 10
            },
            exit: {
              opacity: 0,
              y: -40,
              x: 40,
              filter: "blur(8px)",
              scale: 2,
              position: "absolute"
            }
          }}
          letterAnimations={(index) => ({
            initial: { opacity: 0, y: 10, filter: "blur(8px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            transition: {
              delay: index * 0.08,
              duration: 0.4
            }
          })}
        />

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

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <MovingBorderButton
            href="/contact"
            duration={10000}
            className="pointer-events-auto text-xl tracking-widest text-foreground"
            containerClassName="w-full"
            borderClassName="bg-primary rounded-full"
            borderRadius="var(--radius)"
          >
            Get in touch
            <LucideSendHorizonal className="ml-2" />
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  )
}
