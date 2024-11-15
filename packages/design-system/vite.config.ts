// TODO: FIX THIS
import { buildConfig, mergeConfig, reactConfig } from "@solistack/vite"

import pkg from "./package.json"

export default mergeConfig(
  // Vite config to support React.
  reactConfig,
  /**
   * This allows us to use vite to also bundle this package using the `vite build` script, it will also emit TS declaration files using the dts plugin.
   */
  buildConfig({
    lib: {
      entry: [
        "./src/lib/cn",
        "./src/hooks/**",
        "./src/components/ui/**",
        "./src/components/icons.tsx",
        "./src/components/credenza.tsx",
      ],
      fileName: (format, entryName) => {
        const filePath = entryName.split("/src/").at(-1)

        return `${filePath}.${format === "es" ? "js" : "cjs"}`
      },
    },
    external: {
      externalizeDeps: Object.keys(pkg.dependencies),
    },
    dts: {
      exclude: [
        "./postcss.config.js",
        "./src/providers/**",
        "./src/components/status.tsx",
        "./src/lib/fonts",
        "./src/utils/toast-handle-error.ts",
        "./postcss.config.js",
      ],
    },
  })
)
