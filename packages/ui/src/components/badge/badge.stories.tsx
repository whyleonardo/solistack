import type { Meta, StoryObj } from "@storybook/react"

import { Badge, badgeVariants } from "."

const badgeOptions = Object.keys(badgeVariants.variants.variant)

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      options: badgeOptions,
      control: {
        type: "select",
      },
    },
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}
