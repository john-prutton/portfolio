import { StaticImageData } from "next/image"

import carleyAnalyzeBrownRice from "@/../public/mockups/carley/analyze-brown-rice.png"
import carleyAnalyzeToastedSandwich from "@/../public/mockups/carley/analyze-toasted-sandwich.png"
import carleyLandingPage from "@/../public/mockups/carley/landing-page.png"
import carleyMealHistory from "@/../public/mockups/carley/meal-history-zoomed.png"
import gfsCreateAssociation1 from "@/../public/mockups/gfs/create-association-1.png"
import gfsCreateAssociation2 from "@/../public/mockups/gfs/create-association-2.png"
import gfsCreateAssociation3 from "@/../public/mockups/gfs/create-association-3.png"
import gfsRichTextEditor from "@/../public/mockups/gfs/rich-text-editor.png"

export type ProjectInfo = {
  title: string
  tags: string[]
  description: string[]
  images: StaticImageData[]
  blogLink: string
  link?: string
  archived?: true
  production?: true
  githubLink?: string
}

export const projects: ProjectInfo[] = [
  {
    title: "Carley",
    tags: ["SaaS", "AI", "Nutrition"],
    description: [
      "Carley is a web application that simplifies tracking nutrition. It allows users to upload pictures of their meals, and uses computer vision to identify the food items in the image. Users can then log the food items and track their daily nutrition intake."
    ],
    blogLink: "/blog/carley",
    link: "https://carley.johnprutton.dev",
    githubLink: "https://github.com/john-prutton/carley",
    production: true,

    images: [
      carleyLandingPage,
      carleyAnalyzeToastedSandwich,
      carleyAnalyzeBrownRice,
      carleyMealHistory
    ]
  },
  {
    title: "Guildelines For Students",
    tags: ["Custom CMS", "Portal", "Blog", "Role-based Access"],
    description: [
      `
        Guideline For Students is a student portal for university students in Eindhoven, Netherlands. 
        It provides students with valuable information in the form of blog posts, and allows them to
        view student associations and events.
      `,
      `
        It features role-based access control and a custom CMS with a rich text editor and support for 
        uploading images.
      `
    ],
    blogLink: "/blog/guidelines-for-students",
    archived: true,
    production: true,
    images: [
      gfsRichTextEditor,
      gfsCreateAssociation1,
      gfsCreateAssociation2,
      gfsCreateAssociation3
    ]
  }
]
