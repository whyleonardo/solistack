/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "@soli/eslint-config/base",
    "@soli/eslint-config/next",
    "@soli/eslint-config/react"
  ]
}

module.exports = config
