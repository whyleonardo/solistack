import { soliTailwindPreset } from "@soli/tailwind"

import type { Config } from "tailwindcss"

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/dist/**/*.js"],
  darkMode: "class",
  presets: [soliTailwindPreset]
} satisfies Config

export default config
