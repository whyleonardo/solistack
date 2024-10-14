import { extract, solistackTailwindPreset } from "@solistack/tailwind"

import type { Config } from "tailwindcss"

const config = {
  content: {
    files: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
    extract,
  },
  darkMode: ["class"],
  presets: [solistackTailwindPreset],
} satisfies Config

export default config
