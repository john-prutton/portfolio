import Image from "next/image"

import { readdir, readFile } from "node:fs/promises"
import { join, parse } from "path"

import { compileMDX } from "next-mdx-remote/rsc"

import { cn } from "@/lib/utils"

const articlesDir = join(process.cwd(), "src/app/blog/articles")

export const getAllArticles = async () => {
  const articleFiles = await readdir(articlesDir)

  const articles = Promise.all(
    articleFiles.map(async (file) => await parse(file).name)
  )

  return articles
}

export const readArticle = async (slug: string) => {
  const fileName = slug + ".mdx"
  const filePath = join(articlesDir, fileName)
  const fileContent = await readFile(filePath, "utf-8")

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true
    },
    components: {
      CustomImage: ({ src, alt, className }) => (
        <Image
          src={src!}
          alt={alt!}
          fill
          sizes="(max-width:1300px) 100vw, 1300px"
          className={cn("!relative aspect-square object-cover", className)}
        />
      )
    }
  })

  return { meta: frontmatter, content }
}
