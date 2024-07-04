"use client"

import { motion } from "framer-motion"

import { frameworks, languages, RenderIcon, tools } from "./technologies"

export const TechStack = () => (
  <section className="mt-16 space-y-12">
    {Object.entries({ languages, frameworks, tools }).map(
      ([name, group], i) => (
        <div key={name} className="">
          <h2 className="mb-2 text-muted-foreground/50">
            {name.toLocaleUpperCase()}
          </h2>
          <motion.div
            key={i}
            className="!mt-0 flex flex-row flex-wrap gap-x-8 gap-y-12"
          >
            {group.map((icon, index) => (
              <div
                key={icon.slug}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  key={icon.slug}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: `color-mix(in lch, #${icon.hex} 10%, transparent)`
                  }}
                  className="relative overflow-clip rounded p-3"
                >
                  <div
                    style={{ background: "#" + icon.hex }}
                    className="absolute size-10 rounded-full opacity-25 blur-lg"
                  />

                  <RenderIcon icon={icon} className="relative size-10" />
                </motion.div>

                <span className="absolute -bottom-2 mx-auto mt-2 translate-y-full text-center text-xs text-muted-foreground">
                  {icon.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      )
    )}
  </section>
)
