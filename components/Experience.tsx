"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { useT } from "@/lib/i18n";

export default function Experience() {
  const { t } = useT();

  return (
    <SectionWrapper id="experience" number="05" title={t.sections.expTitle} cmd={t.sections.expCmd}>
      <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
        <span className="text-[var(--accent)]">{">"}</span> {t.sections.expCatCmd}
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => {
          const translated = t.experiences.find((e) => e.id === exp.id);
          const role = translated?.role ?? exp.role;
          const description = translated?.description ?? exp.description;
          const tags = translated?.tags ?? exp.tags;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 font-mono"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] uppercase tracking-wide">{role}</h3>
                    {exp.current && (
                      <span className="text-[9px] font-bold text-[var(--accent)] border border-[var(--accent)] px-1.5 py-0.5 uppercase tracking-widest glow-text flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] inline-block animate-pulse" />
                        {t.badges.live}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--accent)] uppercase tracking-wider">
                    <span className="text-[var(--muted)]">@</span>{exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-[10px] text-[var(--muted)] mt-0.5 uppercase tracking-wider">
                      <span className="text-[var(--accent)]">▸</span> {exp.location}
                    </p>
                  )}
                </div>
                <span className="text-[10px] text-[var(--accent)] uppercase tracking-widest whitespace-nowrap border border-[var(--accent)]/30 px-2 py-1">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-[var(--text-soft)] leading-relaxed mb-4 border-l-2 border-[var(--accent)]/30 pl-3">
                <span className="text-[var(--accent)]">{">"}</span> {description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border border-[var(--accent)]/20 text-[var(--accent)] bg-[var(--accent)]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
