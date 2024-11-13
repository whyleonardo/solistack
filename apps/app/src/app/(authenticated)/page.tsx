import { UserButton } from "@/features/auth/components/user-button"
import { getSession } from "@/features/auth/utils/get-session"
import { protectRoute } from "@/features/auth/utils/protect-route"

import { createMetadata } from "@solistack/seo/metadata"

export const metadata = createMetadata({
  title: "Authenticated Route",
  description: "My page description",
  image: "",
})

const HomePage = async () => {
  const session = await getSession()

  if (!session) {
    protectRoute({ redirectUrl: "/sign-in" })
  }

  return (
    <main>
      <UserButton />
    </main>
  )
}

export default HomePage
