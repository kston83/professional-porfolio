import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { NavLinks } from "./nav-links";

/**
 * Sticky top bar, server-rendered except for the NavLinks island.
 *
 * Two quiet rows: the Fraunces wordmark (restrained — each page's own
 * headline is the display moment, not the chrome) and the mono link row.
 * Separation from scrolled content is a single hairline rule; no shadow,
 * no blur. On phones the link row breaks out of the gutter so it scrolls
 * edge to edge.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="shell-measure">
        <div className="pt-4 pb-2">
          <Link
            href="/"
            className="font-display text-body text-ink decoration-1 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {SITE_NAME}
          </Link>
        </div>
        <nav aria-label="Primary" className="-mx-4 px-4 pb-3 sm:mx-0 sm:px-0">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
