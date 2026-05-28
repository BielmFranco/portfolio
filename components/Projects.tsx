"use client";

import { motion } from "framer-motion";
import { Camera, Gamepad2, Bot, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Gamepad2,
  Bot,
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projetos"
      title="O que construí"
      subtitle="Projetos que demonstram minhas habilidades em IA e desenvolvimento"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = iconMap[project.icon] ?? Bot;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden group ${
                project.featured ? "glow" : ""
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                  Destaque
                </span>
              )}
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 border border-white/5 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Ver no GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
