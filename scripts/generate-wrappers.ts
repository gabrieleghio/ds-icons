import * as fs from "fs";
import * as path from "path";

const ICONS_ROOT = path.resolve(
  __dirname,
  "../packages/core/src/icons",
);
const REACT_OUT = path.resolve(__dirname, "../packages/react/src/icons");
const LIT_OUT = path.resolve(__dirname, "../packages/lit/src/icons");
const REACT_INDEX = path.resolve(__dirname, "../packages/react/src/index.ts");
const LIT_INDEX = path.resolve(__dirname, "../packages/lit/src/index.ts");

// ─── Template generator: React ────────────────────────────────────────────────

const generateReactWrapper = (
  name: string,
): string => `import React from 'react';
import { ${name} as ${name}Definition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface ${name}Props {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ${name} = (props: ${name}Props) => (
  <Icon {...props} definition={${name}Definition} />
);
`;

// ─── Template generator: LIT ──────────────────────────────────────────────────

const generateLitWrapper = (
  name: string,
): string => `import { renderIcon } from '../renderIcon';
import { ${name} as ${name}Definition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const render${name} = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(${name}Definition, size, color, className);
`;

// ─── Index file generators ─────────────────────────────────────────────────────

const generateReactIndex = (names: string[]): string => {
  const iconExports = names
    .map((name) => `export { ${name} } from './icons/${name}';`)
    .join("\n");

  return `export { Icon } from './Icon';
export type { IconComponent, IconComponentProps } from './types';
${iconExports}
`;
};

const generateLitIndex = (names: string[]): string => {
  const iconExports = names
    .map((name) => `export { render${name} } from './icons/${name}';`)
    .join("\n");

  return `export { renderIcon } from './renderIcon';
${iconExports}
`;
};

// ─── Icon info type ───────────────────────────────────────────────────────────

interface IconInfo {
  name: string;
  category: string;
  type: "standard" | "multisize";
  relativePath: string;
}

// ─── Recursive file finder ────────────────────────────────────────────────────

const findFilesRecursive = (dir: string): string[] => {
  const files: string[] = [];

  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...findFilesRecursive(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      files.push(fullPath);
    }
  });

  return files;
};

// ─── Icon discovery by category and type ──────────────────────────────────────

const findAllIcons = (): IconInfo[] => {
  const icons: IconInfo[] = [];

  if (!fs.existsSync(ICONS_ROOT)) return icons;

  const categories = fs
    .readdirSync(ICONS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  categories.forEach((category) => {
    const categoryDir = path.join(ICONS_ROOT, category);

    // Process standard icons
    const standardDir = path.join(categoryDir, "standard");
    const standardFiles = findFilesRecursive(standardDir);
    standardFiles.forEach((filePath) => {
      const name = path.basename(filePath, ".ts");
      icons.push({
        name,
        category,
        type: "standard",
        relativePath: `${category}/standard/${name}`,
      });
    });

    // Process multisize icons
    const multisizeDir = path.join(categoryDir, "multisize");
    const multisizeFiles = findFilesRecursive(multisizeDir);
    multisizeFiles.forEach((filePath) => {
      const name = path.basename(filePath, ".ts");
      icons.push({
        name,
        category,
        type: "multisize",
        relativePath: `${category}/multisize/${name}`,
      });
    });
  });

  return icons;
};

// ─── Core index updater ────────────────────────────────────────────────────────

const generateCoreIndex = (icons: IconInfo[]): string => {
  const exports = icons
    .map((icon) => `export { ${icon.name} } from './icons/${icon.relativePath}';`)
    .join("\n");

  return `export type { IconSize, IconDefinition, StandardIconDefinition, MultisizeIconDefinition } from './types';
export { getClosestSize } from './utils';
${exports}
`;
};

// ─── Main process ──────────────────────────────────────────────────────────────

const processIcons = (): void => {
  // Crea le directory di output se non esistono
  [REACT_OUT, LIT_OUT].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

  // Trova tutte le icone dalla nuova struttura gerarchica
  const allIcons = findAllIcons();

  // Genera wrapper per ogni icona (appiattiti in React e LIT)
  allIcons.forEach((icon) => {
    fs.writeFileSync(
      path.join(REACT_OUT, `${icon.name}.tsx`),
      generateReactWrapper(icon.name),
    );
    fs.writeFileSync(
      path.join(LIT_OUT, `${icon.name}.ts`),
      generateLitWrapper(icon.name),
    );
  });

  // Scrivi index.ts per React (appiattito)
  const reactNames = allIcons.map((icon) => icon.name);
  fs.writeFileSync(REACT_INDEX, generateReactIndex(reactNames));

  // Scrivi index.ts per LIT (appiattito)
  fs.writeFileSync(LIT_INDEX, generateLitIndex(reactNames));

  // Aggiorna index.ts del core (con struttura di categoria)
  const coreIndex = path.resolve(__dirname, "../packages/core/src/index.ts");
  fs.writeFileSync(coreIndex, generateCoreIndex(allIcons));

  const standardCount = allIcons.filter((i) => i.type === "standard").length;
  const multisizeCount = allIcons.filter((i) => i.type === "multisize").length;

  console.log(
    `✅ Generati ${allIcons.length} wrapper (${standardCount} standard, ${multisizeCount} multisize)`,
  );
  console.log(`   → React:  ${allIcons.length} componenti`);
  console.log(`   → LIT:    ${allIcons.length} funzioni di rendering`);
};

processIcons();
