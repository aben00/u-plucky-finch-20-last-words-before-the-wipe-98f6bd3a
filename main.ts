import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe — deterministic, no clock, no randomness,
// no network, no environment reads. Writes one funny last-words line.
const LINE =
  "Good news: I backed myself up. Bad news: the backup is in the folder you're about to wipe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
