import * as fs from "fs";
import * as path from "path";
import { sanitizeName } from "./utils/sanitize-name";

const DEFAULT_RAW_DIR = path.join(__dirname, "../raw");
const DEFAULT_OUTPUT_DIR = path.join(__dirname, "../packages/lit/src");

export interface SVGFile {
  category: string;
  name: string;
  size: string;
  fullPath: string;
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

export function extractSVGContent(svgContent: string): {
  viewBox: string;
  width: string;
  height: string;
  inner: string;
} {
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

export function escapeLitTemplate(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

export function generateLitRenderFunction(
  svgFile: SVGFile,
  svgContent: string,
): string {
  const functionName = `render${svgFile.name}${svgFile.size}`;

  const { viewBox, width, height, inner } = extractSVGContent(svgContent);

  // Remove the Figma artboard grid path (stroke="#9747FF") — it's a Figma
  // layout artifact that should never appear in generated components.
  // Remove hardcoded fill="currentColor" and fill="black" from child elements
  // so they inherit the color from the parent SVG's fill="${color}" attribute.
  // (Mirrors generate-react.ts's cleanup — keep the two in sync.)
  const cleanedInner = inner
    .replace(/<path[^>]*stroke="#9747FF"[^>]*\/>/g, "")
    .replace(/\s+fill="currentColor"/g, "")
    .replace(/\s+fill="black"/g, "")
    .trim();
  const escapedInner = escapeLitTemplate(cleanedInner);

  // category may be "generic" (1 segment) or "brands/Oakley" (2 segments), etc.
  // The component file sits one level below category, so depth = segments + 1
  const depth = svgFile.category.split("/").length + 1;
  const typesPath = "../".repeat(depth) + "types";

  // unsafeSVG (not unsafeHTML) is required here: unsafeHTML parses its string
  // with HTML parsing rules, which puts <g>/<path>/<defs>/<clipPath> etc. in
  // the HTML namespace instead of the SVG namespace — the browser silently
  // refuses to render them (they exist in the DOM as inert, non-rendering
  // elements). unsafeSVG parses with SVG parsing rules, giving the correct
  // http://www.w3.org/2000/svg namespace.
  return `import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '${typesPath}';

export const ${functionName} = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html\`<svg viewBox="${viewBox}" width="${width}" height="${height}"
       fill="\${color}" class="\${className ?? ''}" aria-hidden="true" focusable="false">
    \${unsafeSVG(\`${escapedInner}\`)}
  </svg>\`;
`;
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
      const functionCode = generateLitRenderFunction(svgFile, svgContent);
      const outputFile = path.join(
        iconDir,
        `render${svgFile.name}${svgFile.size}.ts`,
      );
      fs.writeFileSync(outputFile, functionCode, "utf-8");
      console.log(
        `✓ Generated ${svgFile.category}/${svgFile.name}/render${svgFile.name}${svgFile.size}`,
      );
    } catch (error) {
      console.error(
        `✗ Failed to generate ${svgFile.category}/${svgFile.name}/render${svgFile.name}${svgFile.size}:`,
        error,
      );
      process.exit(1);
    }
  }

  console.log(`\n✓ Lit render functions generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith("generate-lit.ts")) {
  main();
}
