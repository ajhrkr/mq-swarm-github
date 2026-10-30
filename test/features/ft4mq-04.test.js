import assert from "node:assert/strict";
import { test } from "node:test";
import { scale04 } from "../../src/features/ft4mq-04.js";

test("scale04 multiplies by 4", () => {
  assert.equal(scale04(2), 8);
});
