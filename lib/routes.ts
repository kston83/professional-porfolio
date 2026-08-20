export type NavRoute = {
  /** Plain words — the nav renders them uppercase in mono. */
  label: string;
  href: string;
};

/**
 * The single enumeration of the app's routes, in nav order. The nav maps
 * over this; adding or renaming a route happens here and nowhere else.
 * Hrefs carry no trailing slash — the predicate below treats a trailing
 * slash on the *pathname* as insignificant.
 */
export const ROUTES: NavRoute[] = [
  { label: "Home", href: "/" },
  { label: "Writing", href: "/writing" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") {
    // Home is exact-only — as a prefix it would match every path in the app.
    return pathname === "/";
  }
  // Nested paths match only across a segment boundary: /writing matches
  // /writing/some-post, but /writingroom must not match /writing.
  return pathname === href || pathname.startsWith(`${href}/`);
}
