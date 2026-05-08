import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_RAW_DIR = path.join(__dirname, '../raw');
const DEFAULT_REACT_OUTPUT = path.join(__dirname, '../packages/react/src/index.ts');
const DEFAULT_LIT_OUTPUT = path.join(__dirname, '../packages/lit/src/index.ts');

export interface SVGFile {
  category: string;
  name: string;
  size: string;
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
          });
        }
      }
    }
  }

  return files.sort((a, b) => (a.name + a.size).localeCompare(b.name + b.size));
}

export function generateReactIndex(files: SVGFile[]): string {
  const exports = files
    .map(f => `export { ${f.name}${f.size} } from './${f.category}/${f.name}${f.size}';`)
    .join('\n');

  return exports;
}

export function generateLitIndex(files: SVGFile[]): string {
  const exports = files
    .map(f => `export { render${f.name}${f.size} } from './${f.category}/render${f.name}${f.size}';`)
    .join('\n');

  return exports;
}

export function main(rawDir: string = DEFAULT_RAW_DIR, reactOutput: string = DEFAULT_REACT_OUTPUT, litOutput: string = DEFAULT_LIT_OUTPUT) {
  const svgFiles = getSVGFiles(rawDir);

  // React index
  const reactIndex = generateReactIndex(svgFiles);
  fs.writeFileSync(reactOutput, reactIndex, 'utf-8');
  console.log(`✓ React index.ts updated`);

  // Lit index
  const litIndex = generateLitIndex(svgFiles);
  fs.writeFileSync(litOutput, litIndex, 'utf-8');
  console.log(`✓ Lit index.ts updated`);

  console.log(`\n✓ Indexes generated for ${svgFiles.length} icon×size combinations`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith('generate-index.ts')) {
  main();
}
