import { SITE_NAME } from "@/lib/site";

/** Quiet mono chrome under a single hairline rule. */
export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="shell-measure flex items-baseline justify-between gap-x-6 py-6">
        <p className="type-chrome text-muted-ink">{SITE_NAME}</p>
        <p className="type-chrome text-muted-ink">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
