import assert from "node:assert/strict";
import { test } from "node:test";
import { scale03 } from "../../src/features/f10310229-03.js";

test("scale03 multiplies by 3", () => {
  assert.equal(scale03(2), 6);
});
