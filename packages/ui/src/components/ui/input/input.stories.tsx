import { type Meta, type StoryObj } from "@storybook/react"

import { Upload } from "lucide-react"

import { Input } from "."
import { Button } from "../button"
import { Label } from "../label"
import { Typography } from "../typography"

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  args: {
    type: "email",
    placeholder: "Email"
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const File: Story = {
  name: "File (in progress)",
  args: {
    id: "picture",
    type: "file",
    className: "sr-only"
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        className="group flex flex-col items-center rounded border-2 border-dashed p-8 px-24 hover:cursor-pointer"
        htmlFor="picture"
      >
        <Upload className="text-border size-16" />
        <Typography className="text-base" variant="muted">
          Choose a file
        </Typography>
        <Typography className="text-[0.55rem]" variant="muted">
          (.png, .jpg)
        </Typography>
      </Label>
      <Input className="hover:cursor-pointer" {...args} />
    </div>
  )
}

export const CompactFile: Story = {
  args: {
    id: "picture",
    type: "file"
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>Picture</Label>
      <Input className="hover:cursor-pointer" {...args} />
    </div>
  )
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithLabel: Story = {
  args: {
    id: "Email",
    placeholder: "johndoe@example.com"
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} />
    </div>
  )
}

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
