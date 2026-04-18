# AGENTS.md — Professional Portfolio

## Project Overview

This is a personal professional portfolio site for a cybersecurity & AI practitioner. It is a single-page site with a terminal-style hero section and editorial-style content sections below. Hosted on GitHub Pages via Vite build.

Reference `ai/prd.md` for product requirements and `ai/plan.md` for implementation phases.

## Quick Reference

### Common Patterns & Structure
- All portfolio content lives in `src/data/content.ts` — this is the **single source of truth**.
- Terminal commands are defined in `src/scripts/commands.ts` as functions returning `CommandLine[]`.
- All styles live in `src/styles/main.css`. The design uses a specific color palette (see below).
- HTML structure is in `index.html` (Vite entry point).
- Document features and changes in `ai/docs/{featureName}.md`.

### Common Issues & Checks
- Run `npm run typecheck` after any TypeScript changes.
- Run `npm run build` to verify production build before committing.
- Test responsive behavior — the site must work on mobile (768px and 480px breakpoints).
- Content in placeholder brackets `[...]` is meant to be filled in by the owner.
- Ensure the terminal prompt remains interactive after any changes to `terminal.ts`.

---

## Tech Stack

- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite 6
- **Styling**: Plain CSS (no framework — intentional for performance and simplicity)
- **Hosting**: GitHub Pages (static, built via `npm run build` → `dist/`)
- **Fonts**: IBM Plex Serif, IBM Plex Sans, JetBrains Mono (Google Fonts)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

### What This Project Does NOT Use
- No React, Vue, Svelte, or any UI framework — intentionally vanilla TypeScript
- No CSS framework (Tailwind, Bootstrap, etc.)
- No server-side rendering or API calls
- No heavy npm dependencies

### Key Configuration Files
- `package.json` — dependencies and scripts
- `tsconfig.json` — TypeScript configuration (strict mode)
- `vite.config.ts` — Vite build configuration (includes `base` path for GitHub Pages)

---

## Architecture

```
index.html              — Root HTML shell, Vite entry point
src/
  main.ts               — App entry: imports styles, initializes modules
  vite-env.d.ts         — Vite type declarations
  data/
    content.ts          — All portfolio content (experience, projects). SINGLE SOURCE OF TRUTH.
  scripts/
    terminal.ts         — Terminal UI: boot sequence, input handling, ASCII art
    commands.ts         — Terminal command definitions and handlers
    clock.ts            — Real-time clock for terminal header
    render.ts           — Renders experience/project sections from data
  styles/
    main.css            — All styles (terminal, editorial, responsive)
public/                 — Static assets (favicons, images, etc.)
ai/
  prd.md                — Product requirements document
  plan.md               — Implementation plan with phases
  example-prompts.md    — Example AI prompts for common tasks
  docs/                 — Feature documentation
    example-feature.md  — Template for documenting features
.github/
  workflows/
    deploy.yml          — GitHub Pages deployment
```

### Module Responsibilities
- **content.ts**: Data only. Types + arrays for experience, projects, and any future content sections. No rendering logic.
- **render.ts**: Takes data from `content.ts`, generates HTML, injects into DOM. No business logic.
- **terminal.ts**: Boot sequence animation, input handling, command dispatch. Owns the terminal UX.
- **commands.ts**: Pure command handlers. Each returns `CommandLine[]`. Easy to add new commands.
- **clock.ts**: Single-purpose: updates the clock element every second.
- **main.css**: All styles in one file. Organized by section with clear comment headers.

---

## TypeScript Patterns

### Rules
- **Type Hints**: Always define interfaces/types for data structures. Export them from the module that owns them.
- **Functions**: Keep functions small and focused. One function, one responsibility.
- **Exports**: Use named exports. Avoid default exports.
- **DOM Access**: Always null-check DOM element references (`if (!el) return`).
- **String Safety**: Use `escapeHtml()` for any user-provided or dynamic content rendered as HTML.
- **Async**: Use `async/await` for sequential animations. Use `Promise` for sleep/delay patterns.
- **No `any`**: Avoid `any` type. Use `unknown` if the type is genuinely unknown, then narrow it.
- **Immutability**: Prefer `const` over `let`. Use `readonly` on interface properties where appropriate.
- **Naming**: `camelCase` for functions/variables, `PascalCase` for types/interfaces, `UPPER_CASE` for constants.

