import React, { useEffect, useState } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.style.transition = "background-color 0.3s, color 0.3s";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.transition = "background-color 0.3s, color 0.3s";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      {isDarkMode ? (
        <>
          <BsSun /> Light Mode
        </>
      ) : (
        <>
          <BsMoonFill /> Dark Mode
        </>
      )}
    </button>
  );
};
export default ThemeToggle;