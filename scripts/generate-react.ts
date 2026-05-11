import * as fs from "fs";
import * as path from "path";
import { sanitizeName } from "./utils/sanitize-name";

const DEFAULT_RAW_DIR = path.join(__dirname, "../raw");
const DEFAULT_OUTPUT_DIR = path.join(__dirname, "../packages/react/src");

export interface SVGFile {
  category: string;
  name: string;
  size: string;
  fullPath: string;
}

export interface ParsedSVG {
  viewBox: string;
  width: string;
  height: string;
  inner: string;
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
            fullPath: path.join(dir, svgFile),
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
  return files;
}

export function parseSVG(svgContent: string): ParsedSVG {
  const svgTagMatch = svgContent.match(/<svg([^>]*)>(.*?)<\/svg>/s);
  if (!svgTagMatch) {
    throw new Error("Could not parse SVG structure");
  }

  const attrs = svgTagMatch[1];
  const inner = svgTagMatch[2];

  const viewBoxMatch = attrs.match(/viewBox="([^"]*)"/);
  const widthMatch = attrs.match(/width="([^"]*)"/);
  const heightMatch = attrs.match(/height="([^"]*)"/);

  if (!viewBoxMatch || !widthMatch || !heightMatch) {
    throw new Error("Could not parse SVG structure");
  }

  return {
    viewBox: viewBoxMatch[1],
    width: widthMatch[1],
    height: heightMatch[1],
    inner: inner.trim(),
  };
}

export function generateReactComponent(
  svgFile: SVGFile,
  svg: ParsedSVG,
): string {
  const componentName = `${svgFile.name}${svgFile.size}`;

  // Remove hardcoded fill="currentColor" from child elements so parent fill applies
  // Also replace xlink:href with xlinkHref for React JSX compatibility
  const cleanedInner = svg.inner
    .replace(/\s+fill="currentColor"/g, "")
    .replace(/xlink:href=/g, "xlinkHref=");

  // category may be "generic" (1 segment) or "brands/Oakley" (2 segments), etc.
  // The component file sits one level below category, so depth = segments + 1
  const depth = svgFile.category.split("/").length + 1;
  const typesPath = "../".repeat(depth) + "types";

  return `import React from 'react';
import type { IconProps } from '${typesPath}';

export const ${componentName} = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="${svg.viewBox}" width={${svg.width}} height={${svg.height}}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    ${cleanedInner}
  </svg>
);
`;
}

function writeFileWithRetry(
  filePath: string,
  content: string,
  retries = 4,
  delayMs = 300,
): void {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // On Windows, ERROR_USER_MAPPED_FILE (-4094) occurs when the TS language
      // server or Defender has the file memory-mapped. Unlinking first forces
      // the OS to mark the old inode for deletion so we can create a fresh one.
      if (fs.existsSync(filePath)) {
        try { fs.unlinkSync(filePath); } catch {}
      }
      fs.writeFileSync(filePath, content, "utf-8");
      return;
    } catch (err: any) {
      if (attempt === retries) throw err;
      // Busy-wait: guaranteed to work in any Node.js context
      const end = Date.now() + delayMs;
      while (Date.now() < end) { /* wait */ }
    }
  }
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
      const iconDir = path.join(outputDir, svgFile.category, svgFile.name);
      if (!fs.existsSync(iconDir)) {
        fs.mkdirSync(iconDir, { recursive: true });
      }

      const svgContent = fs.readFileSync(svgFile.fullPath, "utf-8");
      const parsed = parseSVG(svgContent);
      const componentCode = generateReactComponent(svgFile, parsed);
      const outputFile = path.join(
        iconDir,
        `${svgFile.name}${svgFile.size}.tsx`,
      );
      writeFileWithRetry(outputFile, componentCode);
      console.log(
        `✓ Generated ${svgFile.category}/${svgFile.name}/${svgFile.name}${svgFile.size}`,
      );
    } catch (error) {
      console.error(
        `✗ Failed to generate ${svgFile.category}/${svgFile.name}/${svgFile.name}${svgFile.size}:`,
        error,
      );
      process.exit(1);
    }
  }

  console.log(`\n✓ React components generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith("generate-react.ts")) {
  main();
}
