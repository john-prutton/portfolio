import Link from "next/link"

import { siGithub, siGmail, siLinkedin } from "simple-icons"

import { Icon, RenderIcon } from "./technologies"
import { Button } from "./ui/button"

export const Footer = () => (
  <footer className="mt-8 space-y-4 bg-gradient-to-b from-background to-muted px-4 py-16">
    <p className="mx-auto w-fit text-muted-foreground">John Prutton | 2024</p>

    <div className="mx-auto w-fit space-x-4">
      <IconLink
        link="https://github.com/john-prutton"
        icon={{ ...siGithub, hex: "FFFFFF" }}
      />

      <IconLink link="https://linkedin.com/in/john-prutton" icon={siLinkedin} />

      <IconLink link="mailto:johnrprutton@gmail.com" icon={siGmail} />
    </div>
  </footer>
)

const IconLink = ({ icon, link }: { icon: Icon; link: string }) => (
  <Button asChild variant={"link"} className="p-0">
    <Link href={link} target="_blank">
      <RenderIcon icon={icon} className="size-8" />
    </Link>
  </Button>
)
