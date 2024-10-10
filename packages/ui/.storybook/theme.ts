import { create } from "@storybook/theming/create"

export default create({
  base: "dark",
  // Typography
  fontBase: "var(--font-geist-sans)",
  fontCode: "var(--font-geist-mono)",

  brandTitle: "Solistack | Storybook",
  // brandUrl: "https://midday.ai",
  // brandImage: "https://midday.ai/email/logo-footer-dark.png",
  // brandTarget: "_self",

  appContentBg: "#171717",
  appBg: "#171717",
  barBg: "#171717",
  inputBg: "#262626",
  buttonBg: "#262626",
  booleanBg: "#262626",
  appBorderColor: "#262626",
  appBorderRadius: 6,
  inputBorderRadius: 6,
  inputBorder: "#737373",
  buttonBorder: "#737373",
  textColor: "#f5f5f5",
  colorSecondary: "#c084fc",
  colorPrimary: "#c084fc",
  barTextColor: "#f5f5f5",
  barHoverColor: "#c084fc",
  barSelectedColor: "#c084fc",
  inputTextColor: "#f5f5f5",
  textMutedColor: "#e5e5e5",
  textInverseColor: "#171717",
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}) as any
