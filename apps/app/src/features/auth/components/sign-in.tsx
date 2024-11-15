"use client"

import { Icons } from "@solistack/design-system/icons"

import {
  StatefulSignInButton,
  StatefulSignInIcon,
} from "@/components/stateful-sign-in-button"
import { useOAuthSignIn } from "@/features/auth/controllers/use-oauth-sign-in"

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
        variant="accent"
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
