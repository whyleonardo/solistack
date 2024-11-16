import { UnauthorizedError } from "@/errors/unauthorized-error"

import { getSession } from "@solistack/auth/client"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const { data } = await getSession()

      if (!data) {
        throw new UnauthorizedError()
      }

      const { user } = data

      return user
    },
  })

  return query
}
