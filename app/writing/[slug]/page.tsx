import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageFrame } from "@/components/layout/page-frame";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPostSlugs, getPostBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <PageFrame>
      <div>
        <p className="type-chrome text-muted-ink">
          {post.frontmatter.date} &middot; {post.readingTimeMinutes} min read
        </p>
        <h1 className="mt-2 font-display text-display-sm leading-none text-ink sm:text-display-md">
          {post.frontmatter.title}
        </h1>
        <p className="mt-4 text-body text-muted-ink">{post.frontmatter.description}</p>
      </div>

      <div className="flex flex-col gap-y-4">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </PageFrame>
  );
}
