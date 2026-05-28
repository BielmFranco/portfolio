"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects" number="03" title="Projetos">
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
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
            className="card p-6 flex flex-col gap-4 group cursor-pointer relative"
          >
            {project.isReal && (
              <span className="absolute top-4 right-4 text-[10px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 rounded uppercase tracking-wider">
                Real
              </span>
            )}

            <div className="flex items-start justify-between">
              <span className="text-4xl">{project.emoji}</span>
              <ArrowUpRight className="w-5 h-5 muted group-hover:text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm muted leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 border border-white/5 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs muted group-hover:text-cyan-400 transition-colors pt-2 border-t border-white/5">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/BielmFranco</span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
