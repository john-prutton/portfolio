import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"

const Logo = () => (
  <Button
    variant="ghost"
    asChild
    className="-m-2 flex size-fit flex-row items-center gap-4 p-2 text-xl font-black leading-none"
  >
    <Link href="/">
      <Image
        src="/me.jpeg"
        alt="john_prutton.jpeg"
        fill
        sizes="48px"
        className="!relative !size-12 rounded-full object-cover grayscale"
      />
      <div>
        <span>John</span>
        <br />
        <span>Prutton</span>
      </div>
    </Link>
  </Button>
)

export const Navbar = () => (
  <div className="sticky top-0 z-40 mb-8 border-b bg-background/70 backdrop-blur-xl md:mb-16">
    <nav className="container flex flex-row items-center justify-between py-4">
      <Logo />

      <Button>
        <Link href="mailto:johnrprutton@gmail.com">Contact Me</Link>
      </Button>
    </nav>
  </div>
)
