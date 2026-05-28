"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper id="skills" number="02" title="Stack">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
      >
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            whileHover={{ y: -3 }}
            className="card p-4 flex flex-col items-center justify-center gap-2 text-center cursor-default"
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="text-xs font-medium text-white">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
