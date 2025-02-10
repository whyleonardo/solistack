import type { Metadata } from "next/types"

import { Button } from "@solistack/design-system/primitives/button"
import { Typography } from "@solistack/design-system/primitives/typography"
import { createMetadata } from "@solistack/seo/metadata"

import { SignIn } from "@/features/auth/components/sign-in"
import { getSession } from "@/features/auth/utils/get-session"
import { protectRoute } from "@/features/auth/utils/protect-route"

const title = "Welcome!"
const description = "Use your OAuth account to login"

export const metadata: Metadata = createMetadata({ title, description })

const SignInPage = async () => {
  const session = await getSession()

  if (session) {
    protectRoute({ redirectUrl: "/" })
  }

  return (
    <div className="flex flex-col space-y-4 text-center">
      <div>
        <Typography as="h1" variant="h2">
          {title}
        </Typography>
        <Typography variant="muted" as="p" className="">
          {description}
        </Typography>
      </div>

      <SignIn />
    </div>
  )
}

export default SignInPage
