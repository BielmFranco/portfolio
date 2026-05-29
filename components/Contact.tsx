"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { useT } from "@/lib/i18n";

export default function Contact() {
  const { t } = useT();

  const links = [
    {
      label: t.contact.ch01,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      Icon: Mail,
      code: "CH_01",
    },
    {
      label: t.contact.ch02,
      value: "gabriel-moraes-franco",
      href: personalInfo.linkedin,
      Icon: LinkedinIcon,
      code: "CH_02",
    },
    {
      label: t.contact.ch03,
      value: "BielmFranco",
      href: personalInfo.github,
      Icon: GithubIcon,
      code: "CH_03",
    },
  ];

  return (
    <SectionWrapper id="contact" number="07" title={t.sections.contactTitle} cmd={t.sections.contactCmd}>
      <div className="font-mono text-xs text-[#4a8a4f] uppercase tracking-widest mb-6">
        <span className="text-[#00ff41]">{">"}</span> {t.sections.contactOpenCmd}
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start font-mono">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <div className="text-xs text-[#4a8a4f] uppercase tracking-widest mb-3">
            {t.contact.transmissionReady}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide glow-text">
            {t.contact.heading1} <span className="text-[#00ff41]">{t.contact.heading2}</span>
          </h3>
          <p className="text-xs text-[#a8e6a8] leading-relaxed border-l-2 border-[#00ff41]/30 pl-3">
            <span className="text-[#00ff41]">{">"}</span> {t.contact.description}
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
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <span className="text-[8px] text-[#4a8a4f] uppercase tracking-widest">{link.code}</span>
                  <Icon className="w-5 h-5 text-[#4a8a4f] group-hover:text-[#00ff41] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-[#4a8a4f] uppercase tracking-widest mb-0.5">
                    [ {link.label} ]
                  </div>
                  <div className="text-sm text-white truncate group-hover:text-[#00ff41] transition-colors">
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4a8a4f] group-hover:text-[#00ff41] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
