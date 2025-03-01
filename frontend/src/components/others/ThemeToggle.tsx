import { useThemeStore } from "@/stores/themeStore";
import { Moon, Sun } from "lucide-react";
import React from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
