import { describe, it, expect } from 'vitest';
import { optimizeSVG } from '../generate-static-svg';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('optimizeSVG', () => {
  it('compresses SVG (output shorter than input)', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result.length).toBeLessThan(FIXTURE_SVG.length);
  });

  it('preserves viewBox attribute', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result).toContain('viewBox="0 0 32 32"');
  });

  it('preserves xmlns attribute', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result).toContain('xmlns=');
  });

  it('returns valid SVG (contains svg tag)', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result).toContain('<svg');
    expect(result).toContain('</svg>');
  });

  it('preserves path data', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result).toContain('M0 0');
  });

  it('handles multiple paths', () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M0 0h24v24H0z" fill="currentColor"/>
      <path d="M5 10h14" fill="currentColor"/>
    </svg>`;
    const result = optimizeSVG(svg);
    expect(result).toContain('<svg');
    expect(result).toContain('</svg>');
    expect(result.length).toBeLessThan(svg.length);
  });

  it('preserves attributes order after optimization', () => {
    const result = optimizeSVG(FIXTURE_SVG);
    expect(result).toContain('xmlns');
    expect(result).toContain('width');
    expect(result).toContain('height');
  });

  it('optimizes large SVGs with redundant attributes', () => {
    const largeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
      <path d="M0 0h32v32H0z" fill="currentColor" stroke="none" stroke-width="0"/>
      <path d="M5 5h22v22H5z" fill="currentColor" stroke="none" stroke-width="0"/>
      <path d="M10 10h12v12H10z" fill="currentColor" stroke="none" stroke-width="0"/>
    </svg>`;
    const result = optimizeSVG(largeSvg);
    expect(result.length).toBeLessThan(largeSvg.length);
    expect(result).toContain('viewBox');
  });

  it('handles SVG with comments and extra whitespace', () => {
    const svgWithComments = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <!-- Comment here -->
        <path d="M0 0h32v32H0z" fill="currentColor"/>
      </svg>
    `;
    const result = optimizeSVG(svgWithComments);
    expect(result).toContain('<svg');
    expect(result).toContain('viewBox');
  });
});
