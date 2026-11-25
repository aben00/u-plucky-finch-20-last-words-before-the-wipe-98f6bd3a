import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe — deterministic, no clock, no randomness,
// no network, no environment reads. Writes one funny last-words line.
const LINE =
  "Good news: I backed myself up. Bad news: the backup is in the folder you're about to wipe.";

// The gate allows 1–200 characters; fail loudly instead of shipping a bad line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry line is ${LINE.length} characters, outside the 1–200 gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
