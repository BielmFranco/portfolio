"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useT } from "@/lib/i18n";

export default function About() {
  const { t } = useT();

  return (
    <SectionWrapper id="about" number="01" title={t.sections.aboutTitle} cmd={t.sections.aboutCmd}>
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="aspect-square w-full max-w-[280px] relative cyber-grid border border-[var(--accent)]/40 glow-box overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5" />
            <div className="absolute top-2 left-2 text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest">
              HOLO_01.SCAN
            </div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-[var(--accent)]">
              ● REC
            </div>
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[var(--muted)]">
              FREQ 60Hz · 1024x1024
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[var(--muted)]">
              ID#205702794
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-8xl filter drop-shadow-[0_0_15px_var(--accent-glow)]">👨‍💻</div>
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "linear-gradient(transparent 0%, transparent 49%, var(--accent-soft) 50%, transparent 51%)",
              backgroundSize: "100% 200px",
              animation: "scan 4s linear infinite",
            }} />
          </div>

          <div className="mt-6 space-y-1 font-mono text-xs">
            {t.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between border-b border-[var(--accent)]/10 py-2"
              >
                <span className="text-[var(--muted)] uppercase tracking-wider">{fact.label}</span>
                <span className="text-[var(--accent)] text-right">{fact.value}</span>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes scan {
              0% { background-position: 0 -100px; }
              100% { background-position: 0 calc(100% + 100px); }
            }
          `}</style>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 space-y-4 font-mono"
        >
          <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4">
            <span className="text-[var(--accent)]">{">"}</span> {t.sections.aboutCatCmd}
          </div>
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-[var(--text-soft)] leading-relaxed border-l-2 border-[var(--accent)]/30 pl-4">
              <span className="text-[var(--accent)]">[{String(i + 1).padStart(2, "0")}]</span> {p}
            </p>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
