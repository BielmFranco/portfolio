"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GraduationCap,
  Rocket,
  Zap,
  Code2,
  CloudCog,
} from "lucide-react";
import { about } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Ciência da Computação": GraduationCap,
  "IA Generativa": Brain,
  "AI Agents": Rocket,
  "Azure AI Foundry": CloudCog,
  Python: Code2,
  "Automação Inteligente": Zap,
};

export default function About() {
  return (
    <SectionWrapper
      id="about"
      label="Sobre mim"
      title="Quem sou eu"
      subtitle="Desenvolvedor apaixonado por IA em início de uma jornada promissora"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {about.highlights.map((item, i) => {
            const Icon = iconMap[item] ?? Brain;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="glass rounded-xl p-4 flex flex-col gap-3 cursor-default hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
