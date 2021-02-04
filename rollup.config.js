import path from "path";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-css-only";
import sass from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";

const extensions = [".js", ".jsx", ".vue", ".ts"];
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
      extensions,
      babelHelpers: "runtime",
      presets: ["@babel/preset-typescript", "@babel/preset-env"],
      plugins: ["@babel/transform-runtime"],
    }),
    resolve({
      extensions,
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
