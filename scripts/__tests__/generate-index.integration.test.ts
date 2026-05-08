import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('generate-index integration', () => {
  let tempDir: string;
  let rawDir: string;
  let outputDir: string;
  let reactIndexPath: string;
  let litIndexPath: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(tmpdir(), 'vitest-'));
    rawDir = path.join(tempDir, 'raw');
    outputDir = path.join(tempDir, 'output');
    reactIndexPath = path.join(outputDir, 'react-index.ts');
    litIndexPath = path.join(outputDir, 'lit-index.ts');

    // Create output directory
    fs.mkdirSync(outputDir, { recursive: true });

    // Create raw directory structure with multiple icons
    fs.mkdirSync(path.join(rawDir, 'generic'), { recursive: true });
    fs.mkdirSync(path.join(rawDir, 'generic', 'Home'), { recursive: true });
    fs.mkdirSync(path.join(rawDir, 'generic', 'Settings'), { recursive: true });
    fs.writeFileSync(
      path.join(rawDir, 'generic', 'Home', 'Home_32.svg'),
      FIXTURE_SVG
    );
    fs.writeFileSync(
      path.join(rawDir, 'generic', 'Settings', 'Settings_24.svg'),
      FIXTURE_SVG
    );
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('generates React index file with correct exports', async () => {
    const { main } = await import('../generate-index.ts');

    // Call main with temp directories
    main(rawDir, reactIndexPath, litIndexPath);

    // Verify React index was created
    expect(fs.existsSync(reactIndexPath)).toBe(true);

    // Verify content
    const content = fs.readFileSync(reactIndexPath, 'utf-8');
    expect(content).toContain('export { Home32 }');
    expect(content).toContain('export { Settings24 }');
    expect(content).toContain('./generic/Home32');
    expect(content).toContain('./generic/Settings24');
  });

  it('generates Lit index file with render function exports', async () => {
    const { main } = await import('../generate-index.ts');

    // Call main with temp directories
    main(rawDir, reactIndexPath, litIndexPath);

    // Verify Lit index was created
    expect(fs.existsSync(litIndexPath)).toBe(true);

    // Verify content
    const content = fs.readFileSync(litIndexPath, 'utf-8');
    expect(content).toContain('export { renderHome32 }');
    expect(content).toContain('export { renderSettings24 }');
    expect(content).toContain('./generic/renderHome32');
    expect(content).toContain('./generic/renderSettings24');
  });

  it('handles multiple categories', async () => {
    const { main } = await import('../generate-index.ts');

    // Add another category
    fs.mkdirSync(path.join(rawDir, 'brands'), { recursive: true });
    fs.mkdirSync(path.join(rawDir, 'brands', 'Logo'), { recursive: true });
    fs.writeFileSync(
      path.join(rawDir, 'brands', 'Logo', 'Logo_32.svg'),
      FIXTURE_SVG
    );

    main(rawDir, reactIndexPath, litIndexPath);

    const reactContent = fs.readFileSync(reactIndexPath, 'utf-8');
    const litContent = fs.readFileSync(litIndexPath, 'utf-8');

    expect(reactContent).toContain('./brands/Logo32');
    expect(litContent).toContain('./brands/renderLogo32');
  });

  it('sorts exports alphabetically by component name and size', async () => {
    const { main } = await import('../generate-index.ts');

    main(rawDir, reactIndexPath, litIndexPath);

    const content = fs.readFileSync(reactIndexPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());

    // Home32 should come before Settings24 alphabetically
    const home32Index = lines.findIndex(l => l.includes('Home32'));
    const settings24Index = lines.findIndex(l => l.includes('Settings24'));

    expect(home32Index).toBeLessThan(settings24Index);
  });
});
