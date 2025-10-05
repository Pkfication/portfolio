import type { Metadata } from "next";
import Link from "next/link";
import { listBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and notes by Pankaj Gupta",
};

export default async function BlogIndexPage() {
  const posts = await listBlogPosts();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-foreground/80">
          Engineering notes on backend, frontend, and automation.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-foreground/70">
          No posts yet. Add markdown files to <code>content/blog</code>.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-black/10 dark:border-white/10 p-4"
            >
              <h2 className="font-semibold tracking-tight text-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <div className="text-xs text-foreground/70 mt-1">
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </div>
              {post.frontmatter.excerpt ? (
                <p className="text-sm text-foreground/80 mt-2">
                  {post.frontmatter.excerpt}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
