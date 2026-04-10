import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "../../packages/lit/src",
    sourcemap: true,
  },
  external: ["lit", "lit/directives/unsafe-html.js"],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        rootDir: "../../",
      },
    }),
  ],
};
