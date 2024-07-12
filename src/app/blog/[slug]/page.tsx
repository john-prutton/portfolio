import { readArticle } from "../utils"

export default async function BlogArticlePage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { meta, content } = await readArticle(slug)
  return <main>{JSON.stringify(meta)}</main>
}
