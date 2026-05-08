import * as fs from 'fs';
import * as path from 'path';

const SVG_DIR = path.join(__dirname, '../packages/core/dist/svg');
const PACKAGE_JSON_PATH = path.join(__dirname, '../packages/core/package.json');

function main() {
  if (!fs.existsSync(SVG_DIR)) {
    console.warn(`⚠ SVG directory not found: ${SVG_DIR}`);
    return;
  }

  const svgFiles = fs.readdirSync(SVG_DIR)
    .filter(f => f.endsWith('.svg'))
    .sort();

  const exports: Record<string, string> = {};
  for (const file of svgFiles) {
    const name = file.replace('.svg', '');
    exports[`./${name}.svg`] = `./dist/svg/${file}`;
  }

  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
  packageJson.exports = exports;

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
  console.log(`✓ Generated ${svgFiles.length} SVG exports in packages/core/package.json`);
}

main();
