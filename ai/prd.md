# Product Requirements Document (PRD)

## Document Information
- **Project**: Professional Portfolio
- **Last Updated**: April 2026
- **Version**: 1.0
- **Status**: Active

---

## 1. Overview

### 1.1 Product Description
A personal professional portfolio site for a cybersecurity & AI practitioner. The site combines a terminal-style interactive hero section with editorial-style content sections to present professional experience, projects, and contact information in a distinctive, memorable way.

### 1.2 Problem Statement
Standard portfolio templates are generic and forgettable. Cybersecurity and AI professionals need a portfolio that reflects their technical identity — something that feels like their world while remaining accessible and professional for recruiters, collaborators, and peers.

### 1.3 Product Vision
A single-page site that:
- Opens with an interactive terminal emulator (the personality of the site)
- Transitions into clean editorial content sections
- Serves as a living portfolio hosted on GitHub Pages
- Is fast, lightweight, and requires zero backend infrastructure
- Feels uniquely "hacker" without sacrificing readability or professionalism

### 1.4 Target Audience
- **Primary**: Hiring managers, recruiters, and technical leads evaluating the portfolio owner
- **Secondary**: Peers, collaborators, and open-source community members
- **Tertiary**: The owner themselves — the site should be easy to update and maintain

### 1.5 Success Metrics
- Page loads in < 2 seconds on 3G
- Lighthouse performance score > 90
- Terminal is interactive and responsive on mobile
- All content is easily editable from a single file

---

## 2. Core Features & Requirements

### 2.1 Terminal Hero Section
**Purpose**: First impression. An interactive terminal that displays identity, allows exploration, and sets the tone.

**Requirements**:
- ASCII art banner with name
- Boot sequence animation
- Interactive command input with history (up/down arrows)
- Tab completion for commands
- Commands: `help`, `about`, `whoami`, `experience`, `projects`, `skills`, `contact`, `ls`, `clear`
- Easter egg commands: `sudo`, `exit`, `rm`, `cat`
- Real-time clock in the terminal header
- CRT-style visual effects (scan lines, vignette, flicker)

### 2.2 Editorial Content Sections
**Purpose**: Present professional information in a polished, readable format.

**Sections**:
1. **About** — Lede paragraph + details + stats grid
2. **Experience** — Timeline of roles with tags
3. **Selected Work** — Project cards with status indicators
4. **Contact** — Links with terminal-style aesthetics

### 2.3 Data Architecture
**Purpose**: Single source of truth for all content.

**Requirements**:
- All content defined in `src/data/content.ts`
- TypeScript interfaces for all data types
- Content drives both terminal command output and editorial sections
- Placeholder content with `[...]` brackets for easy identification

### 2.4 Design System
**Purpose**: Consistent visual identity across terminal and editorial sections.

**Requirements**:
- Defined color palette (see AGENTS.md)
- Three font families: IBM Plex Serif (headings), IBM Plex Sans (body), JetBrains Mono (code/terminal)
- Smooth transition between terminal dark theme and editorial light theme
- Responsive at 768px and 480px breakpoints

---

## 3. Technical Requirements

### 3.1 Performance
- No JavaScript frameworks — vanilla TypeScript only
- Total bundle size < 50KB gzipped
- Fonts loaded via Google Fonts with `preconnect`
- No external API calls at runtime

### 3.2 Hosting
- GitHub Pages via GitHub Actions
- Vite build with `base` path for project site URL
- Static output only — no server-side requirements

### 3.3 Browser Support
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for terminal features on mobile

### 3.4 Accessibility
- Semantic HTML structure
- Keyboard-navigable terminal input
- Sufficient color contrast for editorial sections
- Screen reader considerations for terminal output

---

## 4. Non-Functional Requirements

### 4.1 Maintainability
- Content changes require editing only `src/data/content.ts`
- Adding a terminal command requires only `src/scripts/commands.ts`
- All styles in one file with clear section headers
- TypeScript strict mode enforced

### 4.2 Developer Experience
- `npm run dev` for instant local development
- `npm run build` catches type errors before deploy
- AGENTS.md provides full context for AI-assisted development
- Feature documentation in `ai/docs/` for complex additions

---

## 5. Future Considerations
- Blog/writing section
- Dark/light mode toggle for editorial sections
- Project detail pages (if needed)
- Analytics integration (privacy-respecting)
- Print stylesheet for resume-style output
- Additional terminal commands and interactivity
