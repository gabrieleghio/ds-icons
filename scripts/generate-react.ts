import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_RAW_DIR = path.join(__dirname, '../raw');
const DEFAULT_OUTPUT_DIR = path.join(__dirname, '../packages/react/src');

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

export function parseSVG(svgContent: string): ParsedSVG {
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

export function generateReactComponent(svgFile: SVGFile, svg: ParsedSVG): string {
  const componentName = `${svgFile.name}${svgFile.size}`;

  // Remove hardcoded fill="currentColor" from child elements so parent fill applies
  const cleanedInner = svg.inner.replace(/\s+fill="currentColor"/g, '');

  return `import React from 'react';
import type { IconProps } from '../types';

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
      const parsed = parseSVG(svgContent);
      const componentCode = generateReactComponent(svgFile, parsed);
      const outputFile = path.join(categoryDir, `${svgFile.name}${svgFile.size}.tsx`);
      fs.writeFileSync(outputFile, componentCode, 'utf-8');
      console.log(`✓ Generated ${svgFile.category}/${svgFile.name}${svgFile.size}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${svgFile.category}/${svgFile.name}${svgFile.size}:`, error);
      process.exit(1);
    }
  }

  console.log(`\n✓ React components generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith('generate-react.ts')) {
  main();
}
