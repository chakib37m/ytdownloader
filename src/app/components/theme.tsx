"use client"
import React from "react";
import { useState } from "react";


export default function ThemeToggle(){
    const [theme, setTheme] = useState("dark");
    if (theme == "dark") {
        document.documentElement.classList.add("light");
    } else {
        document.documentElement.classList.remove("light");
    }
    return (
        <label className="theme-toggle">
            <input type="checkbox" checked={theme === "dark"} onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
            <span className="toggle-track">
            <span className="toggle-thumb"></span>
        </span>
        </label>
    )

}