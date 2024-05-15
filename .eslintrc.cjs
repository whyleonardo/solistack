/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: ["apps/**", "packages/**", "config/**"],
  extends: ["@soli/eslint-config/base"],
};

module.exports = config;
