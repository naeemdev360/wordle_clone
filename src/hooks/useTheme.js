import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.body.setAttribute("data-theme", newTheme);
  };
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.body.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, []);
  return { theme, toggleTheme };
}

export default useTheme;
