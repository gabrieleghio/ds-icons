import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const external = ["react", "react/jsx-runtime"];
const plugins = [
  nodeResolve(),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: false,
    declarationMap: false,
  }),
];

export default [
  // ESM build — preserves modules for tree-shaking in bundlers
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    external,
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        declarationDir: "dist",
        declaration: true,
        declarationMap: true,
      }),
    ],
  },
  // CJS build — single bundle for Jest / Node.js CJS consumers
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    external,
    plugins,
  },
];
