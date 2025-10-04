"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined" || typeof matchMedia === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const htmlEl = document.documentElement;
  htmlEl.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("theme")) as Theme | null;
    const initial = stored ?? getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/20 px-3 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
    >
      {theme === "dark" ? (
        // Sun icon
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M12 4V2M12 22v-2M4.93 4.93L3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        // Moon icon
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )}
    </button>
  );
}
