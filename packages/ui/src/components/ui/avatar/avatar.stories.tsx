import { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarFallback, AvatarImage } from "./"

const meta: Meta<typeof AvatarImage> = {
  title: "Primitives/Avatar",
  component: AvatarImage,
  args: {
    src: "https://github.com/whyleonardo.png",
    alt: "whyleonardo"
  },
  render: (args) => (
    <Avatar>
      <AvatarImage {...args} />
      <AvatarFallback>W</AvatarFallback>
    </Avatar>
  )
}

export default meta

type Story = StoryObj<typeof AvatarImage>

export const Default: Story = {}
export const Fallback: Story = {
  args: {
    src: ""
  }
}
