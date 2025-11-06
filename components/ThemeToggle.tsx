"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [tick, setTick] = useState(0);
  const isDark =
    typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  const toggle = () => {
    const next = !isDark;
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTick((t) => t + 1);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="hover:bg-foreground/5 inline-flex h-9 w-9 items-center justify-center rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label="Teema lüliti"
      data-tick={tick}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
