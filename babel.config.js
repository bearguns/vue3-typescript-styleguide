module.exports = {
  presets: [
    "@babel/preset-typescript",
    "vue",
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        targets: {
          node: "current",
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
  ignore: ["node_modules"],
};
