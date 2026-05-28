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
    <section id={id} className={`section-padding px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-cyan-400 font-mono text-sm">{number}.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
