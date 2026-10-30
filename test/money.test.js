import assert from "node:assert/strict";
import { test } from "node:test";
import { addTax, formatMoney } from "../src/money.js";

test("formats whole dollars", () => {
  assert.equal(formatMoney(500), "$5.00");
});

test("formats negative amounts", () => {
  assert.equal(formatMoney(-1234), "-$12.34");
});

test("adds tax", () => {
  assert.equal(addTax(1000, 0.08), 1080);
});

// Fixed on main by the agentic-mq fix agent (PR #7).
test("formats thousands with a separator", () => {
  assert.equal(formatMoney(123456), "$1,234.56");
});
