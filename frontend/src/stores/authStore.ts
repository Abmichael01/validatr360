import { create } from "zustand"
import { persist } from "zustand/middleware"
import { UserData, loginUser, logoutUser, getCurrentUser, registerUser, UserCredentials, RegisterData } from "@/api/authService"

interface AuthState {
  user: UserData | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (credentials: UserCredentials) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        console.log('Login attempt with:', credentials.email);
        set({ isLoading: true, error: null });
        try {
          const userData = await loginUser(credentials);
          console.log('Login successful:', userData);
          set({ user: userData, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          console.error('Login failed:', error.response?.data || error);
          set({ 
            isLoading: false, 
            error: error.response?.data?.message || 'Login failed. Please check your credentials.'
          });
        }
      },

      register: async (userData) => {
        console.log('Register attempt with:', userData.email);
        set({ isLoading: true, error: null });
        try {
          const newUser = await registerUser(userData);
          console.log('Registration successful:', newUser);
          set({ user: newUser, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          console.error('Registration failed:', error.response?.data || error);
          set({ 
            isLoading: false,
            error: error.response?.data?.message || 'Registration failed. Please try again.'
          });
        }
      },

      logout: async () => {
        console.log('Logout attempt');
        set({ isLoading: true, error: null });
        try {
          await logoutUser();
          console.log('Logout successful');
          set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error: any) {
          console.error('Logout failed:', error.response?.data || error);
          // Even if the backend call fails, we should still log the user out on the frontend
          set({ 
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: error.response?.data?.message || 'Logout failed but cleared local session.'
          });
        }
      },

      checkAuth: async () => {
        // If already authenticated and have user data, skip the check
        if (get().isAuthenticated && get().user) {
          console.log('Already authenticated, skipping check');
          return;
        }
        
        // If already loading, don't trigger another request
        if (get().isLoading) {
          console.log('Authentication check already in progress, skipping');
          return;
        }
        
        console.log('Checking authentication');
        set({ isLoading: true, error: null });
        try {
          const userData = await getCurrentUser();
          console.log('User authenticated:', userData);
          set({ user: userData, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          console.log('User not authenticated:', error.response?.status);
          // If this fails, the user is not authenticated - this is normal and not an error to display
          set({ user: null, isAuthenticated: false, isLoading: false, error: null });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", // name for the localStorage item
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

