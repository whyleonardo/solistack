import { listFiles } from "@soli/utils/filesystem"

import fs from "fs"
import { mkdir } from "fs/promises"
import path from "path"

const transformNewComponents = async () => {
  const componentsFolderExists = fs.existsSync("./src/components")

  if (!componentsFolderExists) {
    return console.log("There are no new components to move!")
  }

  const files = await listFiles("./src/components/ui")

  if (!files.length) {
    return console.log("There are no new components to move!")
  }

  files.forEach(async (c) => {
    const [componentName] = c.name.split(".")

    const componentExistsInDestination = fs.existsSync(
      `./src/components/ui/${componentName}/index.tsx`
    )

    if (!componentExistsInDestination) {
      await mkdir(`./src/components/ui/${componentName}`)
    }

    const sourceDir = "src/components/ui"
    const targetDir = `src/components/ui/${componentName}`

    const oldPath = path.join(sourceDir, c.name)
    const newPath = path.join(targetDir, "index.tsx")

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

await transformNewComponents()
