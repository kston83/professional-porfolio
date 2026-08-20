import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageFrameProps = {
  /**
   * `offset` (default) — the editorial column: held left of centre with a
   *   generous right margin, on a 12-column grid rather than a centred
   *   max-width box. Good fit for post/article bodies.
   * `wide` — near-full measure for dense grid pages (e.g. a project index).
   */
  variant?: "offset" | "wide";
  children: ReactNode;
};

/**
 * The page frame every route composes: it owns the horizontal measure and
 * the vertical rhythm (page inset + spacing between page-level blocks), so
 * pages never declare their own container classes. The outer wrapper takes
 * the shared `.shell-measure` (left-pinned, capped for ultra-wide monitors
 * — never centred); the content column inside it is grid-offset.
 */
export function PageFrame({ variant = "offset", children }: PageFrameProps) {
  return (
    <div className="shell-measure">
      <div className="grid grid-cols-12">
        <div
          className={cn(
            "flex flex-col gap-y-10 py-10 sm:gap-y-14 sm:py-16",
            variant === "offset"
              ? "col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-2"
              : "col-span-12",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
