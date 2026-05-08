import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('generate-static-svg integration', () => {
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

  it('generates optimized SVG file', async () => {
    const { main } = await import('../generate-static-svg.ts');

    // Call main with temp directories
    main(rawDir, outputDir);

    // Verify output directory was created
    expect(fs.existsSync(outputDir)).toBe(true);

    // Verify SVG was generated
    const svgPath = path.join(outputDir, 'TestIcon_32.svg');
    expect(fs.existsSync(svgPath)).toBe(true);

    // Verify SVG content is optimized
    const content = fs.readFileSync(svgPath, 'utf-8');
    expect(content).toContain('<svg');
    expect(content).toContain('viewBox');
    expect(content).toContain('</svg>');
    // SVGO optimizes, so output should be shorter or equal
    expect(content.length).toBeLessThanOrEqual(FIXTURE_SVG.length + 10);
  });

  it('handles multiple icons', async () => {
    const { main } = await import('../generate-static-svg.ts');

    // Add another icon
    fs.writeFileSync(
      path.join(rawDir, 'generic', 'TestIcon', 'TestIcon_24.svg'),
      FIXTURE_SVG
    );

    main(rawDir, outputDir);

    expect(fs.existsSync(path.join(outputDir, 'TestIcon_32.svg'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'TestIcon_24.svg'))).toBe(true);
  });

  it('preserves viewBox attribute in optimized SVG', async () => {
    const { main } = await import('../generate-static-svg.ts');

    main(rawDir, outputDir);

    const svgPath = path.join(outputDir, 'TestIcon_32.svg');
    const content = fs.readFileSync(svgPath, 'utf-8');
    expect(content).toContain('viewBox="0 0 32 32"');
  });
});
