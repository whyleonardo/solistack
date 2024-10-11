import { CalendarIcon } from "@radix-ui/react-icons"
import type { Meta, StoryObj } from "@storybook/react"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "."
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Button } from "../button"

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
}

export default meta

type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args} openDelay={2} closeDelay={2}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework - created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 size-4 opacity-70" />{" "}
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
