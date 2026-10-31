import assert from "node:assert/strict";
import { test } from "node:test";
import { scale01 } from "../../src/features/f10310212-01.js";

test("scale01 multiplies by 1", () => {
  assert.equal(scale01(2), 2);
});
