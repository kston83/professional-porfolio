import "./styles/main.css";
import { initTerminal } from "./scripts/terminal";
import { initClock } from "./scripts/clock";
import { renderExperience, renderProjects } from "./scripts/render";

// Render data-driven sections
renderExperience();
renderProjects();

// Initialize interactive terminal
initClock();
initTerminal();
