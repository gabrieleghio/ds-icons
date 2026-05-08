import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { parseSVG, generateReactComponent, type SVGFile, type ParsedSVG } from '../generate-react';

const FIXTURE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="M0 0h32v32H0z" fill="currentColor"/>
</svg>`;

const FIXTURE_SVG_MULTI_PATH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M0 0h24v24H0z" fill="currentColor"/>
  <path d="M5 10h14" fill="currentColor"/>
</svg>`;

describe('parseSVG', () => {
  it('extracts viewBox, width, height, and inner content correctly', () => {
    const result = parseSVG(FIXTURE_SVG);
    expect(result.viewBox).toBe('0 0 32 32');
    expect(result.width).toBe('32');
    expect(result.height).toBe('32');
    expect(result.inner).toContain('<path');
  });

  it('throws on malformed SVG (missing viewBox)', () => {
    const malformed = `<svg width="32" height="32"><path d="M0 0"/></svg>`;
    expect(() => parseSVG(malformed)).toThrow('Could not parse SVG structure');
  });

  it('throws on malformed SVG (unclosed tag)', () => {
    const malformed = `<svg viewBox="0 0 32 32" width="32" height="32"><path d="M0 0"`;
    expect(() => parseSVG(malformed)).toThrow('Could not parse SVG structure');
  });

  it('parses multiple paths correctly', () => {
    const result = parseSVG(FIXTURE_SVG_MULTI_PATH);
    expect(result.inner).toContain('M0 0h24v24H0z');
    expect(result.inner).toContain('M5 10h14');
  });
});

describe('generateReactComponent', () => {
  const svgFile: SVGFile = {
    category: 'generic',
    name: 'Home',
    size: '32',
    fullPath: '/mock/path',
  };

  const parsedSvg: ParsedSVG = {
    viewBox: '0 0 32 32',
    width: '32',
    height: '32',
    inner: '<path d="M0 0h32v32H0z" fill="currentColor"/>',
  };

  it('generates component with correct name', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain('export const Home32 = ');
  });

  it('removes fill="currentColor" from child elements', () => {
    const parsed: ParsedSVG = {
      ...parsedSvg,
      inner: '<path d="M0 0" fill="currentColor"/><path d="M5 5" fill="currentColor"/>',
    };
    const code = generateReactComponent(svgFile, parsed);
    expect(code).not.toContain('fill="currentColor"/>');
  });

  it('includes fill={color} on SVG root', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain('fill={color}');
  });

  it('imports React and IconProps', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain("import React from 'react'");
    expect(code).toContain("import type { IconProps } from '../types'");
  });

  it('includes className and style props', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain('className={className}');
    expect(code).toContain('style={style}');
  });

  it('includes SVG attributes', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain('viewBox="0 0 32 32"');
    expect(code).toContain('width={32}');
    expect(code).toContain('height={32}');
  });

  it('includes accessibility attributes', () => {
    const code = generateReactComponent(svgFile, parsedSvg);
    expect(code).toContain('aria-hidden="true"');
    expect(code).toContain('focusable="false"');
  });

  it('handles different category paths', () => {
    const svgFileBrands: SVGFile = {
      category: 'brands',
      name: 'Logo',
      size: '24',
      fullPath: '/mock/path',
    };
    const code = generateReactComponent(svgFileBrands, parsedSvg);
    expect(code).toContain('export const Logo24 = ');
  });

  it('handles multiple nested path elements', () => {
    const parsed: ParsedSVG = {
      viewBox: '0 0 24 24',
      width: '24',
      height: '24',
      inner: '<g><path d="M0 0" fill="currentColor"/><path d="M5 5" fill="currentColor"/><path d="M10 10" fill="currentColor"/></g>',
    };
    const code = generateReactComponent(svgFile, parsed);
    expect(code).not.toContain('fill="currentColor"/>');
    expect(code).toContain('<g>');
  });
});
