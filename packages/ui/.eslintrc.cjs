/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "@soli/eslint-config/base",
    "@soli/eslint-config/react",
    "@soli/eslint-config/storybook"
  ]
}

module.exports = config
