import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['scripts/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['scripts/*.ts'],
      exclude: ['scripts/__tests__/**', 'scripts/generate-core-exports.ts'],
    },
  },
});
