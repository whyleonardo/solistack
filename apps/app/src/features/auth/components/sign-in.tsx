"use client"

import { useOAuthSignIn } from "@/features/auth/controllers/use-oauth-sign-in"

import { Icons } from "@solistack/design-system/components/icons"
import {
  StatefulSignInButton,
  StatefulSignInIcon,
} from "@solistack/design-system/components/stateful-sign-in-button"

export const SignIn = () => {
  const {
    mutate: mutateGithub,
    isPending: isPendingGithub,
    isSuccess,
  } = useOAuthSignIn()

  async function handleGithubLogin() {
    mutateGithub({ provider: "github" })
  }

  return (
    <div className="flex flex-col gap-2">
      <StatefulSignInButton
        size="lg"
        variant="outline"
        onClick={handleGithubLogin}
        disabled={isPendingGithub}
        isSuccess={isSuccess}
      >
        <StatefulSignInIcon icon={Icons.github} />
        Login with GitHub
      </StatefulSignInButton>
    </div>
  )
}
