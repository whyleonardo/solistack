import { env } from "@soli/env/web"

const LoginPage = async () => {
  return (
    <div className="container flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tight">{env.AUTH_SECRET}</h1>
    </div>
  )
}

export default LoginPage
