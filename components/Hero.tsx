"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import MatrixRain from "@/components/MatrixRain";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden cyber-grid"
    >
      <MatrixRain opacity={0.25} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff41]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#00ff41] mb-6"
        >
          <span className="pulse-dot" />
          <span className="glow-text">[ SYSTEM ONLINE ]</span>
          <span className="muted">// IDENTITY VERIFIED</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-mono muted mb-2"
        >
          <span className="text-[#00ff41]">root@bielmfranco</span>
          <span>:~$ </span>
          <span>./decrypt --target=identity</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-3 leading-[1.05] font-mono uppercase"
        >
          <span className="glow-text">{personalInfo.firstName}</span>
          <br />
          <span className="text-[#00ff41] glow-text">{personalInfo.lastName.split(" ")[0]}</span>{" "}
          <span className="glow-text">{personalInfo.lastName.split(" ")[1]}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg muted mb-3 font-mono"
        >
          <span className="text-[#00ff41]">{">"}</span> {personalInfo.title}{" "}
          <span className="text-[#00ff41]">::</span> Ciência da Computação
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-sm text-[#a8e6a8] max-w-xl mb-8 leading-relaxed border-l-2 border-[#00ff41]/50 pl-4"
        >
          <span className="text-[#00ff41]">{">"}</span> {personalInfo.description}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-2 text-xs font-mono muted mb-8 uppercase tracking-wider"
        >
          <MapPin className="w-3 h-3" />
          <span>LOC:</span>
          <span className="text-[#a8e6a8]">{personalInfo.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 bg-[#00ff41] hover:bg-[#22ff61] text-[#050807] font-mono font-bold text-xs uppercase tracking-widest transition-all rounded-sm"
            style={{ boxShadow: "0 0 16px rgba(0, 255, 65, 0.4)" }}
          >
            <LinkedinIcon className="w-4 h-4" />
            [ LINKEDIN ]
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-[#00ff41]/40 hover:border-[#00ff41] hover:bg-[#00ff41]/5 text-[#00ff41] font-mono font-bold text-xs uppercase tracking-widest transition-all rounded-sm"
          >
            <GithubIcon className="w-4 h-4" />
            [ GITHUB ]
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 font-mono text-xs muted"
        >
          <span className="text-[#00ff41]">root@bielmfranco</span>:~$
          <span className="cursor-blink"></span>
        </motion.div>
      </div>
    </section>
  );
}
