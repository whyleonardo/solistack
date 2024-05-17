import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  entry: ["./src/filesystem.ts"],
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  minify: !options.watch,
  clean: !options.watch,
  dts: true,
  outDir: "dist",
  external: ["prettier"]
}))
