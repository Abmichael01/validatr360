import { create } from "zustand"

interface WalletStore {
  balance: number
  setBalance: (balance: number) => void
}

export const useWalletStore = create<WalletStore>((set) => ({
  balance: 567,
  setBalance: (balance) => set({ balance }),
}))

