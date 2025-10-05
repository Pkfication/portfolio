import type { Metadata } from "next";
import { listBlogSlugs, readBlogPost } from "@/lib/mdx";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await listBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await readBlogPost(params.slug);
  return {
    title: post?.frontmatter.title ?? params.slug,
    description: post?.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await readBlogPost(params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article className="markdown">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {post.frontmatter.title}
      </h1>
      <div className="text-xs text-foreground/70 mt-1">
        {new Date(post.frontmatter.date).toLocaleDateString()}
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
