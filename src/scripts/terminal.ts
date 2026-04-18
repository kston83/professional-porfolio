import { commands } from "./commands";

const asciiArt = String.raw`
    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                     │
    │      ██╗  ██╗██████╗ ██╗███████╗   ██╗   ██╗███████╗                │
    │      ██║ ██╔╝██╔══██╗██║██╔════╝   ██║   ██║██╔════╝                │
    │      █████╔╝ ██████╔╝██║███████╗   ██║   ██║███████╗                │
    │      ██╔═██╗ ██╔══██╗██║╚════██║   ╚██╗ ██╔╝╚════██║                │
    │      ██║  ██╗██║  ██║██║███████║    ╚████╔╝ ███████║                │
    │      ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝     ╚═══╝  ╚══════╝                │
    │                                                                     │
    │           ╱◢◣╲    security · intelligence · systems    ╱◢◣╲         │
    │          ╱ ◆ ╲   ·──·──·──·──·──·──·──·──·──·──·──·   ╱ ◆ ╲        │
    │         ╱──┼──╲   0x43 79 62 65 72 5F 41 49 5F 4F 50  ╱──┼──╲       │
    │        ╱ ╱ │ ╲ ╲                                     ╱ ╱ │ ╲ ╲      │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘
`;

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] ?? c)
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function initTerminal(): void {
  const output = document.getElementById("output") as HTMLDivElement;
  const input = document.getElementById("input") as HTMLInputElement;
  const prompt = document.getElementById("prompt") as HTMLDivElement;
  const tagline = document.getElementById("tagline") as HTMLDivElement;
  const ascii = document.getElementById("ascii") as HTMLPreElement;

  if (!output || !input || !prompt || !tagline || !ascii) return;

  ascii.textContent = asciiArt;

  const history: string[] = [];
  let historyIdx = -1;

  function appendLine(html: string, cls = ""): void {
    const line = document.createElement("div");
    line.className = "line " + cls;
    line.innerHTML = html;
    output.appendChild(line);
  }

  function renderCommand(cmd: string): void {
    appendLine(
      `<span class='prompt-prefix'><span class='path'>~/portfolio</span> <span class='arrow'>❯</span></span> <span class='bright'>${escapeHtml(cmd)}</span>`
    );

    const base = cmd.trim().toLowerCase().split(/\s+/)[0];
    if (!base) return;

    const handler = commands[base];
    if (handler) {
      const lines = handler(output);
      lines.forEach((l) => appendLine(l.text, l.class ?? ""));
    } else {
      appendLine(
        `command not found: <span class='warn'>${escapeHtml(base)}</span>`,
        "warn"
      );
      appendLine(
        `type <span class='cmd'>help</span> for available commands.`,
        "muted"
      );
    }
    appendLine("");
    output.scrollTop = output.scrollHeight;
  }

  async function typeLine(text: string, _cls = "", speed = 18): Promise<void> {
    const line = document.createElement("div");
    line.className = "line " + _cls;
    output.appendChild(line);
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      line.innerHTML += ch === " " ? "&nbsp;" : escapeHtml(ch);
      await sleep(speed);
    }
    line.innerHTML = text;
  }

  async function boot(): Promise<void> {
    await sleep(400);
    tagline.textContent = "> initializing session...";
    await sleep(600);

    await typeLine("<span class='muted'>booting portfolio.v1 ...</span>", "", 12);
    await sleep(150);
    await typeLine("<span class='muted'>loading identity......... ok</span>", "", 8);
    await sleep(80);
    await typeLine("<span class='muted'>loading projects......... ok</span>", "", 8);
    await sleep(80);
    await typeLine("<span class='muted'>checking integrity....... ok</span>", "", 8);
    await sleep(200);
    appendLine("");
    await typeLine(
      "welcome. i'm <span class='bright'>[your name]</span> — security + AI.",
      "",
      22
    );
    await sleep(150);
    await typeLine(
      "type <span class='cmd'>help</span> to see what's here, or scroll to read the long version.",
      "",
      14
    );
    appendLine("");

    prompt.style.display = "flex";
    input.focus();
  }

  // Input handling
  input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const val = input.value;
      if (val.trim()) {
        history.unshift(val);
        historyIdx = -1;
      }
      renderCommand(val);
      input.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length && historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx];
      } else {
        historyIdx = -1;
        input.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const cur = input.value.toLowerCase();
      const matches = Object.keys(commands).filter((c) => c.startsWith(cur) && cur);
      if (matches.length === 1) {
        input.value = matches[0];
      } else if (matches.length > 1) {
        renderCommand(input.value);
        appendLine(matches.join("   "), "muted");
        appendLine("");
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      output.innerHTML = "";
    } else if (e.ctrlKey && e.key === "c") {
      appendLine(
        `<span class='prompt-prefix'><span class='path'>~/portfolio</span> <span class='arrow'>❯</span></span> <span class='bright'>${escapeHtml(input.value)}</span>^C`
      );
      input.value = "";
    }
  });

  document.getElementById("terminal")?.addEventListener("click", (e: Event) => {
    if ((e.target as HTMLElement).tagName !== "A") input.focus();
  });

  boot();
}
