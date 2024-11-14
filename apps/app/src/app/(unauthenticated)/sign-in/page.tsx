import type { Metadata } from "next/types"

import { SignIn } from "@/features/auth/components/sign-in"
import { getSession } from "@/features/auth/utils/get-session"
import { protectRoute } from "@/features/auth/utils/protect-route"

import { Typography } from "@solistack/design-system/components/ui/typography"
import { createMetadata } from "@solistack/seo/metadata"

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
