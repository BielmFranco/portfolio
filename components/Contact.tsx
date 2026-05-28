"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const links = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    color: "from-blue-600 to-blue-500",
    description: "Conecte-se profissionalmente",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GithubIcon,
    color: "from-slate-700 to-slate-600",
    description: "Veja meus projetos",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "from-purple-600 to-purple-500",
    description: personalInfo.email,
  },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="Contato"
      title="Vamos conversar"
      subtitle="Aberto a oportunidades, colaborações e boas conversas sobre IA"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 glow"
        >
          <p className="text-slate-400 text-center mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações. Se você tem
            um projeto interessante ou quer trocar ideias sobre IA, entre em
            contato!
          </p>

          <div className="space-y-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-all duration-200 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{link.label}</div>
                    <div className="text-xs text-slate-500 truncate">{link.description}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
