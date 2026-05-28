"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const links = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "gabriel-moraes-franco",
    href: personalInfo.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "BielmFranco",
    href: personalInfo.github,
    Icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" number="07" title="Contato">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Vamos <span className="text-cyan-400">conversar</span>?
          </h3>
          <p className="text-sm muted leading-relaxed">
            Aberto a oportunidades, colaborações e boas conversas sobre IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-2"
        >
          {links.map((link) => {
            const Icon = link.Icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-4 group"
              >
                <Icon className="w-5 h-5 muted group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs muted uppercase tracking-wider mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-sm text-white truncate group-hover:text-cyan-400 transition-colors">
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 muted group-hover:text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
