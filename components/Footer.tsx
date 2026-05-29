"use client";

import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#00ff41]/20 py-6 px-6 font-mono">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#4a8a4f] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="pulse-dot" />
          <span className="text-[#00ff41]">[ {t.footer} ]</span>
        </div>
        <p>© {year} · Gabriel Moraes Franco · BUILT_WITH(Next.js, TS, Tailwind)</p>
      </div>
    </footer>
  );
}
