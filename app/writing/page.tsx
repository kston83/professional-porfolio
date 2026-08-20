import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { getAllPosts } from "@/lib/writing";

export default function WritingIndexPage() {
  const posts = getAllPosts();

  return (
    <PageFrame>
      <div>
        <h1 className="font-display text-display-sm leading-none text-ink sm:text-display-md">
          Writing
        </h1>
        <p className="mt-4 type-chrome text-muted-ink">
          Security, AI, and the things I build.
        </p>
      </div>

      <ul className="flex flex-col gap-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-rule pt-6">
            <Link
              href={`/writing/${post.slug}`}
              className="group flex flex-col gap-y-2"
            >
              <h2 className="font-display text-xl text-ink group-hover:underline">
                {post.frontmatter.title}
              </h2>
              <p className="text-body text-muted-ink">
                {post.frontmatter.description}
              </p>
              <p className="type-chrome text-muted-ink">
                {post.frontmatter.date} &middot; {post.readingTimeMinutes} min
                read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PageFrame>
  );
}
