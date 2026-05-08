import { describe, it, expect, vi } from 'vitest';
import {
  extractSVGContent,
  escapeLitTemplate,
  generateLitRenderFunction,
  type SVGFile,
} from '../generate-lit';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

describe('extractSVGContent', () => {
  it('extracts viewBox, width, height, and inner content', () => {
    const result = extractSVGContent(FIXTURE_SVG);
    expect(result.viewBox).toBe('0 0 32 32');
    expect(result.width).toBe('32');
    expect(result.height).toBe('32');
    expect(result.inner).toContain('<path');
  });

  it('throws on malformed SVG', () => {
    const malformed = `<svg width="32"><path d="M0 0"/></svg>`;
    expect(() => extractSVGContent(malformed)).toThrow('Could not parse SVG structure');
  });

  it('trims inner content whitespace', () => {
    const svg = `<svg viewBox="0 0 32 32" width="32" height="32">

    <path d="M0 0"/>

    </svg>`;
    const result = extractSVGContent(svg);
    expect(result.inner).toBe('<path d="M0 0"/>');
  });
});

describe('escapeLitTemplate', () => {
  it('escapes backticks', () => {
    expect(escapeLitTemplate('text`with`backtick')).toBe('text\\`with\\`backtick');
  });

  it('escapes dollar signs', () => {
    expect(escapeLitTemplate('text$with$dollar')).toBe('text\\$with\\$dollar');
  });

  it('escapes backslashes', () => {
    expect(escapeLitTemplate('text\\with\\backslash')).toBe('text\\\\with\\\\backslash');
  });

  it('leaves unescaped characters alone', () => {
    expect(escapeLitTemplate('plain text')).toBe('plain text');
  });

  it('escapes multiple special characters in sequence', () => {
    const input = 'path `with` $var and \\ backslash';
    const output = escapeLitTemplate(input);
    expect(output).toBe('path \\`with\\` \\$var and \\\\ backslash');
  });
});

describe('generateLitRenderFunction', () => {
  const svgFile: SVGFile = {
    category: 'generic',
    name: 'Home',
    size: '32',
    fullPath: '/mock/path',
  };

  it('generates function with correct name', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('export const renderHome32 = ');
  });

  it('removes fill="currentColor" from inner content', () => {
    const svg = `<svg viewBox="0 0 32 32" width="32" height="32">
      <path d="M0 0" fill="currentColor"/>
      <path d="M5 5" fill="currentColor"/>
    </svg>`;
    const code = generateLitRenderFunction(svgFile, svg);
    expect(code).not.toContain('fill="currentColor"/>');
  });

  it('includes correct imports', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain("import { html } from 'lit'");
    expect(code).toContain("import { unsafeHTML } from 'lit/directives/unsafe-html.js'");
    expect(code).toContain("import type { IconProps } from '../types'");
  });

  it('includes color interpolation in template', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('fill="${color}"');
  });

  it('includes className interpolation', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('class="${className ?? \'\'}"');
  });

  it('wraps inner content with unsafeHTML', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('${unsafeHTML(');
  });

  it('includes accessibility attributes', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('aria-hidden="true"');
    expect(code).toContain('focusable="false"');
  });

  it('includes correct viewBox, width, height', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('viewBox="0 0 32 32"');
    expect(code).toContain('width="32"');
    expect(code).toContain('height="32"');
  });

  it('returns a function that returns TemplateResult', () => {
    const code = generateLitRenderFunction(svgFile, FIXTURE_SVG);
    expect(code).toContain('html`');
    expect(code).toContain('</svg>`');
  });

  it('handles different category paths', () => {
    const svgFileBrands: SVGFile = {
      category: 'brands',
      name: 'Logo',
      size: '24',
      fullPath: '/mock/path',
    };
    const code = generateLitRenderFunction(svgFileBrands, FIXTURE_SVG);
    expect(code).toContain('export const renderLogo24 = ');
  });

  it('handles complex SVG with groups and nested elements', () => {
    const complexSvg = `<svg viewBox="0 0 32 32" width="32" height="32">
      <g><path d="M0 0" fill="currentColor"/><circle cx="16" cy="16" r="8" fill="currentColor"/></g>
    </svg>`;
    const code = generateLitRenderFunction(svgFile, complexSvg);
    expect(code).toContain('renderHome32');
    expect(code).toContain('${unsafeHTML(');
    expect(code).not.toContain('fill="currentColor"/>');
  });

  it('preserves special characters in path data', () => {
    const svgWithSpecialChars = `<svg viewBox="0 0 32 32" width="32" height="32">
      <path d="M10,10 L20,20 Q25,25 30,30" fill="currentColor"/>
    </svg>`;
    const code = generateLitRenderFunction(svgFile, svgWithSpecialChars);
    expect(code).toContain('M10,10');
    expect(code).toContain('Q25,25');
  });
});
