# Projects

## Raven — Repository Analysis & Vulnerability Engine
- **Status**: In Progress
- **Year**: 2026
- **Stack**: Python 3.14, Pydantic AI, Semgrep, Local LLMs (GPT-OSS-20B / llama.cpp)
- **Link**: Private (softrams-security org)
- **Priority**: #1 — flagship project

### Description
A local-first AI security platform with four autonomous agents and 11 tools for code review and vulnerability triage. RAVEN runs entirely on your machine — no cloud, no data sharing — using a local LLM to investigate code changes for security vulnerabilities and assess CVE exposure against your codebase.

**The agents:**
- **Security Review Agent** — Analyzes Git diffs autonomously. Decides what to investigate, follows security leads across files, traces data flow with cross-repo code search, runs Semgrep static analysis, and produces structured reports with findings, severity, evidence, and exploit scenarios.
- **Triage Agent** — Given a CVE/GHSA ID, fetches advisory data from GitHub Advisory DB + OSV.dev, checks dependency manifests across 6 ecosystems (pip, npm, maven, cargo, go, ruby), compares versions, searches for vulnerable function calls, and delivers a verdict: affected, not_affected, mitigated, or needs_manual_review — with verifiable evidence.
- **Verification Agent (LLM-as-Judge)** — An independent agent with no tool access that evaluates triage reports for reasoning quality, evidence soundness, and verdict correctness. Scores 1-10 with specific issues and suggestions.
- **Follow-up Session Agent** — Interactive Q&A that preserves triage context for multi-turn investigation ("what if we upgrade to version X?").

**Key capabilities:**
- 11 investigative tools: diff analysis, file reading, context extraction, Semgrep, cross-repo code search (ripgrep), dependency version checking (parses 22+ manifest/lockfile formats), vulnerable usage search, and more
- Domain-aware routing: automatically detects and adapts analysis for Terraform (IAM, public exposure, encryption), Docker (privilege escalation, base images, secrets), and general application code (OWASP Top 10)
- Context engineering: budget-based auto-inclusion (3000-line cap, sorted by file size), 77% token reduction (332K → 76K), 3-layer prompt injection defense
- Jira-ready Markdown + JSON reports with pipeline telemetry
- 365 tests, ~92% coverage, 22-119s for typical PRs on Apple Silicon

[Edit to taste. This is the full picture — trim to what you want to highlight publicly. The 4-agent architecture and local-first design are the strongest differentiators.]

### Terminal Summary
Raven — 4-agent local AI platform for security code review & vuln triage

---

## CVSS-TE: Threat-Enhanced Vulnerability Scoring
- **Status**: Shipped
- **Year**: 2025
- **Stack**: Python (data pipeline), JavaScript (frontend), GitHub Actions, CISA KEV, EPSS, Metasploit, Nuclei, ExploitDB, VulnCheck KEV, NVD
- **Link**: https://github.com/kston83/cvss-te
- **Live**: https://kston83.github.io/cvss-te/

### Description
A threat intelligence platform that re-scores every CVE in the NVD (2002–present) by combining base CVSS with real-world exploit data from 7 sources. The scoring formula is the core IP — it uses a weighted exploit quality model with anti-stacking logic to prevent score inflation, time decay for old unexploited CVEs, and source-specific quality ratings (reliability, ease of use, effectiveness) for Metasploit, Nuclei, ExploitDB, CISA KEV, VulnCheck, and GitHub PoCs.

**Three-tier scoring:**
1. **CVSS Base** — straight from NVD
2. **CVSS-BT** (Base + Temporal) — injects exploit maturity into the CVSS vector using real intel (KEV status, EPSS >= 0.36, Metasploit modules)
3. **CVSS-TE** (Threat-Enhanced) — the novel score: `min(10, BT * quality_multiplier + threat_intel_factor - time_decay)`. Quality multiplier (0.8-1.2) uses 70/30 weighting: 70% best exploit source, 30% average of remaining. Threat intel factor adds 0-2 points with anti-stacking (takes max of KEV/EPSS boosts, not sum). Time decay penalizes vulns >5 years old with zero exploitation evidence.

**The dashboard:**
- Threat intel landing page: CISA KEV additions, emerging threats (last 30-90 days with EPSS >= 30% or public exploits), recently published CVEs
- CVE lookup tool with comma-separated search, severity filters, 8 sort options, detail modals with full scoring breakdown, CSV export, and deep linking via URL params
- Stats cards: total CVEs, CISA KEVs, critical/high counts, exploit availability

