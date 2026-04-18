# CLAUDE.md — Instructions for Claude / OpenCode

This file provides context for AI coding assistants working on this repository.

## Quick Context

Professional portfolio site. Vite + TypeScript. No frameworks. GitHub Pages deployment.

## What to Read First

- `AGENTS.md` — full project architecture and conventions
- `src/data/content.ts` — all content lives here
- `src/scripts/commands.ts` — terminal command system

## Common Tasks

### Adding a new terminal command
1. Edit `src/scripts/commands.ts`
2. Add a handler function to the `commands` object
3. Add aliases if needed at the bottom of the file

### Updating portfolio content
1. Edit `src/data/content.ts` — experience array and projects array
2. Terminal command output in `commands.ts` should mirror content data

### Adding a new section
1. Add HTML structure in `index.html`
2. Add data types/arrays in `src/data/content.ts`
3. Add render function in `src/scripts/render.ts`
4. Add styles in `src/styles/main.css`

## Do Not

- Add React, Vue, or any UI framework
- Change the color palette without being asked
- Remove the terminal section — it's the identity of the site
- Add npm dependencies without strong justification
