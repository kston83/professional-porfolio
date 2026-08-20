<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Personal site

Blog + portfolio. Design system and shell ported from a fantasy-football
league dashboard (`futboldespecial`) — the parts that don't depend on that
project's Sleeper API data layer.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build — also the only full typecheck of app code
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
npm test         # vitest run
```

Verification is `npm run build` + `npm run lint` + `npm test`, same as CI
(`.github/workflows/ci.yml`).

## Conventions

- **Colour tokens: use the semantic names** — `bg-paper`, `text-ink`,
  `text-muted-ink`, `text-accent`. `app/globals.css` also maps those values
  onto shadcn's `--background`/`--foreground`/`--muted-foreground` so
  vendored `components/ui/*` inherit the palette; those aliases are for
  shadcn's benefit, not for hand-written markup. Type sizes come from the
  named scale (`text-display-sm|md|lg`, `text-body`, `text-chrome`) — never
  an ad-hoc size. Tabular figures are set globally on `body`; don't
  re-apply per component.
- `components/ui/*` (shadcn primitives) are vendored — treat as generated,
  don't hand-edit unless the change should apply to every use of that
  primitive. Compose from there in `components/` for anything site-specific.
- `components/layout/*` (`SiteNav`, `SiteFooter`, `PageFrame`, `NavLinks`)
  is the shared shell every route composes — pages fetch/render inside
  `PageFrame`, they don't declare their own container classes.
- Warm-light, editorial/minimal aesthetic. No gradients, no glassmorphism,
  no uniform card grids, no centred max-width container (`.shell-measure`
  is left-pinned, capped only for ultra-wide viewports).
- Tests are colocated with the module under test — `lib/foo.test.ts` next
  to `lib/foo.ts` — per `vitest.config.mts`'s `include` globs.

## Content model

Posts live as MDX files with frontmatter under `content/writing/*.mdx`,
read through `lib/writing.ts` (`getAllPosts`, `getPostBySlug`). Rendering
goes through `next-mdx-remote/rsc`, mapped to styled elements in
`components/mdx-components.tsx` — so post bodies never carry their own
HTML/class markup, just Markdown. Add a file, fill in its frontmatter
(`title`, `description`, `date`, `tags`, optional `draft`), and it appears
in `/writing` automatically.

## Workflow

`main` is protected — branch first, open a PR, merge from there. A
`PreToolUse` hook (`.claude/hooks/block-main-writes.sh`, wired in
`.claude/settings.json`) blocks commits and pushes to `main` locally;
`ALLOW_MAIN_WRITE=1` overrides it if you genuinely need to.
