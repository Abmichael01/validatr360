import { create } from 'zustand'

interface Transaction {
  type: string
  recipient: string
  amount: number
  network?: string
  plan?: string
}

interface TransactionStore {
  transaction: Transaction | null
  setTransaction: (transaction: Transaction) => void
  closeTransaction: () => void
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transaction: null,
  setTransaction: (transaction) => set({ transaction }),
  closeTransaction: () => set({ transaction: null }),
}))
