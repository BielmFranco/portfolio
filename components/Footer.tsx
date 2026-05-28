"use client";

import { Brain } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Brain className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">
            Gabriel<span className="text-purple-400">.ai</span>
          </span>
        </div>
        <p className="text-xs text-slate-600">
          © {year} Gabriel Moraes Franco. Todos os direitos reservados.
        </p>
        <p className="text-xs text-slate-600">
          Feito com <span className="text-purple-400">♥</span> e Next.js 15
        </p>
      </div>
    </footer>
  );
}
