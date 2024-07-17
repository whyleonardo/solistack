import type { Meta, StoryObj } from "@storybook/react"

import { ChevronRightIcon, Loader, Mail } from "lucide-react"

import { Button } from "./"

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default"
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link"
      ],
      control: { type: "select" }
    },
    asChild: {
      control: {
        disable: true
      }
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: "lg"
  }
}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Destructive: Story = { args: { variant: "destructive" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: (
      <>
        <ChevronRightIcon className="h-4 w-4" />
      </>
    )
  },
  argTypes: {
    children: { control: { disable: true } }
  }
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </>
    )
  },
  argTypes: {
    children: { control: { disable: true } }
  }
}

export const Loading: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: (
      <>
        <Loader className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    )
  },
  argTypes: {
    children: { control: { disable: true } }
  }
}
