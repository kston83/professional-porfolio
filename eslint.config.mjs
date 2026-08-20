import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  //
  // The build-output patterns below are deliberately depth-independent (`**/`
  // prefixed). Agent worktrees live under `.claude/worktrees/` *inside* the
  // repo, and each one that has been built carries its own `node_modules/`
  // and `.next/`. Root-anchored patterns match only at the config root, so
  // without the `**/` prefix every worktree's compiled output gets linted as
  // source. `next-env.d.ts` stays root-anchored on purpose: it is a single
  // generated file that only ever exists at the project root.
  globalIgnores([
    // Default ignores of eslint-config-next, made depth-independent:
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/node_modules/**",
    // Agent worktrees are harness artifacts: a full second copy of the repo.
    // Linting them duplicates every finding and is never what we want.
    ".claude/worktrees/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
