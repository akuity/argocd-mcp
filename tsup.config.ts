import { defineConfig } from "tsup"
import packageJSON from "./package.json" with { type: "json" };

export default defineConfig({
  entry: {
    [packageJSON.name]: "src/index.ts",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm"],
  target: "es2016",
  dts: true
})