import { $, file, write } from "bun"

await $`echo "Installing dependencies...`
await $`bun install`

await $`echo Copying .env.example files to .env files...`
await $`cp apps/api/.env.example apps/api/.env`
await $`cp apps/studio/.env.example apps/studio/.env`
await $`cp apps/app/.env.example apps/app/.env`
await $`cp packages/db/.env.example packages/db/.env`

await $`echo Setup complete! Deleting scripts folder...`
await $`rm -rf scripts`

const packageJson = await JSON.parse(await file("package.json").text())

// biome-ignore lint/performance/noDelete: this will run only on project creation
delete packageJson.scripts.setup

await write("package.json", JSON.stringify(packageJson, null, 2))
