import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter } from "@/types";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

function readPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(WRITING_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTimeMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

/** All published posts (drafts excluded), newest first. */
export function getAllPosts(): Post[] {
  const slugs = fs
    .readdirSync(WRITING_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs
    .map(readPost)
    .filter((post) => !post.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  return readPost(slug);
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(WRITING_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
