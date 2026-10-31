import assert from "node:assert/strict";
import { test } from "node:test";
import { toSlug, truncate } from "../src/strings.js";

test("slugifies titles", () => {
  assert.equal(toSlug("Hello, World!"), "hello-world");
});

test("truncates long strings", () => {
  assert.equal(truncate("abcdefgh", 5), "abcd…");
});

test("leaves short strings alone", () => {
  assert.equal(truncate("abc", 5), "abc");
});
