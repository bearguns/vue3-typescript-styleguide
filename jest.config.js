module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\ts$": "ts-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
