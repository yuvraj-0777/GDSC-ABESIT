import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-sm rounded-lg bottom-32"
      >
       
        {currentTheme === "light" ? (
          <MoonIcon className="h-8 w-8" color="black" />
        ) : (
          <SunIcon className="h-8 w-8" color="white" />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;