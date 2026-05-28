"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Server } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Code2,
  Server,
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="Habilidades"
      title="Stack Técnica"
      subtitle="Tecnologias e ferramentas que utilizo no dia a dia"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((category, ci) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-sm font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
