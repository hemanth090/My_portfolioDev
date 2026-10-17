import { createContext, useContext } from 'react'

export type ToastApi = { notify: (message: string) => void }

export const ToastContext = createContext<ToastApi>({ notify: () => {} })

export function useToast(): ToastApi {
  return useContext(ToastContext)
}
