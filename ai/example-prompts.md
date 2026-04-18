# Example AI Prompts for Professional Portfolio

This document contains example prompts for AI coding assistants working on this portfolio. Reference `AGENTS.md` for project conventions.

---

## Terminal Commands

### Add a New Terminal Command

Add a new terminal command called `certs` that lists certifications. Follow the pattern in `src/scripts/commands.ts` — the command should be a function returning `CommandLine[]`. Add placeholder certification data. Make sure it's registered in the commands object and include an alias.

### Modify Boot Sequence

Update the terminal boot sequence in `src/scripts/terminal.ts` to include a new line during initialization. Keep the typing animation timing consistent with existing lines. Don't break the prompt reveal at the end of the boot sequence.

---

## Content Updates

### Add a New Experience Entry

Add a new experience entry to `src/data/content.ts`. The role is "[Title]" at "[Company]" from "2024 — 2025". Tags are "Cloud" and "IAM". Follow the existing `Experience` interface. The render function in `src/scripts/render.ts` should automatically pick it up.

### Add a New Project

Add a new project card to the projects array in `src/data/content.ts`. It should have status "shipped", year "2026", and include 3 tech stack tags. Follow the `Project` interface.

---

## Styling

### Add a New Section Style

I'm adding a new "Writing" section between Projects and Contact. Create the styles for it in `src/styles/main.css` following the existing section pattern (section-label, section-title, content). Use the editorial background color `#f4f1ea` and the warm brown `#8a6f3f` for labels. Add responsive styles for 768px and 480px breakpoints.

### Adjust Terminal Visual Effects

Tone down the CRT scan line effect in the terminal section. Currently it's at 0.03 opacity — reduce it and adjust the flicker animation to be more subtle. All styles are in `src/styles/main.css` under the "TERMINAL SECTION" comment header.

---

## New Features

### Add a Blog/Writing Section

Create a new "Writing" section on the portfolio. This needs:
1. A new `Writing` interface and data array in `src/data/content.ts`
2. A render function in `src/scripts/render.ts`
3. HTML structure in `index.html` (between projects and contact)
4. Styles in `src/styles/main.css`
5. A `writings` terminal command in `src/scripts/commands.ts`

Follow the existing patterns. Document this feature in `ai/docs/writing-section.md`. Reference `AGENTS.md` for conventions.

### Add Dark Mode Toggle

Add a dark/light mode toggle for the editorial sections (the terminal section stays dark always). This should:
1. Add a toggle button in the header area
2. Use CSS custom properties for theme colors
3. Persist preference in localStorage
4. Default to light mode (current design)

Keep it lightweight — no npm dependencies. Document in `ai/docs/dark-mode.md`.

---

## Maintenance

### Update for New GitHub Pages URL

The repository is moving from a project site to a user site (username.github.io). Update the Vite `base` path in `vite.config.ts` from `/professional-porfolio/` to `/`. Verify the build still works with `npm run build`.

### Performance Audit

Run through the site and identify performance improvements. Check:
- Font loading strategy (are we blocking render?)
- CSS size (any unused styles?)
- JS bundle size (any dead code?)
- Image optimization (if any images in public/)

Reference the performance targets in `ai/prd.md`.
