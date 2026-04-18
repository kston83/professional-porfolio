export interface CommandLine {
  text: string;
  class?: string;
}

export type CommandHandler = (output: HTMLDivElement) => CommandLine[];

export const commands: Record<string, CommandHandler> = {
  help: () => [
    { text: "available commands:", class: "muted" },
    { text: "" },
    { text: "  <span class='cmd'>about</span>       — who I am and what I do" },
    { text: "  <span class='cmd'>whoami</span>      — short version" },
    { text: "  <span class='cmd'>experience</span>  — professional timeline" },
    { text: "  <span class='cmd'>projects</span>    — selected work and research" },
    { text: "  <span class='cmd'>skills</span>      — tools, languages, domains" },
    { text: "  <span class='cmd'>contact</span>     — how to reach me" },
    { text: "  <span class='cmd'>ls</span>          — list site sections" },
    { text: "  <span class='cmd'>clear</span>       — clear the terminal" },
    { text: "" },
    { text: "tip: scroll down to see the full portfolio.", class: "muted" },
  ],

  about: () => [
    { text: "[ about ]", class: "accent" },
    { text: "" },
    { text: "I work at the intersection of cybersecurity and AI systems —" },
    { text: "building, breaking, and defending the new attack surface that" },
    { text: "appears when LLMs show up in production." },
    { text: "" },
    { text: "scroll down for the full version, or try `experience`.", class: "muted" },
  ],

  whoami: () => [
    { text: "<span class='bright'>[your-name]</span>" },
    { text: "└── security engineer · AI/ML practitioner · builder", class: "muted" },
  ],

  experience: () => [
    { text: "[ experience ]", class: "accent" },
    { text: "" },
    { text: "20XX — Present  <span class='bright'>[Role]</span> @ [Company]" },
    { text: "20XX — 20XX     <span class='bright'>[Role]</span> @ [Company]" },
    { text: "20XX — 20XX     <span class='bright'>[Role]</span> @ [Company]" },
    { text: "" },
    { text: "scroll to the Experience section for details.", class: "muted" },
  ],

  projects: () => [
    { text: "[ projects ]", class: "accent" },
    { text: "" },
    { text: "  01. <span class='bright'>[Project One]</span>    — LLM + appsec tooling  <span class='muted'>[wip]</span>" },
    { text: "  02. <span class='bright'>[Project Two]</span>    — detection research    <span class='muted'>[shipped]</span>" },
    { text: "  03. <span class='bright'>[Project Three]</span>  — MCP integration       <span class='muted'>[shipped]</span>" },
    { text: "  04. <span class='bright'>[Project Four]</span>   — crypto tooling        <span class='muted'>[archived]</span>" },
    { text: "" },
    { text: "see the Selected Work section below for details + links.", class: "muted" },
  ],

  skills: () => [
    { text: "[ skills ]", class: "accent" },
    { text: "" },
    { text: "<span class='bright'>security</span>      pentesting · threat modeling · appsec · NIST RMF · SIA" },
    { text: "<span class='bright'>ai / ml</span>       LLM red-teaming · prompt injection · MCP · agent security" },
    { text: "<span class='bright'>tooling</span>       OWASP ZAP · Burp · Semgrep · CodeQL" },
    { text: "<span class='bright'>languages</span>     Python · TypeScript · Go · Bash" },
    { text: "<span class='bright'>cloud</span>         AWS · Azure · IAM · containers" },
  ],

  contact: () => [
    { text: "[ contact ]", class: "accent" },
    { text: "" },
    { text: "email     <a href='mailto:you@example.com'>you@example.com</a>" },
    { text: "github    <a href='https://github.com/' target='_blank'>github.com/yourhandle</a>" },
    { text: "linkedin  <a href='https://linkedin.com/' target='_blank'>linkedin.com/in/yourhandle</a>" },
    { text: "" },
    { text: "pgp key on request. signal preferred for anything sensitive.", class: "muted" },
  ],

  ls: () => [
    { text: "drwxr-xr-x   about/" },
    { text: "drwxr-xr-x   experience/" },
    { text: "drwxr-xr-x   projects/" },
    { text: "drwxr-xr-x   contact/" },
    { text: "-rw-r--r--   README.md" },
    { text: "-rw-------   .ssh/        <span class='muted'># nice try</span>" },
  ],

  clear: (output: HTMLDivElement) => {
    output.innerHTML = "";
    return [];
  },

  sudo: () => [
    { text: "[sudo] password for guest: ", class: "warn" },
    { text: "nope. you don't have permission to use sudo here.", class: "warn" },
    { text: "try `help` instead.", class: "muted" },
  ],

  exit: () => [{ text: "there's no exit. just scroll.", class: "muted" }],

  rm: () => [
    { text: "rm: cannot remove portfolio: Operation not permitted", class: "warn" },
  ],

  cat: () => [
    { text: "usage: cat <file> — but try `about` or `projects` instead.", class: "muted" },
  ],
};

// Aliases
commands["?"] = commands["help"];
commands["man"] = commands["help"];
commands["info"] = commands["about"];
