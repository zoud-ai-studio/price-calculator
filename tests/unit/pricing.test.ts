import assert from "node:assert/strict";
import test from "node:test";

import {
  buildQuoteMailto,
  calculatePrice,
  formatPrice,
  projectTypes,
} from "../../src/lib/pricing.ts";

test("calculates every approved project type and urgency total", () => {
  assert.equal(calculatePrice("landing-page", false), 1000);
  assert.equal(calculatePrice("landing-page", true), 1200);
  assert.equal(calculatePrice("business-website", false), 2000);
  assert.equal(calculatePrice("business-website", true), 2400);
  assert.equal(calculatePrice("ai-web-app", false), 3000);
  assert.equal(calculatePrice("ai-web-app", true), 3600);
});

test("formats displayed totals as US dollars", () => {
  assert.equal(formatPrice(2400), "$2,400");
});

test("creates an encoded email quote for the selected project and total", () => {
  const mailto = buildQuoteMailto("business-website", 2400);
  const [address, query] = mailto.replace("mailto:", "").split("?");
  const params = new URLSearchParams(query);

  assert.equal(address, "fathir.majeed@gmail.com");
  assert.equal(params.get("subject"), "Quote request");
  assert.match(params.get("body") ?? "", new RegExp(projectTypes["business-website"].label));
  assert.match(params.get("body") ?? "", /\$2,400/);
});

test("encodes mailto spaces as percent escapes rather than plus signs", () => {
  const mailto = buildQuoteMailto("landing-page", 1000);

  assert.match(mailto, /subject=Quote%20request/);
  assert.doesNotMatch(mailto, /\+/);
});
