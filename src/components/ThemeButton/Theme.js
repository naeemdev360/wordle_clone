import React from "react";
import useTheme from "../../hooks/useTheme";
import "./style.css";

function Theme() {
  const { theme, toggleTheme } = useTheme();
  const src = theme === "light" ? "sun.png" : "moon.svg";
  return (
    <div className="theme-toggle">
      <img src={`/${src}`} alt={theme} onClick={toggleTheme} />
    </div>
  );
}

export default Theme;
