import Link from "next/link"

import { Button } from "@/components/ui/button"

import { getAllArticles } from "./utils"

export default async function BlogHomePage() {
  const articlePosts = await getAllArticles()
  return (
    <main>
      {articlePosts.map((post) => (
        <Button key={post} asChild variant={"link"}>
          <Link href={`/blog/${post}`}>{post}</Link>
        </Button>
      ))}
    </main>
  )
}
