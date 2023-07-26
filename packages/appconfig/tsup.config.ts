import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "es6",
  dts: true,
  minify: !watch,
}));
