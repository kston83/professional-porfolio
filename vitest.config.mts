import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolves the `@/` alias from tsconfig.json — Vitest does not read
  // tsconfig `paths` by default, and tests import `@/lib/...`.
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    // Convention: colocate test files next to the module under test —
    // lib/<module>.test.ts. Add further globs when tests land outside lib/.
    include: ["lib/**/*.test.ts", "components/**/*.test.ts"],
  },
});
