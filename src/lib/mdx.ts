import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

export type BlogFrontmatter = {
  title: string;
  date: string; // ISO string
  excerpt?: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  html: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export async function listBlogSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export async function readBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);
    const file = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(file);
    const processed = await remark()
      .use(gfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);
    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      html: String(processed),
    };
  } catch {
    return null;
  }
}

export async function listBlogPosts(): Promise<BlogPost[]> {
  const slugs = await listBlogSlugs();
  const posts = await Promise.all(slugs.map((s) => readBlogPost(s)));
  return posts
    .filter((p): p is BlogPost => Boolean(p))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
