/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: [
    "node_modules",
    "dist",
    ".next",
    ".astro",
    "!.storybook",
    "storybook-static"
  ],
  env: {
    es2022: true,
    node: true
  },
  extends: ["prettier"],
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx",
        "**/*.js",
        "**/*.jsx",
        "**/*.mjs",
        "**/*.cjs"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "no-console": "warn",
        "no-alert": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" }
        ]
      }
    }
  ]
}

module.exports = config
