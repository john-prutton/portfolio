import Link from "next/link"

import { LucideMenu } from "lucide-react"

import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "./ui/sheet"

const links = (
  [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ] as const
).map((link) => (
  <Button variant="ghost" asChild key={link.href}>
    <Link href={link.href}>{link.label}</Link>
  </Button>
))

const MenuButton = () => (
  <Button size="icon" variant="ghost">
    <LucideMenu />
  </Button>
)

const Logo = () => (
  <Button
    variant="ghost"
    asChild
    className="-m-2 flex size-fit flex-col items-start p-2 text-xl font-black leading-none"
  >
    <Link href="/">
      <span>John</span> <span>Prutton</span>
    </Link>
  </Button>
)

export const Navbar = () => (
  <div className="sticky top-0 z-40 mb-8 border-b bg-background/70 backdrop-blur-xl md:mb-16">
    <nav className="container flex flex-row items-center justify-between py-4">
      <Logo />

      <div className="hidden flex-row space-x-4 md:flex">{links}</div>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <MenuButton />
        </SheetTrigger>

        <SheetContent className="p-4">
          <SheetHeader className="mb-8">
            <SheetClose className="ml-auto" asChild>
              <MenuButton />
            </SheetClose>
          </SheetHeader>

          <div className="flex flex-col gap-2">
            {links.map((b) => (
              <SheetClose key={b.key} asChild className="w-fit">
                {b}
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
)
