import { readdir, readFile } from "node:fs/promises"
import { join, parse } from "path"

import { compileMDX } from "next-mdx-remote/rsc"

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

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true
    }
  })

  return { meta: frontmatter, content }
}
