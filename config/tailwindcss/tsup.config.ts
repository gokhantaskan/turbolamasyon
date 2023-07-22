import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "node18",
  dts: false,
  minify: !watch,
}));
