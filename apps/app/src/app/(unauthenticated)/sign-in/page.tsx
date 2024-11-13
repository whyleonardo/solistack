import { SignInCard } from "@/features/auth/components/sign-in-card"
import { getSession } from "@/features/auth/utils/get-session"
import { protectRoute } from "@/features/auth/utils/protect-route"

const SignInPage = async () => {
  const session = await getSession()

  if (session) {
    protectRoute({ redirectUrl: "/" })
  }

  return (
    <>
      <SignInCard />
    </>
  )
}

export default SignInPage
