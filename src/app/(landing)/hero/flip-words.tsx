"use client"

import { useCallback, useEffect, useState } from "react"

import { AnimatePresence, motion, Target, Transition } from "framer-motion"

import { cn } from "@/lib/utils"

type AnimationDefinition = {
  initial?: Target
  animate?: Target
  exit?: Target
  transition?: Transition
}
type FunctionalAnimationDefinition = (index: number) => AnimationDefinition
type FlipWordsProps = {
  words: string[]
  duration?: number
  className?: string
  wordAnimations: AnimationDefinition
  letterAnimations: FunctionalAnimationDefinition
}

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  wordAnimations,
  letterAnimations
}: FlipWordsProps) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation()
      }, duration)
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        {...wordAnimations}
        className={cn("relative z-10 inline-block", className)}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            {...letterAnimations(index)}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
