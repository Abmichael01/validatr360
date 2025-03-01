import { create } from "zustand"

type Theme = "dark" | "light" | "system"

type ThemeStore = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const storageKey = "vite-ui-theme"

const getStoredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(storageKey) as Theme
  return storedTheme || "system"
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getStoredTheme(),
  setTheme: (theme) => {
    localStorage.setItem(storageKey, theme)
    set({ theme })

    // Apply theme to <html> tag
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  },
}))

// Initialize theme when app loads
useThemeStore.getState().setTheme(getStoredTheme())
