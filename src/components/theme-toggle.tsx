"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY } from "@/lib/theme";

type Theme = "light" | "dark";
let preference: Theme | null = null;
const changeEvent = "arisu-theme-change";
const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";
function readPreference() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    preference = isTheme(saved) ? saved : null;
  } catch {
    /* Keep the current in-memory choice when storage is unavailable. */
  }
}
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(changeEvent));
}
function subscribe(onChange: () => void) {
  readPreference();
  const system = matchMedia("(prefers-color-scheme: dark)");
  const resolve = () =>
    applyTheme(preference ?? (system.matches ? "dark" : "light"));
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY || event.key === null) {
      readPreference();
      resolve();
    }
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  system.addEventListener("change", resolve);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
    system.removeEventListener("change", resolve);
  };
}
const getSnapshot = () => document.documentElement.dataset.theme ?? "dark";
const getServerSnapshot = () => "system";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  function toggle() {
    const next: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* Theme still works without storage. */
    }
    applyTheme(next);
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark mode"
      onClick={toggle}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-option-light" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <span>Light</span>
      </span>
      <span className="theme-option-dark" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.6 13.5A8.7 8.7 0 0 1 10.5 3.4 8.7 8.7 0 1 0 20.6 13.5Z" />
        </svg>
        <span>Dark</span>
      </span>
    </button>
  );
}
