import { setToggle, isEnabled, deleteToggle, exportToggles } from "../src/main";
import { describe, expect, it } from "@jest/globals";

describe("Toggle spec", function () {
  beforeEach(async function () {});

  afterEach(async function () {});

  // it("Should be able to set toggle", async function () {
  //   expect(await setToggle("com.example.test", true)).toBe(true);
  // });

  // it("Should be able to retrieve toggle value", async function () {
  //   expect(await isEnabled("com.example.test")).toBe(true);
  // });

  // it("Should NOT be able to retrieve toggle value", async function () {
  //   expect(await isEnabled("com.example.does.not.exist")).toBe(false);
  // });

  // it("Should be able to delete toggle", async function () {
  //   expect(await deleteToggle("com.example.test")).toBe(true);
  // });

  it("Should be able to import toggles by file", async function () {
    expect(await exportToggles("tests/resources/sample_toggles.json")).toBe(true);
  });
});
