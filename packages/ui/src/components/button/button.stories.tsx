import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons"
import type { Meta, StoryObj } from "@storybook/react"

import { Button, buttonVariants } from "."

const buttonSizeOptions = Object.keys(buttonVariants.variants.size).filter(
  (size) => size !== "icon"
)

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    size: {
      options: buttonSizeOptions,
      control: {
        type: "radio",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Icon: Story = {
  args: {
    children: <ChevronRightIcon />,
    variant: "outline",
    size: "icon",
  },
}

export const Link: Story = { args: { variant: "link" } }

export const RingHover: Story = { args: { variant: "ringer" } }

export const Shine: Story = { args: { variant: "shine" } }

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <EnvelopeOpenIcon className="mr-2 size-4" /> Login with Email
      </>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    disabled: true,
    children: <>Loading</>,
  },
  argTypes: {
    children: { control: { disable: true } },
  },
}

export const ExpandedIconRight: Story = {
  args: {
    variant: "expandIcon",
    Icon: ArrowRightIcon,
    iconPlacement: "right",
    children: "Icon Right",
  },
}

export const ExpandedIconLeft: Story = {
  args: {
    variant: "expandIcon",
    Icon: ArrowLeftIcon,
    iconPlacement: "left",
    children: "Icon Left",
  },
}
