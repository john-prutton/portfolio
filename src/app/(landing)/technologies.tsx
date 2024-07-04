import {
  siCss3,
  siDocker,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siLinux,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siSass,
  siShadcnui,
  siTailwindcss,
  siTraefikmesh,
  siTraefikproxy,
  siTypescript,
  siUbuntu
} from "simple-icons"
import type { SimpleIcon } from "simple-icons"

export const RenderIcon = ({
  icon,
  className
}: {
  icon: SimpleIcon
  className?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={"#" + icon.hex}
  >
    <path fill="inherit" d={icon.path} />
  </svg>
)

export const languages = [siTypescript, siJavascript, siHtml5, siCss3, siSass]
export const frameworks = [
  siReact,
  { ...siNextdotjs, hex: "FFFFFF" },
  siTailwindcss,
  { ...siShadcnui, hex: "FFFFFF" }
]
export const tools = [
  siGit,
  siUbuntu,
  siGithubactions,
  siDocker,
  siNodedotjs,
  siTraefikproxy
]
