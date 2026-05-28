"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experiência"
      title="Jornada Profissional"
      subtitle="Experiências que moldaram minha carreira em tecnologia"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300 glow group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-1.5 text-purple-400 font-medium text-sm mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
