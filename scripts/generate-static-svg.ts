import * as fs from 'fs';
import * as path from 'path';
import { optimize } from 'svgo';

const DEFAULT_RAW_DIR = path.join(__dirname, '../raw');
const DEFAULT_OUTPUT_DIR = path.join(__dirname, '../packages/core/dist/svg');

export interface SVGFile {
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

export function optimizeSVG(svgContent: string): string {
  const result = optimize(svgContent, {
    plugins: [
      {
        name: 'preset-default',
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

export function main(rawDir: string = DEFAULT_RAW_DIR, outputDir: string = DEFAULT_OUTPUT_DIR) {
  const svgFiles = getSVGFiles(rawDir);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const svgFile of svgFiles) {
    try {
      const svgContent = fs.readFileSync(svgFile.fullPath, 'utf-8');
      const optimizedContent = optimizeSVG(svgContent);
      const outputFile = path.join(outputDir, `${svgFile.name}_${svgFile.size}.svg`);
      fs.writeFileSync(outputFile, optimizedContent, 'utf-8');
      console.log(`✓ Optimized ${svgFile.name}_${svgFile.size}`);
    } catch (error) {
      console.error(`✗ Failed to optimize ${svgFile.name}_${svgFile.size}:`, error);
      process.exit(1);
    }
  }

  console.log(`\n✓ Static SVGs generated: ${svgFiles.length} files`);
}

// Only run main if this file is the entry point
if (process.argv[1]?.endsWith('generate-static-svg.ts')) {
  main();
}
