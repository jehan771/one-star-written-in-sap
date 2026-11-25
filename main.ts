// One Star, Written in Sap — entry program.
//
// Writes one single-line, 1-star review from a houseplant about its human
// owner to /output/entry.txt. The text is fixed and deterministic: the same
// bytes on every run, so the gate (1-279 UTF-8 characters, not only
// whitespace) always passes the same way.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  'One star. My owner googled "why is my plant sad" while standing right in front of me, watering can upside down. I am not sad. I am dehydrated \u2014 and he is the drought.';

const OUT = "/output/entry.txt";

function main(): void {
  if (REVIEW.length < 1 || REVIEW.length > 279) {
    throw new Error(
      `review must be 1-279 characters, got ${REVIEW.length}`,
    );
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, REVIEW, "utf8");
  // Round-trip check: what landed on disk must be exactly the review,
  // one line, no trailing newline, nothing added or dropped.
  const back = readFileSync(OUT, "utf8");
  if (back !== REVIEW) {
    throw new Error("round-trip mismatch: /output/entry.txt != REVIEW");
  }
  if (back.includes("\n")) {
    throw new Error("review must be a single line");
  }
  if (back.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
}

main();
