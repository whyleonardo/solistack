import type { ReactNode } from "react"

interface UnauthenticatedLayoutProps {
  readonly children: ReactNode
}

const UnauthenticatedLayout = ({ children }: UnauthenticatedLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {children}
    </div>
  )
}

export default UnauthenticatedLayout
