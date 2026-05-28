"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" number="05" title="DEPLOYMENT">
      <div className="font-mono text-xs text-[#4a8a4f] uppercase tracking-widest mb-6">
        <span className="text-[#00ff41]">{">"}</span> cat ./deployment_history.log
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
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
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">{exp.role}</h3>
                  {exp.current && (
                    <span className="text-[9px] font-bold text-[#00ff41] border border-[#00ff41] px-1.5 py-0.5 uppercase tracking-widest glow-text flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#00ff41] inline-block animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#00ff41] uppercase tracking-wider">
                  <span className="text-[#4a8a4f]">@</span>{exp.company}
                </p>
                {exp.location && (
                  <p className="text-[10px] text-[#4a8a4f] mt-0.5 uppercase tracking-wider">
                    <span className="text-[#00ff41]">▸</span> {exp.location}
                  </p>
                )}
              </div>
              <span className="text-[10px] text-[#00ff41] uppercase tracking-widest whitespace-nowrap border border-[#00ff41]/30 px-2 py-1">
                {exp.period}
              </span>
            </div>
            <p className="text-xs text-[#a8e6a8] leading-relaxed mb-4 border-l-2 border-[#00ff41]/30 pl-3">
              <span className="text-[#00ff41]">{">"}</span> {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border border-[#00ff41]/20 text-[#00ff41] bg-[#00ff41]/5"
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
