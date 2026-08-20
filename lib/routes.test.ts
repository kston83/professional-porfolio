import { describe, expect, it } from "vitest";
import { isRouteActive } from "./routes";

describe("isRouteActive", () => {
  it("matches home only on an exact path", () => {
    expect(isRouteActive("/", "/")).toBe(true);
    expect(isRouteActive("/writing", "/")).toBe(false);
  });

  it("matches a route on itself and its nested paths", () => {
    expect(isRouteActive("/writing", "/writing")).toBe(true);
    expect(isRouteActive("/writing/hello-world", "/writing")).toBe(true);
  });

  it("does not match a route that merely shares a prefix", () => {
    expect(isRouteActive("/writingroom", "/writing")).toBe(false);
  });
});
