"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs muted">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-mono">&gt;_</span>
          <span>Gabriel Moraes Franco</span>
        </div>
        <p>© {year} — Construído com Next.js 16 + TailwindCSS</p>
      </div>
    </footer>
  );
}
