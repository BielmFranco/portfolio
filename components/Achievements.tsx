"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" number="06" title="Jornada">
      <div className="relative max-w-3xl">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

        <div className="space-y-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#0d0d10] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="card p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-cyan-400">{item.year}</span>
                  <span className="text-white/20">·</span>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
