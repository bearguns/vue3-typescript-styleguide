import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";
import markdown from "vite-plugin-markdown";

export default defineConfig({
  plugins: [vue(), markdown({ mode: "html" })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Styleguide",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        copy({
          targets: [{ src: "src/scss/**", dest: "dist/scss" }],
          hook: "writeBundle",
        }),
      ],
    },
  },
});
