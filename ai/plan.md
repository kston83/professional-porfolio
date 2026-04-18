# Implementation Plan: Professional Portfolio

## Overview
This plan outlines the implementation phases for the professional portfolio site. Each phase builds on the previous, moving from scaffold to polished, deployed site.

## Phase 1: Project Scaffold ✅
**Goal**: Set up the development environment and project structure.

### 1.1 Build Tooling ✅
- [x] Initialize Vite + TypeScript project
- [x] Configure `tsconfig.json` with strict mode
- [x] Configure `vite.config.ts` with GitHub Pages `base` path
- [x] Set up npm scripts (dev, build, typecheck, lint, preview)

### 1.2 Project Structure ✅
- [x] Create `src/` directory structure (data, scripts, styles)
- [x] Create `index.html` as Vite entry point
- [x] Create `src/main.ts` as app entry
- [x] Decompose portfolio.html into TypeScript modules

### 1.3 AI Development Support ✅
- [x] Create `AGENTS.md` with comprehensive project conventions
- [x] Create `ai/` directory with PRD, plan, and prompts
- [x] Create `ai/docs/` with feature documentation template
- [x] Set up `.agents/skills/` for OpenCode skill definitions

### 1.4 CI/CD ✅
- [x] Create `.github/workflows/deploy.yml` for GitHub Pages
- [x] Configure deployment on merge to `main`

## Phase 2: Terminal Hero
**Goal**: Build the interactive terminal experience.

### 2.1 Core Terminal
- [ ] Boot sequence animation with typing effect
- [ ] ASCII art banner display
- [ ] Interactive command input with prompt
- [ ] Command dispatch system
- [ ] Command history (up/down arrows)
- [ ] Tab completion

### 2.2 Commands
- [ ] Implement all standard commands (help, about, whoami, experience, projects, skills, contact, ls, clear)
- [ ] Implement easter egg commands (sudo, exit, rm, cat)
- [ ] Connect command output to content data

### 2.3 Terminal Polish
- [ ] CRT visual effects (scan lines, vignette, flicker)
- [ ] Real-time clock
- [ ] Scroll hint indicator
- [ ] Ctrl+L and Ctrl+C shortcuts

## Phase 3: Editorial Content
**Goal**: Build the scrollable content sections below the terminal.

### 3.1 Data Layer
- [ ] Define TypeScript interfaces for all content types
- [ ] Populate content.ts with placeholder data
- [ ] Create render functions that generate HTML from data

### 3.2 Sections
- [ ] About section with lede, details, and stats grid
- [ ] Experience section with timeline layout
- [ ] Projects section with card grid and status indicators
- [ ] Contact section with terminal-style dark theme

### 3.3 Transition
- [ ] Terminal-to-editorial gradient divider
- [ ] Smooth scroll behavior

## Phase 4: Visual Polish
**Goal**: Refine design, animations, and responsive behavior.

### 4.1 Typography & Color
- [ ] Verify font loading and fallbacks
- [ ] Audit color palette consistency
- [ ] Test selection colors and scrollbar styling

### 4.2 Responsive
- [ ] Test and fix 768px breakpoint
- [ ] Test and fix 480px breakpoint
- [ ] Verify ASCII art scaling on mobile
- [ ] Test terminal input on mobile keyboards

### 4.3 Interactions
- [ ] Project card hover effects
- [ ] Experience item hover effects
- [ ] Scroll hint animation
- [ ] Smooth transitions throughout

## Phase 5: Content & Deploy
**Goal**: Fill in real content and deploy.

### 5.1 Content
- [ ] Replace all `[...]` placeholders with real content
- [ ] Update ASCII art with final name
- [ ] Add real project links
- [ ] Add real contact information
- [ ] Write about/lede copy

### 5.2 Final Checks
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Verify GitHub Pages deployment
- [ ] Check all links work
- [ ] Verify Open Graph / social sharing metadata

---

## Implementation Guidelines

### Development Flow
1. Create feature branch from `main`
2. Implement feature following AGENTS.md conventions
3. Run `npm run typecheck` and `npm run build`
4. Document feature in `ai/docs/` if non-trivial
5. Open PR, merge to `main` for auto-deploy

### Definition of Done
- TypeScript compiles with no errors
- Production build succeeds
- Responsive at all breakpoints
- Content renders correctly from data
- Terminal remains interactive
- AGENTS.md updated if new patterns introduced
