import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
    sourcemap: true,
  },
  // Regex form externalizes every `lit/...` subpath import (directives, decorators,
  // etc.), not just the one directive in use today — avoids this silently breaking
  // again (bundling `lit` internals into dist with a physical node_modules path)
  // the next time a generator swaps which lit/directives/*.js it imports.
  external: ["lit", /^lit\//],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
