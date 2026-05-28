"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects" number="03" title="MISSIONS">
      <div className="font-mono text-xs text-[#4a8a4f] uppercase tracking-widest mb-6">
        <span className="text-[#00ff41]">{">"}</span> ./missions --list --status=active
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          const code = `MSN_${String(project.id).padStart(3, "0")}`;
          return (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="card p-6 flex flex-col gap-4 group cursor-pointer relative font-mono"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">{project.emoji}</span>
                  <div>
                    <div className="text-[10px] text-[#4a8a4f] uppercase tracking-widest">{code}</div>
                    <div className="text-[10px] text-[#00ff41] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] inline-block animate-pulse" />
                      ACTIVE
                    </div>
                  </div>
                </div>
                {project.isReal && (
                  <span className="text-[9px] font-bold text-[#00ff41] border border-[#00ff41]/40 px-2 py-0.5 uppercase tracking-widest">
                    VERIFIED
                  </span>
                )}
                <ArrowUpRight className="w-5 h-5 text-[#4a8a4f] group-hover:text-[#00ff41] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff41] transition-colors uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a8e6a8] leading-relaxed">
                  <span className="text-[#00ff41]">{">"}</span> {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-[#00ff41]/20 text-[#00ff41] bg-[#00ff41]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#4a8a4f] group-hover:text-[#00ff41] transition-colors pt-2 border-t border-[#00ff41]/10 uppercase tracking-wider">
                <GithubIcon className="w-3 h-3" />
                <span>access: {project.github.replace("https://github.com/", "")}</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
