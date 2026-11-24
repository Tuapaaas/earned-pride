// One Line of Earned Pride — make.fun bounty entry.
// The program writes a single line of text to /output/entry.txt:
// a quiet, earned moment of pride for a real person in a concrete scene.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "After three months of studying on the night bus home, my father finally read his first English sentence aloud — slowly, then again, because it was his.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
