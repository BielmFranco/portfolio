"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4 uppercase tracking-widest">
            {label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
