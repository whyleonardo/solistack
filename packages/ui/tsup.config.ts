import {
  formatAndWriteWithPrettier,
  listDirectories
} from "@soli/utils/filesystem"

import { readPackageJSON } from "pkg-types"
import { defineConfig } from "tsup"

const getComponents = async () => {
  const listOfComponents = (await listDirectories("./src/components/ui")).map(
    (d) => d.name
  )
  return listOfComponents.map((component) => ({
    source: `./src/components/ui/${component}/index.tsx`,
    export: `./${component}`
  }))
}

async function getEntries() {
  const primitives = await getComponents()

  return [
    ...primitives,
    {
      source: "./src/utils/cn.ts",
      export: "./cn"
    }
  ]
}

export default defineConfig(async (options) => ({
  entry: (await getEntries()).map((entry) => entry.source),
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  minify: !options.watch,
  clean: !options.watch,
  publicDir: true,
  experimentalDts: true,
  tsconfig: "./tsconfig.build.json",
  outDir: "dist",
  async onSuccess() {
    const pkg = await readPackageJSON()

    pkg.exports = {}

    const entries = await getEntries()

    entries.forEach((entry) => {
      if (typeof pkg.exports === "object") {
        pkg.exports = {
          ...pkg.exports,
          [entry.export]: {
            import: {
              types: entry.source
                .replace("src", "dist")
                .replace(/.tsx?$/, ".d.ts"),
              default: entry.source
                .replace("src", "dist")
                .replace(/\.tsx?$/, ".js")
            }
          }
        } as Record<string, string | Record<string, string>>
      }
    })

    pkg.exports = { ...pkg.exports, "./css": "./dist/globals.css" }

    await formatAndWriteWithPrettier({
      content: JSON.stringify(pkg, null, 2),
      filePath: "./package.json"
    })
  }
}))