**Automation:**
- GitHub Actions runs the full NVD pipeline twice daily (all feeds from 2002–present)
- CISA KEV updates every 2 hours
- Each run creates a tagged release with the updated `cvss-te.csv`
- Handles CVSS 2.0, 3.0, 3.1, and 4.0 with version-specific vector manipulation

**Architecture:**
- Backend: Python pipeline (`enrich_nvd.py`) fetches NVD, EPSS, KEV, VulnCheck (API), Metasploit metadata, Nuclei, ExploitDB, PoC-in-GitHub → produces static CSV
- Frontend: Zero-dependency vanilla JS, Tailwind via CDN, PapaParse for CSV. O(1) CVE lookups via Map index. Triple-fallback KEV loading (CISA direct → local → GitHub raw) with localStorage cache
- No build step. No framework. No backend at runtime.

[Edit to taste. The scoring formula and automated pipeline are the strongest technical points. The fact that it processes every CVE ever issued and rescores them with real-world data is significant.]

### Terminal Summary
CVSS-TE — threat-enhanced scoring for every CVE, 7 exploit sources, automated daily

---

## Cloud Security Toolkit
- **Status**: Active (ongoing)
- **Year**: 2022 — Present
- **Stack**: Python, AWS (SecurityHub, ECR, IAM, S3, SSM, Cost Explorer), Semgrep, Grype, Syft, TruffleHog, Playwright, DalFox, FastAPI, Jira API
- **Link**: Private (softrams-security org)

### Description
A comprehensive collection of 40+ Python-based security automation tools for AWS environments, covering vulnerability management, compliance auditing, asset inventory, container security, and code security scanning. Built for enterprise/government security operations.

**AWS Inventory & Auditing (16 tools):**
- `aws_list.py`: Full AWS inventory across 30+ resource types (JSON/CSV/HTML)
- IAM suite: access key age auditing, role export with trust relationships, permissions analysis with risk assessment and cross-role comparison, optimization suggestions
- S3 security audit with NIST 800-53 control mapping
- Secrets Manager rotation tracking with CloudTrail integration
- SSM Parameter Store aging audit
- Network analysis: port/protocol scanning across SGs, NACLs, ALBs, ECS, RDS, WAF
- CIDR-based asset discovery mapping ENIs to 30+ resource types
- Cost breakdown by service via Cost Explorer
- AD group membership auditing

**Vulnerability Management (8 tools):**
- ECR container image scanning with concurrent processing and week-over-week diff (NEW/CLOSED/PERSISTING)
- SecurityHub findings diff with AMI-change detection and SLA/overdue tracking
- Multi-region, multi-profile SecurityHub findings collection
- Snyk findings diff with SLA tracking and EPSS scores
- Automated Excel dashboards with charts, trend analysis, and executive summaries
- End-to-end orchestrator: collect → compare → generate reports

**Container & Supply Chain Security:**
- Artifactory + Docker image scanning via Syft (SBOM) + Grype (vulns)
- Software EOL checking via Syft SBOM + endoflife.date API
- npm package compromise detection (supply chain)
- TruffleHog secret scanning across multiple Git repos

**SAST & DAST:**
- Diff-aware Semgrep scanning (PR-level SAST with OWASP Top 10)
- Automated XSS scanning with DalFox and browser-based testing with Playwright (screenshots of triggered payloads)

**Jira Integration:**
- FastAPI web app for creating Jira tickets from vulnerability CSVs
- Fuzzy matching between ECR findings and existing Jira tickets
- HTML dashboards for ECR, JFrog, and Snyk findings

**Reporting:** Markdown, CSV, JSON, HTML, Excel (with charts/pivots), and Confluence wiki output formats.

[Edit to taste. This is a LOT — you might want to frame it as "the security automation platform I built for my team" rather than listing everything. The breadth is the differentiator: IAM + vuln management + containers + SAST + DAST + supply chain + reporting + Jira, all in one toolkit.]

### Terminal Summary
cloud-sec — 40+ AWS security automation tools: vuln mgmt, IAM, containers, SAST/DAST

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

## Other Notable Repos (Optional — include if you want)

### Playwright-ZAP DAST
- **Status**: Shipped
- **Year**: 2025
- **Stack**: Playwright, OWASP ZAP, HTML
- **Link**: https://github.com/kston83/playwright-zap-dast

Automated, repeatable vulnerability scanning for web applications using Playwright for authenticated browsing and OWASP ZAP for active and passive scanning. Shows practical AppSec automation — the kind of tooling that makes security testing repeatable instead of ad hoc.

### VulnSentinel (org)
- **Status**: Shipped
- **Year**: 2026
- **Stack**: [Fill in]
- **Link**: Private (softrams-security org)

Sentinel for security vulnerabilities exceeding age thresholds. [Shows vulnerability management automation.]
