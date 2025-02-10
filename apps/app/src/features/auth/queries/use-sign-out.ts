import { useRouter } from "next/navigation"

import { signOut } from "@solistack/auth/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useSignOut = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      await signOut()
    },
    onSuccess: () => {
      router.refresh()
      queryClient.invalidateQueries({ queryKey: ["current-user"] })
    },
  })

  return mutation
}
