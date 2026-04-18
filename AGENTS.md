# AGENTS.md — Professional Portfolio

## Project Overview

This is a personal professional portfolio site for a cybersecurity & AI practitioner. It is a single-page site with a terminal-style hero section and editorial-style content sections below. Hosted on GitHub Pages via Vite build.

## Tech Stack

- **Build**: Vite 6 + TypeScript
- **Styling**: Plain CSS (no framework — intentional for performance and simplicity)
- **Hosting**: GitHub Pages (static, built via `npm run build` -> `dist/`)
- **Fonts**: IBM Plex Serif, IBM Plex Sans, JetBrains Mono (Google Fonts)

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
```

## Key Conventions

- **Content changes**: Edit `src/data/content.ts` — this is the single source of truth for experience, projects, and terminal command output.
- **Terminal commands**: Add new commands in `src/scripts/commands.ts`. Each command is a function returning `CommandLine[]`.
- **Styles**: All in `src/styles/main.css`. The design uses a specific color palette — do not change colors without explicit request.
- **No frameworks**: This project intentionally avoids React/Vue/etc. Keep it vanilla TS.

## Color Palette

- Terminal green: `#a8d48b`, bright: `#c4e4a8`
- Terminal bg: `#0d0e0c`
- Gold accent: `#e6b865`
- Warm brown: `#8a6f3f`
- Editorial bg: `#f4f1ea`
- Warning/accent: `#d97757`

## Development Commands

```bash
npm run dev        # Start dev server on :3000
npm run build      # Type-check + production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript check only
npm run lint       # ESLint
```

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages automatically.

## Guidelines for AI Agents

1. Always run `npm run typecheck` after making TypeScript changes.
2. Preserve the editorial/terminal dual-nature of the design.
3. Keep the terminal interactive and fun — it's the personality of the site.
4. Content in placeholder brackets `[...]` is meant to be filled in by the owner.
5. Test responsive behavior — the site must work on mobile.
6. Do not add heavy dependencies. This is a static portfolio.
