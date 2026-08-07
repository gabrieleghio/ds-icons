import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('generate-lit integration', () => {
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

  it('generates Lit render function file with correct structure', async () => {
    const { main } = await import('../generate-lit.ts');

    // Call main with temp directories
    main(rawDir, outputDir);

    // Verify output directory was created
    expect(fs.existsSync(outputDir)).toBe(true);

    // Verify component was generated
    const componentPath = path.join(outputDir, 'generic', 'renderTestIcon32.ts');
    expect(fs.existsSync(componentPath)).toBe(true);

    // Verify component content
    const content = fs.readFileSync(componentPath, 'utf-8');
    expect(content).toContain('export const renderTestIcon32');
    expect(content).toContain("import { html } from 'lit'");
    expect(content).toContain("import { unsafeSVG } from 'lit/directives/unsafe-svg.js'");
    expect(content).toContain('fill="${color}"');
  });

  it('creates category subdirectories', async () => {
    const { main } = await import('../generate-lit.ts');
    main(rawDir, outputDir);

    const categoryDir = path.join(outputDir, 'generic');
    expect(fs.existsSync(categoryDir)).toBe(true);
    expect(fs.lstatSync(categoryDir).isDirectory()).toBe(true);
  });

  it('handles multiple categories', async () => {
    const { main } = await import('../generate-lit.ts');

    // Add another category
    fs.mkdirSync(path.join(rawDir, 'brands'), { recursive: true });
    fs.mkdirSync(path.join(rawDir, 'brands', 'Logo'), { recursive: true });
    fs.writeFileSync(
      path.join(rawDir, 'brands', 'Logo', 'Logo_24.svg'),
      FIXTURE_SVG
    );

    main(rawDir, outputDir);

    expect(fs.existsSync(path.join(outputDir, 'generic'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'brands'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'generic', 'renderTestIcon32.ts'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'brands', 'renderLogo24.ts'))).toBe(true);
  });
});
