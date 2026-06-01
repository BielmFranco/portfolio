"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { useT } from "@/lib/i18n";

export default function Achievements() {
  const { t } = useT();

  return (
    <SectionWrapper id="achievements" number="06" title={t.sections.achTitle} cmd={t.sections.achCmd}>
      <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
        <span className="text-[var(--accent)]">{">"}</span> {t.sections.achTailCmd}
      </div>

      <div className="relative max-w-3xl font-mono">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" />

        <div className="space-y-3">
          {achievements.map((item, i) => {
            const translated = t.achievements.find((a) => a.id === item.id);
            const title = translated?.title ?? item.title;
            const description = translated?.description ?? item.description;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2.5 w-4 h-4 border border-[var(--accent)] bg-[var(--background)] flex items-center justify-center" style={{ boxShadow: "0 0 8px var(--accent-glow)" }}>
                  <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                </div>

                <div className="card p-3">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] text-[var(--accent)] uppercase tracking-widest border border-[var(--accent)]/40 px-1.5 py-0.5">
                      {item.year}
                    </span>
                    <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wide">{title}</h3>
                  </div>
                  <p className="text-[10px] text-[var(--text-soft)] leading-relaxed">
                    <span className="text-[var(--accent)]">▸</span> {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
