import type { MDXComponents } from "mdx/types";

/**
 * Maps raw MDX output to styled elements matching the site's editorial
 * type system — Fraunces for headings, Instrument Sans body copy, IBM
 * Plex Mono for code. Keeps post content free of any HTML/class authoring.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 font-display text-2xl leading-tight text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-display text-xl leading-tight text-ink"
      {...props}
    />
  ),
  p: (props) => <p className="text-body leading-relaxed text-ink" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-1 underline-offset-4 hover:text-ink"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="ml-5 flex list-disc flex-col gap-y-2 text-body text-ink"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="ml-5 flex list-decimal flex-col gap-y-2 text-body text-ink"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-rule pl-4 text-body text-muted-ink italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-plate px-1 py-0.5 font-mono text-chrome text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="overflow-x-auto rounded-md bg-plate p-4 font-mono text-chrome text-ink"
      {...props}
    />
  ),
  hr: () => <hr className="border-rule" />,
};
