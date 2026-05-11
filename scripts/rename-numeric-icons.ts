/**
 * rename-numeric-icons.ts  (one-time migration)
 *
 * Renames raw icon folders (and their SVG files) whose name starts with a digit,
 * prefixing them with "Icon":
 *   raw/generic/12MP/12MP_16.svg  →  raw/generic/Icon12MP/Icon12MP_16.svg
 *
 * Also removes stale generated output for those icons so `pnpm generate`
 * regenerates them with the correct names.
 */

import * as fs from "fs";
import * as path from "path";

const RAW_DIR = path.join(__dirname, "../raw");
const REACT_SRC = path.join(__dirname, "../packages/react/src");
const LIT_SRC = path.join(__dirname, "../packages/lit/src");

function processDir(dir: string, relativeParts: string[]): void {
  const entries = fs.readdirSync(dir);
  const hasSVGs = entries.some((e) => e.endsWith(".svg"));

  if (hasSVGs && relativeParts.length >= 1) {
    // This is a leaf icon folder — check if its name starts with a digit
    const name = relativeParts[relativeParts.length - 1];
    if (/^\d/.test(name)) {
      const newName = `Icon${name}`;
      const parentDir = path.dirname(dir);

      // 1. Rename SVG files inside
      for (const svgFile of entries.filter((e) => e.endsWith(".svg"))) {
        const newSvgFile = svgFile.startsWith(name)
          ? `Icon${svgFile}`
          : svgFile;
        fs.renameSync(path.join(dir, svgFile), path.join(dir, newSvgFile));
        console.log(`  ✓ SVG:    ${svgFile}  →  ${newSvgFile}`);
      }

      // 2. Rename the folder itself
      const newDir = path.join(parentDir, newName);
      fs.renameSync(dir, newDir);
      console.log(`  ✓ Folder: ${name}/  →  ${newName}/`);

      // 3. Remove stale generated output in react/src and lit/src
      const category = relativeParts.slice(0, -1).join("/");
      for (const srcRoot of [REACT_SRC, LIT_SRC]) {
        const staleDir = path.join(srcRoot, category, name);
        if (fs.existsSync(staleDir)) {
          fs.rmSync(staleDir, { recursive: true, force: true });
          console.log(
            `  ✓ Removed stale: ${path.relative(path.join(__dirname, ".."), staleDir)}`,
          );
        }
      }
    }
    return; // Don't descend into SVG-containing folders
  }

  // Recurse into subdirectories
  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    try {
      if (fs.statSync(entryPath).isDirectory()) {
        processDir(entryPath, [...relativeParts, entry]);
      }
    } catch {
      // ignore deleted dirs (renamed above)
    }
  }
}

console.log("Scanning raw/ for numeric-prefixed icon folders…\n");
processDir(RAW_DIR, []);
console.log("\n✓ Done. Run `pnpm generate` to regenerate components.");
