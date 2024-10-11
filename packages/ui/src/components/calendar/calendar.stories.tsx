import type { Meta, StoryObj } from "@storybook/react"

import { Calendar } from "."

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  render: () => (
    <Calendar
      mode="single"
      className="size-fit rounded-md border"
      selected={new Date("2024-10-09")}
      onSelect={() => {}}
    />
  ),
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {}
