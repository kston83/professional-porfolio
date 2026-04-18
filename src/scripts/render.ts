import { experience, projects } from "../data/content";
import type { Experience, Project } from "../data/content";

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ] ?? c)
  );
}

function renderExperienceItem(item: Experience): string {
  return `
    <article class="experience-item">
      <div class="exp-period">${escapeHtml(item.period)}</div>
      <div>
        <h3 class="exp-role">${escapeHtml(item.role)}</h3>
        <div class="exp-company">${escapeHtml(item.company)}</div>
        <p class="exp-desc">${escapeHtml(item.description)}</p>
      </div>
      <div class="exp-tags">
        ${item.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderProjectCard(item: Project): string {
  return `
    <article class="project-card">
      <div class="project-meta">
        <span>${escapeHtml(item.year)}</span>
        <span class="project-status ${item.status}">${escapeHtml(item.statusLabel)}</span>
      </div>
      <h3 class="project-title">${escapeHtml(item.title)}</h3>
      <p class="project-desc">${escapeHtml(item.description)}</p>
      <div class="project-stack">
        ${item.stack.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
      </div>
      <a href="${escapeHtml(item.linkUrl)}" class="project-link">${escapeHtml(item.linkText)}</a>
    </article>
  `;
}

export function renderExperience(): void {
  const el = document.getElementById("experience-list");
  if (el) {
    el.innerHTML = experience.map(renderExperienceItem).join("");
  }
}

export function renderProjects(): void {
  const el = document.getElementById("projects-grid");
  if (el) {
    el.innerHTML = projects.map(renderProjectCard).join("");
  }
}
