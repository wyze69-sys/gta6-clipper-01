// Entry program for the make.fun bounty "gta6-clipper-01".
//
// The real entry is the YouTube clip itself; this program has one small job:
// hand the clip's address to the grader by copying VIDEO.json from the
// repository directory into the output directory.
//
// Paths come from the environment so the same file works in the grader's
// container (where the defaults /bot and /output apply) and in a local test
// run (where MAKEFUN_BOT_DIR=. and MAKEFUN_OUTPUT_DIR=out are passed in).

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const sourceFile = join(sourceDir, 'VIDEO.json');
const targetFile = join(targetDir, 'VIDEO.json');

if (!existsSync(sourceFile)) {
  console.error(`error: VIDEO.json not found in ${sourceDir}`);
  process.exit(1);
}

// Read and re-write (rather than a raw copy) so a malformed VIDEO.json fails
// here with a clear message instead of confusing the gate later.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourceFile, 'utf8'));
} catch (err) {
  console.error(`error: VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('error: VIDEO.json must be an object with a string "url" field');
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetFile, JSON.stringify(parsed) + '\n');
