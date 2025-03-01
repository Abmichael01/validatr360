// import { create } from "zustand"
// import type { User } from "../types"
// import { getUser } from "@/api/apiEndpoints"

// interface AuthState {
//   user: User | null
//   isAuthenticated: boolean
//   isLoading: boolean
//   setUser: (user: User) => void
//   logout: () => void
//   checkAuth: () => Promise<void>
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   isAuthenticated: false,
//   isLoading: true,

//   setUser: (user) => set({ user, isAuthenticated: true, isLoading: false }),

//   logout: () => set({ user: null, isAuthenticated: false, isLoading: false }),

//   checkAuth: async () => {
//     set({ isLoading: true })
//     try {
//       const user = await getUser() // Assuming you have this function in your API endpoints
//       if (user) {
//         set({ user, isAuthenticated: true, isLoading: false })
//       } else {
//         set({ user: null, isAuthenticated: false, isLoading: false })
//       }
//     } catch (error) {
//       console.error("Error checking auth:", error)
//       set({ user: null, isAuthenticated: false, isLoading: false })
//     }
//   },
// }))

