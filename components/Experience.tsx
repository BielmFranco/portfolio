"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" number="05" title="Experiência">
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  {exp.current && (
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Atual
                    </span>
                  )}
                </div>
                <p className="text-sm text-cyan-400 mt-0.5">{exp.company}</p>
                {exp.location && (
                  <p className="text-xs muted mt-0.5">{exp.location}</p>
                )}
              </div>
              <span className="text-xs muted font-mono whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-sm muted leading-relaxed mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 border border-white/5 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
