"use client"

import Link from "next/link"
import { useRef } from "react"

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MovingBorderButton({
  href,
  borderRadius,
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  href: string
  borderRadius: string
  children: React.ReactNode
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  [key: string]: any
}) {
  return (
    <Button
      className={cn(
        "relative h-16 overflow-hidden bg-transparent p-0.5 text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius
      }}
      asChild
      {...otherProps}
    >
      <Link href={href}>
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(
                "size-10 bg-[radial-gradient(var(--primary)_40%,transparent_60%)] opacity-70",
                borderClassName
              )}
            />
          </MovingBorder>
        </div>

        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 antialiased backdrop-blur-xl",
            className
          )}
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`
          }}
        >
          {children}
        </div>
      </Link>
    </Button>
  )
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  [key: string]: any
}) => {
  const pathRef = useRef<any>()
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
