import type { Meta, StoryObj } from "@storybook/react"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "."

const meta: Meta<typeof InputOTP> = {
  component: InputOTP,
  args: {
    maxLength: 6,
    render: () => (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
  },
}

export default meta

type Story = StoryObj<typeof InputOTP>

export const Default: Story = {}

export const Pattern: Story = {
  args: {
    pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
  },
}
