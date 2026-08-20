# Personal site

Blog + portfolio. Next.js 16 App Router + TypeScript + Tailwind v4 + shadcn/ui.
Design system ported from a fantasy-football league dashboard built earlier
this year — see `AGENTS.md` for the shell/design conventions it carries.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build — also the only full typecheck of app code
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
npm test         # vitest run
```

Verification is `npm run build` + `npm run lint` + `npm test`, same as CI.

## Content

Posts are MDX files with frontmatter under `content/writing/*.mdx`, read via
`lib/writing.ts`. Add a post, add its frontmatter, it shows up in `/writing`
automatically — no route or index file to touch.

## Workflow

`main` is protected — branch first, open a PR, merge from there. A
`PreToolUse` hook (`.claude/hooks/block-main-writes.sh`) blocks commits and
pushes to `main` locally; `ALLOW_MAIN_WRITE=1` overrides it if you genuinely
need to. CI (`.github/workflows/ci.yml`) runs lint, test, and build on every
PR and push to `main`.
