// One-star review of an everyday essential, written by main.ts to /output/entry.txt.
// Pure Node stdlib, no network, no external tools. Deterministic: same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The review: deadpan, one star, about sleep — the essential nobody can opt out of.
// Grievance is true and daily (eight hours in, still tired); the turn lands in the
// last few words ("somehow I keep rebooking"), like a reviewer trapped in a subscription.
// Second pass: cut the redundant "a night, every night", and sharpen the middle into
// a trio of missing remedies (refund / complaint form / manager) so the complaint
// reads like a real filing, not a summary.
const REVIEW =
  "Sleep \u2605\u2606\u2606\u2606\u2606 \u2014 eight hours every single night, and I still wake up tired. No refund, no complaint form, no manager \u2014 and somehow I keep rebooking.";

// The gate reads the absolute path /output/entry.txt: 1-160 UTF-8 characters, one line.
// An absolute path is used on purpose so the run never depends on the working directory
// (the grader runs `node main.ts` from its own cwd).
const OUTPUT_PATH = resolve("/output", "entry.txt");

function main(): void {
  const line = REVIEW.trim();
  if (line.length === 0 || line.length > 160) {
    throw new Error(`review must be 1-160 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
}

main();
