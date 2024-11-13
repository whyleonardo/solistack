"use client"

import { useOAuthSignIn } from "@/features/auth/controllers/use-oauth-sign-in"

import { Icons } from "@solistack/design-system/components/icons"
import { Button } from "@solistack/design-system/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@solistack/design-system/components/ui/card"
import { Separator } from "@solistack/design-system/components/ui/separator"

export const SignInCard = () => {
  const { mutate, isPending } = useOAuthSignIn()

  async function handleGithubLogin() {
    mutate({ provider: "github" })
  }

  return (
    <Card>
      <CardHeader className="items-center gap-y-1">
        <Icons.github className="fill-foreground size-8" />
        <CardTitle>Solistack</CardTitle>
      </CardHeader>

      <div className="px-6 pb-6">
        <Separator />
      </div>

      <CardContent>
        <Button
          type="button"
          size="lg"
          className="w-full"
          onClick={handleGithubLogin}
          disabled={isPending}
        >
          <Icons.github className="fill-background mr-2" />
          Sign in with Github
        </Button>
      </CardContent>
    </Card>
  )
}
