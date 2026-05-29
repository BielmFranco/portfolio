"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { num: "01", label: "Sobre", href: "#about" },
  { num: "02", label: "Stack", href: "#skills" },
  { num: "03", label: "Projetos", href: "#projects" },
  { num: "04", label: "Cursos", href: "#certifications" },
  { num: "05", label: "Experiência", href: "#experience" },
  { num: "06", label: "Jornada", href: "#achievements" },
  { num: "07", label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050807]/90 backdrop-blur-md border-b border-[#00ff41]/20"
            : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between font-mono">
          <button
            onClick={() => handleNav("#hero")}
            className="text-xs sm:text-sm text-[#00ff41] font-bold flex items-center gap-2 uppercase tracking-widest hover:glow-text transition-all"
          >
            <span className="pulse-dot" />
            <span>[ BIELMFRANCO ]</span>
          </button>

          <div className="hidden md:flex items-center gap-1 text-xs">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-2 py-1 font-medium transition-all uppercase tracking-wider ${
                    isActive
                      ? "text-[#00ff41] glow-text"
                      : "text-[#4a8a4f] hover:text-[#00ff41]"
                  }`}
                >
                  <span className="opacity-50">{link.num}/</span>{link.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm border border-[#00ff41]/30 hover:bg-[#00ff41]/5 transition-colors text-[#00ff41]"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#050807] border-b border-[#00ff41]/20 md:hidden font-mono"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-3 py-2 text-xs uppercase tracking-wider text-[#4a8a4f] hover:text-[#00ff41] hover:bg-[#00ff41]/5 transition-colors"
                >
                  <span className="opacity-50">{link.num}/</span>{link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
