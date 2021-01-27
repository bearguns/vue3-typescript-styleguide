import path from "path";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-css-only";
import sass from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";

export default {
  input: path.resolve(__dirname, "src/index.ts"),
  external: ["vue", /@babel\/runtime/],
  output: {
    format: "esm",
    file: "dist/index.js",
  },
  plugins: [
    sass(),
    css(),
    vue({ css: false }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".vue"],
      babelHelpers: "runtime",
    }),
    commonjs(),
    copy({
      targets: [
        {
          src: "src/scss/*",
          dest: "dist/scss",
        },
      ],
      hook: "writeBundle",
    }),
  ],
};
