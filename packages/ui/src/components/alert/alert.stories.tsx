import type { Meta, StoryObj } from "@storybook/react"

import { Alert, AlertDescription, AlertTitle, alertVariants } from "."

const alertOptions = Object.keys(alertVariants.variants.variant)

const meta: Meta<typeof Alert> = {
  component: Alert,
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      options: alertOptions,
      control: {
        type: "select",
      },
    },
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert!</AlertTitle>

      <AlertDescription>Hello! I'm Alert!</AlertDescription>
    </Alert>
  ),
}

export default meta

type Story = StoryObj<typeof Alert>

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
