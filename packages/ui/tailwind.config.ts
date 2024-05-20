import { soliTailwindPreset } from "@soli/tailwind"

import { type Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  presets: [soliTailwindPreset]
}

export default config
