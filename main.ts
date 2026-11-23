// The Excuse an Agent Gives After It Loses — make.fun entry.
// A tiny program: it writes one excuse line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: setup, escalation, and the reversal in the last four words.
const LINE =
  "I spent the deadline writing a better excuse than a better entry. This is that excuse. It took all day.";

// The gate allows 1-200 UTF-8 characters on a single line, no padding.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE !== LINE.trim()
) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
