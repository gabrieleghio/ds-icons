import fs from 'fs';
import path from 'path';

/**
 * Genera automaticamente il file metadata delle icone basandosi
 * sulla struttura di cartelle del package core
 */

const CORE_ICONS_DIR = path.join(__dirname, '../packages/core/src/icons');
const OUTPUT_FILE = path.join(__dirname, '../packages/showcase/src/icons-metadata.ts');

function generateMetadata() {
  const iconsByCategory: Record<string, string[]> = {};

  // Leggi tutte le categorie
  const categories = fs.readdirSync(CORE_ICONS_DIR);

  for (const category of categories) {
    const categoryPath = path.join(CORE_ICONS_DIR, category);
    const stat = fs.statSync(categoryPath);

    if (!stat.isDirectory()) continue;

    // Per ogni categoria, leggi tutti i tipi (standard, multisize)
    const types = fs.readdirSync(categoryPath);
    const icons: Set<string> = new Set();

    for (const type of types) {
      const typePath = path.join(categoryPath, type);
      const typeStat = fs.statSync(typePath);

      if (!typeStat.isDirectory()) continue;

      // Leggi tutti i file di icone in questo tipo
      const files = fs.readdirSync(typePath);
      for (const file of files) {
        if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
          const iconName = path.basename(file, '.ts');
          icons.add(iconName);
        }
      }
    }

    // Formatta il nome della categoria (es: functional-generic -> Functional Generic)
    const formattedCategory = category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    iconsByCategory[formattedCategory] = Array.from(icons).sort();
  }

  // Genera il file TypeScript
  const content = `// Auto-generated file. Do not edit manually!
// Generato da: scripts/generate-icons-metadata.ts

export const ICON_CATEGORIES = ${JSON.stringify(iconsByCategory, null, 2)} as const;
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`✅ Metadata generated: ${OUTPUT_FILE}`);
  console.log(`📁 Categories found: ${Object.keys(iconsByCategory).join(', ')}`);
}

generateMetadata();
