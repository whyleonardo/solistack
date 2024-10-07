import { extract, solistackTailwindPreset } from "@solistack/tailwind"

import type { Config } from "tailwindcss"

const config = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/dist/**/*.js"],
    extract,
  },
  darkMode: ["class"],
  presets: [solistackTailwindPreset],
} satisfies Config

export default config
