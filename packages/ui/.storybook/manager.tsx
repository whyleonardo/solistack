import { useEffect } from "react"

import "@solistack/assets/src/fonts/stylesheet.css"
import { addons, types, useGlobals } from "@storybook/manager-api"

import theme from "./theme"

addons.setConfig({
  theme,
})

const ExampleToolbar = () => {
  const [globals] = useGlobals()

  useEffect(() => {
    const elements = document.querySelectorAll(".docs-story")

    for (const element of elements) {
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      element.classList.add(globals["theme"] as string)
    }
  }, [globals])

  return null
}

const registerAddons = () => {
  addons.register("docs-theme", () => {
    addons.add("docs-theme-addon", {
      title: "Addon to change docs story theme",
      type: types.TOOL,
      match: ({ viewMode }) => !!viewMode?.match(/^(?:story|docs)$/),
      render: ExampleToolbar,
    })
  })
}

registerAddons()
