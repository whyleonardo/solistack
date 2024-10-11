import { useState } from "react"
import type { ComponentProps } from "react"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import type { Meta, StoryObj } from "@storybook/react"

import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "."
import { Button } from "../button"
import { Input } from "../input"
import { Typography } from "../typography"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const FormExample = (props: ComponentProps<typeof Form>) => {
  const [username, setUsername] = useState("")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  /**
   * Handles the form submission.
   * @param values The form values.
   */
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.info(values)
    setUsername(values.username)
  }

  return (
    <Form {...props} {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {username && (
        <Typography variant="muted" className="mt-6">
          You have submitted: {username}
        </Typography>
      )}
    </Form>
  )
}

const meta: Meta<typeof Form> = {
  component: Form,
  render: (args) => {
    return <FormExample {...args} />
  },
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {}
