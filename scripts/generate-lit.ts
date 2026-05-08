import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_RAW_DIR = path.join(__dirname, '../raw');
const DEFAULT_OUTPUT_DIR = path.join(__dirname, '../packages/lit/src');

export interface SVGFile {
  category: string;
  name: string;
  size: string;
  fullPath: string;
}

function getSVGFiles(rawDir: string): SVGFile[] {
  const files: SVGFile[] = [];
  const categoryDirs = fs.readdirSync(rawDir);

  for (const category of categoryDirs) {
    const categoryPath = path.join(rawDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const iconDirs = fs.readdirSync(categoryPath);
    for (const iconName of iconDirs) {
      const iconDir = path.join(categoryPath, iconName);
      if (!fs.statSync(iconDir).isDirectory()) continue;

      const svgFiles = fs.readdirSync(iconDir).filter(f => f.endsWith('.svg'));
      for (const svgFile of svgFiles) {
        const match = svgFile.match(/^(.+?)_(\d+)\.svg$/);
        if (match) {
          files.push({
            category,
            name: iconName,
            size: match[2],
            fullPath: path.join(iconDir, svgFile),
          });
        }
      }
    }
  }

  return files;
}

export function extractSVGContent(svgContent: string): { viewBox: string; width: string; height: string; inner: string } {
  const match = svgContent.match(
    /<svg[^>]*viewBox="([^"]*)"[^>]*width="([^"]*)"[^>]*height="([^"]*)"[^>]*>(.*?)<\/svg>/s
  );

  if (!match) {
    throw new Error('Could not parse SVG structure');
  }

  return {
    viewBox: match[1],
    width: match[2],
    height: match[3],
    inner: match[4].trim(),
  };
}

export function escapeLitTemplate(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

export function generateLitRenderFunction(svgFile: SVGFile, svgContent: string): string {
  const functionName = `render${svgFile.name}${svgFile.size}`;

  const { viewBox, width, height, inner } = extractSVGContent(svgContent);

  // Remove hardcoded fill="currentColor" from child elements so parent fill applies
  const cleanedInner = inner.replace(/\s+fill="currentColor"/g, '');
  const escapedInner = escapeLitTemplate(cleanedInner);

  return `import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const ${functionName} = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html\`<svg viewBox="${viewBox}" width="${width}" height="${height}"
       fill="\${color}" class="\${className ?? ''}" aria-hidden="true" focusable="false">
    \${unsafeHTML(\`${escapedInner}\`)}
  </svg>\`;
`;
}

export function main(rawDir: string = DEFAULT_RAW_DIR, outputDir: string = DEFAULT_OUTPUT_DIR) {
  const svgFiles = getSVGFiles(rawDir);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const svgFile of svgFiles) {
    try {
      const categoryDir = path.join(outputDir, svgFile.category);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }

      const svgContent = fs.readFileSync(svgFile.fullPath, 'utf-8');
      const functionCode = generateLitRenderFunction(svgFile, svgContent);
      const outputFile = path.join(categoryDir, `render${svgFile.name}${svgFile.size}.ts`);
      fs.writeFileSync(outputFile, functionCode, 'utf-8');
      console.log(`✓ Generated ${svgFile.category}/render${svgFile.name}${svgFile.size}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${svgFile.category}/render${svgFile.name}${svgFile.size}:`, error);
      process.exit(1);
    }
  }

  console.log(`\n✓ Lit render functions generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith('generate-lit.ts')) {
  main();
}
