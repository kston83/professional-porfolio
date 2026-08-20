"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isRouteActive, ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

/**
 * The nav's client island — the only part of the shell that needs the
 * current pathname, so the only client component in it. The header,
 * wordmark, page frame, and footer around it stay server-rendered.
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-x-5 overflow-x-auto py-0.5 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {ROUTES.map((route) => {
        const active = isRouteActive(pathname, route.href);
        return (
          <li key={route.href} className="shrink-0">
            <Link
              href={route.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "type-chrome transition-colors duration-150",
                "hover:text-ink",
                "focus-visible:text-ink focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2",
                active
                  ? "font-medium text-ink underline decoration-1 underline-offset-4"
                  : "text-muted-ink",
              )}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
