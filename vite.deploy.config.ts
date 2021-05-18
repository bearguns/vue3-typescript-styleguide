import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import fonts from "vite-plugin-fonts";
import markdown from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./site",
  },
  plugins: [
    vue(),
    markdown({ mode: "html" }),
    image(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif", "**/*.woff", "**/*.woff2"],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
      publicPath: "/public",
    }),
    fonts({
      google: {
        display: "block",
        families: [
          {
            name: "Source Sans Pro",
            styles: "wght@200;400;600",
          },
          {
            name: "IBM Plex Sans",
            styles: "wght@300;400;600",
          },
        ],
      },
    }),
  ],
});
