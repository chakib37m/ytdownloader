"use client";
import React from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = React.useState("dark")
    {
        if (theme == "dark") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    };
    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <div className="theme-toggle">
            <button className="themebtn" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}