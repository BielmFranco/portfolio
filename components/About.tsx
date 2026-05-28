"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" number="01" title="Sobre">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="aspect-square w-full max-w-[280px] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 dot-bg opacity-50" />
            <div className="relative text-7xl">👨‍💻</div>
          </div>

          <div className="mt-6 space-y-2">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between text-sm border-b border-white/5 py-2"
              >
                <span className="muted">{fact.label}</span>
                <span className="text-white font-medium text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base muted leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
