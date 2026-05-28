"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Conquistas"
      title="Linha do Tempo"
      subtitle="Marcos importantes da minha jornada"
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

        <div className="space-y-8">
          {achievements.map((item, i) => {
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 ${
                  isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-row pl-16 sm:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-[#0a0a0f] z-10 flex-shrink-0" />

                <div
                  className={`glass rounded-2xl p-5 flex-1 ${
                    isRight ? "sm:mr-8" : "sm:ml-8"
                  } hover:border-white/10 transition-all duration-200`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