### Import Guidelines
- Group imports: third-party first, then local modules.
- Use relative imports for local modules (`./` or `../`).
- Import types with `import type` when only used for type annotations.

---

## Code Quality

### Rules
- **TypeScript Strict**: `tsconfig.json` has `strict: true`. Do not weaken it.
- **No Unused Code**: `noUnusedLocals` and `noUnusedParameters` are enabled. Remove dead code.
- **Functions Under 50 Lines**: Extract complex logic into smaller functions.
- **No Magic Numbers**: Define constants with descriptive names.
- **Comments**: Write comments for "why", not "what". Code should be self-documenting.
- **DRY**: Extract common patterns (e.g., `escapeHtml` is shared, not duplicated).
- **Error Messages**: Write clear, actionable messages if adding error handling.
- **Build Must Pass**: `npm run build` (which runs `tsc && vite build`) must succeed before committing.

---

## Styling Patterns

### Color Palette
Do not change these colors without explicit request:

| Token | Value | Usage |
|-------|-------|-------|
| Terminal green | `#a8d48b` | Primary terminal text |
| Terminal bright | `#c4e4a8` | Highlighted terminal text, cursor |
| Terminal bg | `#0d0e0c` | Terminal background |
| Gold accent | `#e6b865` | Prompts, tagline, accents |
| Warm brown | `#8a6f3f` | Section labels, stats, tags |
| Editorial bg | `#f4f1ea` | Main content background |
| Warning/accent | `#d97757` | Warnings, project card hover |
| Muted green | `#6a8b5a` | Muted terminal text |

### Rules
- All styles go in `src/styles/main.css`. Do not create additional CSS files.
- Use the existing comment-header convention (`/* ---------- SECTION ---------- */`).
- Mobile breakpoints: `768px` (tablet), `480px` (phone).
- Use `clamp()` for responsive font sizes where appropriate.
- Transitions should use `cubic-bezier(0.19, 1, 0.22, 1)` for the smooth easing used throughout.
- No `!important` unless absolutely necessary.
- Prefer CSS custom properties if adding new shared values.

---

## Structure Rules

### Rules
- Place all TypeScript source in `src/`.
- Organize by concern: `data/` for content, `scripts/` for behavior, `styles/` for CSS.
- Static assets (images, favicons) go in `public/`.
- Document features and architecture decisions in `ai/docs/`.
- Keep `index.html` as a thin shell — logic goes in TypeScript modules.
- Tests (if added) should go in a `tests/` directory mirroring `src/` structure.

---

## Documentation Patterns

### Rules
- **Feature Docs**: Document new features in `ai/docs/{feature_name}.md` following `ai/docs/example-feature.md`.
- **Include**: Purpose, implementation details, data models, usage examples, and any architecture decisions.
- **Code Comments**: Sparingly, for complex logic or non-obvious decisions.
- **Keep Current**: Update documentation when code changes.
- **AGENTS.md**: Update this file if new patterns or conventions are introduced.

---

## Development Commands

```bash
npm run dev        # Start dev server on :3000
npm run build      # Type-check + production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript check only
npm run lint       # ESLint
```

---

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages automatically. The Vite `base` path is set to `/professional-porfolio/` for the project site URL.

---

## Guidelines for AI Agents

1. Always run `npm run typecheck` after making TypeScript changes.
2. Run `npm run build` to verify production build before suggesting commits.
3. Preserve the editorial/terminal dual-nature of the design.
4. Keep the terminal interactive and fun — it's the personality of the site.
5. Content in placeholder brackets `[...]` is meant to be filled in by the owner.
6. Test responsive behavior — the site must work on mobile.
7. Do not add heavy npm dependencies. This is a static portfolio.
8. Do not add UI frameworks (React, Vue, etc.).
9. Do not change the color palette without explicit request.
10. Reference `ai/prd.md` and `ai/plan.md` for project requirements and implementation phases.
11. Document new features in `ai/docs/` following the example template.
12. Update this AGENTS.md if new patterns or conventions are introduced.
