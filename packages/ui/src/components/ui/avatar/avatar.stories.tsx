import { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarFallback, AvatarImage } from "./"

const meta: Meta<typeof AvatarImage> = {
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

type Story = StoryObj<typeof AvatarImage>

export const Default: Story = {}
export const Fallback: Story = {
  args: {
    src: ""
  }
}

export default meta
