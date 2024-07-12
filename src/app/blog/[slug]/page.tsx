import { Metadata } from "next"

import { readArticle } from "../utils"

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { meta } = await readArticle(slug)
  return {
    title: meta.title
  }
}

export default async function BlogArticlePage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { meta, content } = await readArticle(slug)
  return <main>{content}</main>
}
