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
      CustomImage: ({
        src,
        alt,
        className
      }: {
        src: string
        alt: string
        className: string
      }) => (
        <div
          className={cn(
            "relative mx-auto my-16 aspect-square max-w-2xl",
            className
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="680.764"
            height="528.354"
            viewBox="0 0 180.119 139.794"
            className="absolute inset-0 h-full w-full animate-pulse bg-muted"
          >
            <g
              transform="translate(-13.59 -66.639)"
              paintOrder="fill markers stroke"
            >
              <path
                d="m118.507 133.514-34.249 34.249-15.968-15.968-41.938 41.937H178.726z"
                opacity=".675"
                className="fill-background"
              />
              <circle
                cx="58.217"
                cy="108.555"
                r="11.773"
                opacity=".675"
                className="fill-background"
              />
            </g>
          </svg>

          <Image
            src={src!}
            alt={alt!}
            fill
            sizes="672px"
            className="object-cover"
          />
        </div>
      )
    }
  })

  return { meta: frontmatter, content }
}
