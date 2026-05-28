"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  number,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding px-6 relative ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 font-mono"
        >
          <div className="text-xs text-[#4a8a4f] uppercase tracking-widest mb-2">
            <span className="text-[#00ff41]">{">"}</span> ./section_{number} --load
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#00ff41] glow-text text-sm">[{number}]</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider glow-text">
              {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41] via-[#00ff41]/30 to-transparent" />
            <span className="text-[#4a8a4f] text-xs">[ OK ]</span>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
