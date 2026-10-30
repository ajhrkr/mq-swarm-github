import assert from "node:assert/strict";
import { test } from "node:test";
import { titleSlug } from "../src/title-t2mq.js";

test("builds a permalink slug", () => {
  assert.equal(titleSlug("Hello, World!", 42), "hello-world-42");
});
