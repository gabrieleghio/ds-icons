import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

// Dynamically import main function in tests

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('generate-react integration', () => {
  let tempDir: string;
  let rawDir: string;
  let outputDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(tmpdir(), 'vitest-'));
    rawDir = path.join(tempDir, 'raw');
    outputDir = path.join(tempDir, 'output');

    // Create raw directory structure
    fs.mkdirSync(path.join(rawDir, 'generic'), { recursive: true });
    fs.mkdirSync(path.join(rawDir, 'generic', 'TestIcon'), { recursive: true });
    fs.writeFileSync(
      path.join(rawDir, 'generic', 'TestIcon', 'TestIcon_32.svg'),
      FIXTURE_SVG
    );
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('generates React component file with correct structure', async () => {
    const { main } = await import('../generate-react.ts');

    // Call main with temp directories
    main(rawDir, outputDir);

    // Verify output directory was created
    expect(fs.existsSync(outputDir)).toBe(true);

    // Verify component was generated
    const componentPath = path.join(outputDir, 'generic', 'TestIcon32.tsx');
    expect(fs.existsSync(componentPath)).toBe(true);

    // Verify component content
    const content = fs.readFileSync(componentPath, 'utf-8');
    expect(content).toContain('export const TestIcon32');
    expect(content).toContain('import React from');
    expect(content).toContain('import type { IconProps }');
    expect(content).toContain('fill={color}');
  });

  it('creates category subdirectories', async () => {
    const { main } = await import('../generate-react.ts');
    main(rawDir, outputDir);

    const categoryDir = path.join(outputDir, 'generic');
    expect(fs.existsSync(categoryDir)).toBe(true);
    expect(fs.lstatSync(categoryDir).isDirectory()).toBe(true);
  });

  it('generates index.ts file', async () => {
    const { main } = await import('../generate-react.ts');
    main(rawDir, outputDir);

    const indexPath = path.join(outputDir, 'index.ts');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      expect(content).toContain('export');
      expect(content).toContain('TestIcon32');
    }
  });
});
