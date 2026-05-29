"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { useT } from "@/lib/i18n";

export default function Skills() {
  const { t } = useT();

  return (
    <SectionWrapper id="skills" number="02" title={t.sections.skillsTitle} cmd={t.sections.skillsCmd}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#4a8a4f] uppercase tracking-widest mb-6"
      >
        <span className="text-[#00ff41]">{">"}</span> {t.sections.skillsListCmd}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
      >
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            whileHover={{ y: -3 }}
            className="card p-4 flex flex-col items-center justify-center gap-2 text-center cursor-default"
          >
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">{item.emoji}</span>
            <span className="text-[10px] font-mono font-bold text-[#00ff41] uppercase tracking-wider">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
