import { describe, it, expect } from 'vitest';
import { generateReactIndex, generateLitIndex, type SVGFile } from '../generate-index';

describe('generateReactIndex', () => {
  it('generates export lines for each file', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
      { category: 'generic', name: 'Backpack', size: '24' },
    ];
    const result = generateReactIndex(files);
    expect(result).toContain('export { Home32 } from');
    expect(result).toContain('export { Backpack24 } from');
  });

  it('includes category in import path', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
      { category: 'brands', name: 'OakleyCart', size: '32' },
    ];
    const result = generateReactIndex(files);
    expect(result).toContain('./generic/Home32');
    expect(result).toContain('./brands/OakleyCart32');
  });

  it('handles empty file list', () => {
    const result = generateReactIndex([]);
    expect(result).toBe('');
  });

  it('generates correct format with semicolon', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
    ];
    const result = generateReactIndex(files);
    expect(result).toContain("from './generic/Home32';");
  });

  it('handles multiple categories', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
      { category: 'glasses', name: 'SunLight', size: '32' },
      { category: 'social', name: 'Instagram', size: '32' },
    ];
    const result = generateReactIndex(files);
    expect(result).toContain('./generic/Home32');
    expect(result).toContain('./glasses/SunLight32');
    expect(result).toContain('./social/Instagram32');
  });
});

describe('generateLitIndex', () => {
  it('generates export lines with render prefix', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
      { category: 'generic', name: 'Backpack', size: '24' },
    ];
    const result = generateLitIndex(files);
    expect(result).toContain('export { renderHome32 } from');
    expect(result).toContain('export { renderBackpack24 } from');
  });

  it('includes category in import path', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Home', size: '32' },
      { category: 'brands', name: 'OakleyCart', size: '32' },
    ];
    const result = generateLitIndex(files);
    expect(result).toContain('./generic/renderHome32');
    expect(result).toContain('./brands/renderOakleyCart32');
  });

  it('handles empty file list', () => {
    const result = generateLitIndex([]);
    expect(result).toBe('');
  });

  it('generates correct format with render prefix and category', () => {
    const files: SVGFile[] = [
      { category: 'payment-flags', name: 'ApplePay', size: '16' },
    ];
    const result = generateLitIndex(files);
    expect(result).toContain("export { renderApplePay16 } from './payment-flags/renderApplePay16';");
  });

  it('handles multiple sizes of same icon', () => {
    const files: SVGFile[] = [
      { category: 'payment-flags', name: 'ApplePay', size: '16' },
      { category: 'payment-flags', name: 'ApplePay', size: '24' },
      { category: 'payment-flags', name: 'ApplePay', size: '48' },
    ];
    const result = generateLitIndex(files);
    expect(result).toContain('export { renderApplePay16 }');
    expect(result).toContain('export { renderApplePay24 }');
    expect(result).toContain('export { renderApplePay48 }');
  });

  it('generateReactIndex sorts by name+size', () => {
    const files: SVGFile[] = [
      { category: 'zebra', name: 'Zoo', size: '32' },
      { category: 'apple', name: 'Arrow', size: '16' },
      { category: 'banana', name: 'Ball', size: '24' },
    ];
    const result = generateReactIndex(files);
    const lines = result.split('\n').filter(l => l.trim());
    expect(lines.length).toBe(3);
    expect(result).toContain('Arrow16');
    expect(result).toContain('Ball24');
    expect(result).toContain('Zoo32');
  });

  it('generateLitIndex handles single icon', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Single', size: '32' },
    ];
    const result = generateLitIndex(files);
    expect(result).toBe("export { renderSingle32 } from './generic/renderSingle32';");
  });

  it('generateReactIndex handles icon names with numbers', () => {
    const files: SVGFile[] = [
      { category: 'generic', name: 'Icon2D', size: '32' },
      { category: 'generic', name: 'Icon3D', size: '24' },
    ];
    const result = generateReactIndex(files);
    expect(result).toContain('Icon2D32');
    expect(result).toContain('Icon3D24');
  });
});
