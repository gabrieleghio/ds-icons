import * as fs from "fs";
import * as path from "path";
import { optimize } from "svgo";
import { sanitizeName } from "./utils/sanitize-name";

const DEFAULT_RAW_DIR = path.join(__dirname, "../raw");
const DEFAULT_OUTPUT_DIR = path.join(__dirname, "../packages/core/dist/svg");

export interface SVGFile {
  name: string;
  size: string;
  fullPath: string;
}

function getSVGFiles(rawDir: string): SVGFile[] {
  const files: SVGFile[] = [];

  function scan(dir: string): void {
    const entries = fs.readdirSync(dir);
    for (const svgFile of entries.filter((f) => f.endsWith(".svg"))) {
      const match = svgFile.match(/^(.+?)_(\d+)\.svg$/);
      if (match) {
        files.push({
          name: sanitizeName(match[1]),
          size: match[2],
          fullPath: path.join(dir, svgFile),
        });
      }
    }
    for (const entry of entries) {
      const entryPath = path.join(dir, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        scan(entryPath);
      }
    }
  }

  scan(rawDir);
  return files;
}

export function optimizeSVG(svgContent: string): string {
  const result = optimize(svgContent, {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      } as any,
    ],
  });

  return result.data;
}

export function main(
  rawDir: string = DEFAULT_RAW_DIR,
  outputDir: string = DEFAULT_OUTPUT_DIR,
) {
  const svgFiles = getSVGFiles(rawDir);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const svgFile of svgFiles) {
    try {
      const svgContent = fs.readFileSync(svgFile.fullPath, "utf-8");
      const optimizedContent = optimizeSVG(svgContent);
      const outputFile = path.join(
        outputDir,
        `${svgFile.name}_${svgFile.size}.svg`,
      );
      fs.writeFileSync(outputFile, optimizedContent, "utf-8");
      console.log(`✓ Optimized ${svgFile.name}_${svgFile.size}`);
    } catch (error) {
      console.error(
        `✗ Failed to optimize ${svgFile.name}_${svgFile.size}:`,
        error,
      );
      process.exit(1);
    }
  }

  console.log(`\n✓ Static SVGs generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith("generate-static-svg.ts")) {
  main();
}
