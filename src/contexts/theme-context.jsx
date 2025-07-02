import { createContext, useEffect, useContext, useState } from "react";

// type Theme = "light" | "dark" | "system";
// type ThemeContextType = [AvailableThemes, Theme, (theme: Theme) => void];
// type AvailableThemes = "light" | "dark";
//
export const ThemeContext = createContext(
  // <ThemeContextType>
  ["dark", "system", () => {}],
);

export const ThemeProvider = (
  { children },
  // : { children: ReactNode }
) => {
  const themeFromLocalStorage =
    localStorage.getItem("theme") ??
    // as Theme
    "system";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const [selectedTheme, setSelectedTheme] = useState(
    // Theme
    themeFromLocalStorage,
  );
  const [theme, setTheme] = useState(
    // AvailableThemes
    themeFromLocalStorage === "system"
      ? systemTheme.matches
        ? "dark"
        : "light"
      : themeFromLocalStorage,
  );

  const onThemeChange = (
    newTheme,
    // : Theme
  ) => {
    setSelectedTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      setTheme(systemTheme.matches ? "dark" : "light");
    } else {
      setTheme(
        newTheme,
        // as AvailableThemes
      );
    }
  };

  const onSystemThemeChange = (
    e,
    // : MediaQueryListEvent
  ) => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  useEffect(() => {
    if (selectedTheme === "system") {
      systemTheme.addEventListener("change", onSystemThemeChange);
    } else {
      systemTheme.removeEventListener("change", onSystemThemeChange);
    }

    return () => {
      systemTheme.removeEventListener("change", onSystemThemeChange);
    };
  }, [selectedTheme]);

  return (
    <ThemeContext value={[theme, selectedTheme, onThemeChange]}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeContext;
};
