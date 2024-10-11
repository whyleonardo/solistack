import type { Meta, StoryObj } from "@storybook/react"

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "."

const meta: Meta<typeof Carousel> = {
  component: Carousel,
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Basic: Story = {
  render: (args) => (
    <div className="relative flex h-screen w-full items-center justify-center border">
      <div className="min-w-[400px]">
        <Carousel {...args}>
          <CarouselContent>
            <CarouselItem className="p-4">
              <div className="flex aspect-square min-h-[260px] items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                1
              </div>
            </CarouselItem>
            <CarouselItem className="p-4">
              <div className="flex aspect-square min-h-[260px] items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                2
              </div>
            </CarouselItem>
            <CarouselItem className="p-4">
              <div className="flex aspect-square min-h-[260px] items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                3
              </div>
            </CarouselItem>
            <CarouselItem className="p-4">
              <div className="flex aspect-square min-h-[260px] items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                4
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator />
        </Carousel>
      </div>
    </div>
  ),
}

export const CustomSize: Story = {
  render: (args) => (
    <div className="relative flex h-screen w-full items-center justify-center border">
      <div className="min-w-[400px]">
        <Carousel {...args}>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-l border-t border-zinc-200 dark:border-zinc-800">
                1
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                2
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                3
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                4
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                5
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                6
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex aspect-square min-h-[160px] items-center justify-center rounded-md border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                7
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>
    </div>
  ),
}
