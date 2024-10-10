import { solistackTailwindPreset } from "@solistack/tailwind"

import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  presets: [solistackTailwindPreset],
}

export default config
