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
  external: ["lit", "lit/directives/unsafe-html.js", "@gabrieleghio/icons-core"],
  plugins: [nodeResolve(), typescript({ tsconfig: "./tsconfig.json" })],
};
