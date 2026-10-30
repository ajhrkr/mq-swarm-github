import assert from "node:assert/strict";
import { test } from "node:test";
import { scale02 } from "../../src/features/ft2mq-02.js";

test("scale02 multiplies by 2", () => {
  assert.equal(scale02(2), 4);
});
