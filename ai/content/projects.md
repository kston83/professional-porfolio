# Projects

## Raven — Repository Analysis & Vulnerability Engine
- **Status**: In Progress
- **Year**: 2026
- **Stack**: Python 3.14, Pydantic AI, Semgrep, Local LLMs (llama.cpp)
- **Link**: Private (softrams-security org)
- **Priority**: #1 — flagship project

### Description
An autonomous AI agent that investigates code for security vulnerabilities. RAVEN combines Git diff analysis, Semgrep static analysis, and local LLM reasoning to generate comprehensive security reports — entirely locally with no cloud services. It autonomously decides what to investigate, follows security leads across files, traces data flow, and produces structured findings with severity ratings and actionable recommendations. Features domain-aware routing for Terraform, Docker, and application code, plus a vulnerability triage agent that assesses CVE/GHSA exposure against your codebase with evidence-based verdicts and Jira-ready reports.

[Edit to taste. Key highlights you might want to emphasize:]
- Runs 100% locally — privacy-first, no data leaves your machine
- Autonomous agent architecture — it decides what to investigate, not a fixed pipeline
- Domain-aware: adapts analysis for Terraform, Docker, and app code in the same PR
- Vulnerability triage: feed it a CVE and it tells you if your codebase is affected, with evidence
- Performance: 22-119s for typical PRs
- 190+ tests, full type safety with Pydantic AI
- LLM-as-judge verification for triage reports

### Terminal Summary
Raven — autonomous local AI agent for security code review

---

## CVSS-TE: Threat-Enhanced Vulnerability Scoring
- **Status**: Shipped
- **Year**: 2025
- **Stack**: JavaScript, CVSS, CISA KEV, EPSS, Metasploit, Nuclei
- **Link**: https://github.com/kston83/cvss-te
- **Live**: https://kston83.github.io/cvss-te/

### Description
Improves vulnerability prioritization by enhancing CVSS scores with real-world exploit intelligence. Combines data from CISA KEV, EPSS, Metasploit, ExploitDB, Nuclei, and GitHub PoCs to create actionable severity ratings that reflect actual threat levels — not just theoretical impact. Includes a threat intelligence dashboard showing CISA KEV additions, emerging threats, and recently published vulns, plus a CVE lookup tool. All client-side, no backend, no tracking.

[Edit to taste. Key highlights:]
- Reduces noise: downgrading high-base-score CVEs with no real-world exploits
- Elevates real threats: a CVSS 7.5 with weaponized exploits scores higher than a theoretical 9.1
- Pure client-side — privacy-focused, all processing local
- Supports CVSS 2.0, 3.0, 3.1, and 4.0
- Built on the original cvss-bt by t0sche

### Terminal Summary
CVSS-TE — threat-enhanced vulnerability scoring with live exploit intel

---

## Python Project Template
- **Status**: Shipped
- **Year**: 2026
- **Stack**: Python 3.14, uv, pytest, Ruff, mypy
- **Link**: https://github.com/kston83/python-template
- **Category**: Developer Tooling / Template

### Description
A production-ready Python project template optimized for AI-assisted development. Features Python 3.14 with strict typing, uv for fast dependency management, comprehensive TDD with pytest, and structured AI coding instructions (Copilot rules, modular rule files, example prompts). Adaptable for web apps, CLI tools, libraries, or script collections. This is the foundation that Raven and other projects are built on.

[Edit to taste. This one is about demonstrating tooling competence:]
- Shows deep familiarity with modern Python ecosystem
- AI-first dev workflow with comprehensive Copilot instructions
- Same template used to build Raven
- Or keep it brief: "My opinionated Python starter for new projects"

### Terminal Summary
python-template — modern Python 3.14 starter with AI dev support

---

## CloudSec
- **Status**: Archived
- **Year**: [Fill in]
- **Stack**: [Fill in — scripts are in the private softrams-security/cloud-sec repo]
- **Link**: Private (softrams-security org)

### Description
[Fill in — from the org repo description: "Repository to collect various scripts useful for security." Consider:]
- What cloud security problems did it address?
- AWS SecurityHub? (you have sec_automation_reporting for that)
- Any specific tools, scripts, or automations?
- Is this worth including, or would Playwright-ZAP DAST better fill this slot?

### Terminal Summary
cloudsec — [one-liner description]

---

## Other Notable Repos (Optional — include if you want)

### Playwright-ZAP DAST
- **Status**: Shipped
- **Year**: 2025
- **Stack**: Playwright, OWASP ZAP, HTML
- **Link**: https://github.com/kston83/playwright-zap-dast

Automated, repeatable vulnerability scanning for web applications using Playwright for authenticated browsing and OWASP ZAP for active and passive scanning. Shows practical AppSec automation — the kind of tooling that makes security testing repeatable instead of ad hoc.

### Pentesting Notes & Scripts
- **Status**: Ongoing
- **Year**: 2025+
- **Stack**: Python
- **Link**: https://github.com/kston83/pentesting

A living collection of offensive security tools and notes.

### VulnSentinel (org)
- **Status**: Shipped
- **Year**: 2026
- **Stack**: [Fill in]
- **Link**: Private (softrams-security org)

Sentinel for security vulnerabilities exceeding age thresholds.

[Include? Shows vulnerability management automation.]
