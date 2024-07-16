import type { Dirent } from "node:fs"
import { readdir, writeFile } from "node:fs/promises"
import { findFarthestFile } from "pkg-types"
import prettier from "prettier"

export async function listDirectories(path: string): Promise<Dirent[]> {
  return (await readdir(path, { withFileTypes: true })).filter((d) =>
    d.isDirectory()
  )
}

export async function listFiles(path: string): Promise<Dirent[]> {
  return (await readdir(path, { withFileTypes: true })).filter((d) =>
    d.isFile()
  )
}

type FormatAndWriteWithPrettierConfig = {
  content: string
} & (
  | {
      filePath?: undefined
      outputFilePath: string
      parser: prettier.BuiltInParserName
    }
  | {
      filePath: string
      outputFilePath?: undefined
      parser?: undefined
    }
)

export async function formatAndWriteWithPrettier(
  args: FormatAndWriteWithPrettierConfig
) {
  const configFile = await findFarthestFile("prettier.config.cjs")
  const prettierConfig = await prettier.resolveConfig(configFile)

  if (!prettierConfig) {
    throw new Error("Prettier config not found")
  }

  function genConfig(): prettier.Config {
    if (args.parser) {
      return {
        ...prettierConfig,
        parser: args.parser
      }
    }

    return {
      ...prettierConfig,
      filepath: args.filePath
    }
  }

  const formatted = await prettier.format(args.content, genConfig())

  function genOutputFilePath() {
    if (args.outputFilePath) {
      return args.outputFilePath
    }

    if (args.filePath) {
      return args.filePath
    }

    throw new Error("outputFilePath or filePath must be provided")
  }

  await writeFile(genOutputFilePath(), formatted)

  return formatted
}
