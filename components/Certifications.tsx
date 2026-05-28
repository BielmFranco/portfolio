"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
  // Group by issuer
  const grouped = certifications.reduce<Record<string, typeof certifications>>(
    (acc, cert) => {
      if (!acc[cert.issuer]) acc[cert.issuer] = [];
      acc[cert.issuer].push(cert);
      return acc;
    },
    {}
  );

  const issuerOrder = ["Microsoft Learning", "Oracle", "USP", "SENAI", "FIAP", "Udemy"];
  const sorted = issuerOrder.filter((k) => grouped[k]);

  return (
    <SectionWrapper id="certifications" number="04" title="Cursos & Certificações">
      <div className="space-y-8">
        {sorted.map((issuer, gi) => (
          <motion.div
            key={issuer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.06 }}
          >
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-cyan-400" />
              {issuer}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {grouped[issuer].map((cert) => (
                <div
                  key={cert.id}
                  className="card p-4 flex items-center gap-3 group"
                >
                  <span className="text-2xl flex-shrink-0">{cert.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {cert.title}
                      </h4>
                      {cert.isNew && (
                        <span className="text-[9px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-1.5 py-0.5 rounded uppercase tracking-wider flex-shrink-0">
                          Novo
                        </span>
                      )}
                    </div>
                    <p className="text-xs muted">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
