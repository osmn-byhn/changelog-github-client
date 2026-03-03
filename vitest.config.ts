import { defineConfig } from "vitest/config";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@osmn-byhn/changelog-github-core': path.resolve(dirname, './node_modules/@osmn-byhn/changelog-github-core/src/index.ts'),
    },
  },
});