import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { SITE_DESCRIPTION } from "@/lib/site";

export default function HomePage() {
  return (
    <PageFrame>
      <div>
        <h1 className="font-display text-display-sm leading-none text-ink sm:text-display-md">
          Hi, I&apos;m — TODO.
        </h1>
        <p className="mt-4 type-chrome text-muted-ink">{SITE_DESCRIPTION}</p>
      </div>

      <div className="flex gap-x-6">
        <Link
          href="/writing"
          className="type-chrome text-ink underline decoration-1 underline-offset-4 hover:text-accent"
        >
          Read the writing →
        </Link>
        <Link
          href="/projects"
          className="type-chrome text-ink underline decoration-1 underline-offset-4 hover:text-accent"
        >
          See the projects →
        </Link>
      </div>
    </PageFrame>
  );
}
