"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex items-center w-[56px] h-[28px] rounded-full transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        background: isDark ? "#0a0a0a" : "#f0f4fa",
        boxShadow: isDark
          ? "inset 0 1px 3px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)"
          : "inset 0 1px 3px rgba(0, 102, 255, 0.15), 0 0 0 1px rgba(0, 102, 255, 0.12)",
      }}
    >
      {/* Right-side icon (visible when dark — moon + stars) */}
      <span
        className="absolute right-2 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0 }}
        aria-hidden
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8e8ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#e8e8ea" />
        </svg>
        <svg width="6" height="6" viewBox="0 0 24 24" fill="#e8e8ea" className="absolute -right-1 -top-1" aria-hidden>
          <polygon points="12,2 14,9 21,12 14,15 12,22 10,15 3,12 10,9" />
        </svg>
      </span>

      {/* Left-side icon (visible when light — sun) */}
      <span
        className="absolute left-2 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1 }}
        aria-hidden
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0a1929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="#0a1929" />
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </svg>
      </span>

      {/* Sliding ball */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[3px] w-[22px] h-[22px] rounded-full"
        style={{
          left: isDark ? "3px" : "calc(100% - 25px)",
          background: isDark
            ? "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)"
            : "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)",
          boxShadow: isDark
            ? "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.6)"
            : "0 2px 6px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
        }}
      />
    </button>
  );
}
