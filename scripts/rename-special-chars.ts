/**
 * rename-special-chars.ts  (one-time migration)
 *
 * Renames raw icon folders (and their SVG files) whose sanitized name differs
 * from the raw folder name, i.e. names containing commas, +, &, ', spaces, etc.
 *
 * Also removes stale generated output for those icons so `pnpm generate`
 * regenerates them with the correct names.
 *
 * Run with:
 *   pnpm exec tsx scripts/rename-special-chars.ts
 */

import * as fs from "fs";
import * as path from "path";
import { sanitizeName } from "./utils/sanitize-name";

const RAW_DIR = path.join(__dirname, "../raw");
const REACT_SRC = path.join(__dirname, "../packages/react/src");
const LIT_SRC = path.join(__dirname, "../packages/lit/src");

let renamed = 0;
let skipped = 0;

function processDir(dir: string, relativeParts: string[]): void {
  const entries = fs.readdirSync(dir);
  const hasSVGs = entries.some((e) => e.endsWith(".svg"));

  if (hasSVGs && relativeParts.length >= 1) {
    // This is a leaf icon folder
    const rawName = relativeParts[relativeParts.length - 1];
    const safeName = sanitizeName(rawName);

    if (safeName !== rawName) {
      const parentDir = path.dirname(dir);
      const newDir = path.join(parentDir, safeName);

      // 1. Rename SVG files inside (raw name may contain specials too)
      for (const svgFile of entries.filter((e) => e.endsWith(".svg"))) {
        // filename pattern: <name>_<size>.svg
        // The stem may equal rawName or a sanitized variant already
        const dotIdx = svgFile.lastIndexOf("_");
        const stem = svgFile.slice(0, dotIdx);
        const suffix = svgFile.slice(dotIdx); // e.g. _16.svg
        const newStem = sanitizeName(stem);
        const newFile = newStem + suffix;
        if (newFile !== svgFile) {
          fs.renameSync(path.join(dir, svgFile), path.join(dir, newFile));
          console.log(`  ✓ SVG:    ${svgFile}  →  ${newFile}`);
        }
      }

      // 2. Rename the folder itself
      fs.renameSync(dir, newDir);
      console.log(`  ✓ Folder: ${rawName}/  →  ${safeName}/`);
      renamed++;

      // 3. Remove stale generated output in react/src and lit/src
      const category = relativeParts.slice(0, -1).join("/");
      for (const srcRoot of [REACT_SRC, LIT_SRC]) {
        // Old sanitized name might differ — try both old raw name and old safe name
        for (const candidate of [rawName, safeName]) {
          const staleDir = path.join(srcRoot, category, candidate);
          if (fs.existsSync(staleDir)) {
            fs.rmSync(staleDir, { recursive: true, force: true });
            console.log(
              `  ✓ Removed stale: ${path.relative(path.join(__dirname, ".."), staleDir)}`,
            );
          }
        }
      }
    } else {
      skipped++;
    }
    return; // don't descend into SVG-containing folders
  }

  // Recurse into subdirectories (skip the folder if it was just renamed above)
  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    try {
      if (fs.statSync(entryPath).isDirectory()) {
        processDir(entryPath, [...relativeParts, entry]);
      }
    } catch {
      // ignore entries that were removed/renamed
    }
  }
}

console.log("Scanning raw/ for icon folders with special characters…\n");
processDir(RAW_DIR, []);
console.log(`\n✓ Done — renamed: ${renamed}, already clean: ${skipped}`);
console.log("Run `pnpm generate` to regenerate components.");
