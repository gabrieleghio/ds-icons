import * as fs from "fs";
import * as path from "path";
import { sanitizeName } from "./utils/sanitize-name";

const DEFAULT_RAW_DIR = path.join(__dirname, "../raw");
const DEFAULT_REACT_OUTPUT = path.join(
  __dirname,
  "../packages/react/src/index.ts",
);
const DEFAULT_LIT_OUTPUT = path.join(__dirname, "../packages/lit/src/index.ts");

export interface SVGFile {
  category: string;
  name: string;
  size: string;
}

function getSVGFiles(rawDir: string): SVGFile[] {
  const files: SVGFile[] = [];

  function scan(dir: string, parts: string[]): void {
    const entries = fs.readdirSync(dir);
    const svgFiles = entries.filter((f) => f.endsWith(".svg"));

    if (svgFiles.length > 0 && parts.length >= 2) {
      const name = sanitizeName(parts[parts.length - 1]);
      const category = parts.slice(0, -1).join("/");
      for (const svgFile of svgFiles) {
        const match = svgFile.match(/^(.+?)_(\d+)\.svg$/);
        if (match) {
          files.push({
            category,
            name,
            size: match[2],
          });
        }
      }
    }

    for (const entry of entries) {
      const entryPath = path.join(dir, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        scan(entryPath, [...parts, entry]);
      }
    }
  }

  scan(rawDir, []);
  return files.sort((a, b) => (a.name + a.size).localeCompare(b.name + b.size));
}

/**
 * Deduplicate SVGFile list by symbol name (name+size).
 * When two entries share the same symbol, the one with the deeper category
 * path is preferred (e.g. "brands/Costa/CostaRecycled" wins over "brands/CostaRecycled").
 * Emits a console warning for every duplicate found so the raw folder structure
 * can be cleaned up.
 */
function deduplicateFiles(files: SVGFile[]): SVGFile[] {
  const seen = new Map<string, SVGFile>();
  const duplicates: string[] = [];

  for (const f of files) {
    const key = `${f.name}${f.size}`;
    if (seen.has(key)) {
      const existing = seen.get(f.name + f.size)!;
      // Prefer the entry with the deeper (more specific) category path
      const winner =
        f.category.split("/").length >= existing.category.split("/").length
          ? f
          : existing;
      duplicates.push(
        `  Duplicate symbol "${key}": "${existing.category}/${existing.name}" vs "${f.category}/${f.name}" → keeping "${winner.category}/${winner.name}"`,
      );
      seen.set(key, winner);
    } else {
      seen.set(key, f);
    }
  }

  if (duplicates.length > 0) {
    console.warn(
      `\n⚠ Found ${duplicates.length} duplicate symbol(s) — check your raw/ folder structure:\n${duplicates.join("\n")}\n`,
    );
  }

  return Array.from(seen.values()).sort((a, b) =>
    (a.name + a.size).localeCompare(b.name + b.size),
  );
}

export function generateReactIndex(files: SVGFile[]): string {
  const unique = deduplicateFiles(files);
  const exports = unique
    .map(
      (f) =>
        `export { ${f.name}${f.size} } from './${f.category}/${f.name}/${f.name}${f.size}';`,
    )
    .join("\n");

  return exports;
}

export function generateLitIndex(files: SVGFile[]): string {
  const unique = deduplicateFiles(files);
  const exports = unique
    .map(
      (f) =>
        `export { render${f.name}${f.size} } from './${f.category}/${f.name}/render${f.name}${f.size}';`,
    )
    .join("\n");

  return exports;
}

export function main(
  rawDir: string = DEFAULT_RAW_DIR,
  reactOutput: string = DEFAULT_REACT_OUTPUT,
  litOutput: string = DEFAULT_LIT_OUTPUT,
) {
  const svgFiles = getSVGFiles(rawDir);

  // React index
  const reactIndex = generateReactIndex(svgFiles);
  fs.writeFileSync(reactOutput, reactIndex, "utf-8");
  console.log(`✓ React index.ts updated`);

  // Lit index
  const litIndex = generateLitIndex(svgFiles);
  fs.writeFileSync(litOutput, litIndex, "utf-8");
  console.log(`✓ Lit index.ts updated`);

  console.log(
    `\n✓ Indexes generated for ${svgFiles.length} icon×size combinations`,
  );
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith("generate-index.ts")) {
  main();
}
