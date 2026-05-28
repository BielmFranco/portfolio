"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  BarChart3,
  Code2,
  MessageSquare,
  Terminal,
} from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  GraduationCap,
  BarChart3,
  Code2,
  MessageSquare,
  Terminal,
};

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      label="Certificações"
      title="Credenciais & Cursos"
      subtitle="Certificações que comprovam meu compromisso com o aprendizado contínuo"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? Award;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-all duration-200 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">{cert.title}</h3>
                <p className="text-xs text-slate-400">{cert.issuer}</p>
                <span className="inline-block mt-2 text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
