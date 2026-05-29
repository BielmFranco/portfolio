"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useT, LANGS, Lang } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative font-mono">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1 text-xs uppercase tracking-widest border border-[#00ff41]/30 hover:border-[#00ff41] hover:bg-[#00ff41]/5 text-[#00ff41] transition-all rounded-sm"
        aria-label="Change language"
      >
        <Globe className="w-3 h-3" />
        <span>{current.label}</span>
        <span className="text-[10px] opacity-70">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 min-w-[120px] bg-[#050807] border border-[#00ff41]/30 rounded-sm overflow-hidden z-50"
            style={{ boxShadow: "0 0 16px rgba(0, 255, 65, 0.2)" }}
          >
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as Lang);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest text-left transition-colors ${
                    active
                      ? "text-[#00ff41] bg-[#00ff41]/10 glow-text"
                      : "text-[#4a8a4f] hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span className="opacity-50">{l.code}/</span>
                  <span>{l.label}</span>
                  {active && <span className="ml-auto text-[10px]">●</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
