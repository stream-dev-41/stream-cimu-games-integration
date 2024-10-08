const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  rules: {
    // The no-unused-vars rule incorrectly flags enums as unused.
    // To avoid this, use "@typescript-eslint/no-unused-vars" instead.
    // For more details, see: https://github.com/typescript-eslint/typescript-eslint/issues/2621#issuecomment-701970389
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
    es6: true, // to use `Map` feature
  },
};
