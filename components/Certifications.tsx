"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
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
    <SectionWrapper id="certifications" number="04" title="CREDENTIALS">
      <div className="font-mono text-xs text-[#4a8a4f] uppercase tracking-widest mb-6">
        <span className="text-[#00ff41]">{">"}</span> ./decrypt_credentials --verified-only
      </div>

      <div className="space-y-8">
        {sorted.map((issuer, gi) => (
          <motion.div
            key={issuer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.06 }}
          >
            <h3 className="text-xs font-mono font-bold text-[#00ff41] mb-3 flex items-center gap-2 uppercase tracking-widest glow-text">
              <span className="w-6 h-px bg-[#00ff41]" />
              [ {issuer} ]
              <span className="text-[#4a8a4f] text-[10px]">// {grouped[issuer].length} items</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {grouped[issuer].map((cert) => (
                <div
                  key={cert.id}
                  className="card p-3 flex items-center gap-3 group font-mono"
                >
                  <span className="text-2xl flex-shrink-0 filter drop-shadow-[0_0_6px_rgba(0,255,65,0.4)]">{cert.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-xs font-bold text-white truncate uppercase tracking-wide">
                        {cert.title}
                      </h4>
                      {cert.isNew && (
                        <span className="text-[8px] font-bold text-[#00ff41] border border-[#00ff41] px-1 py-0.5 uppercase tracking-widest flex-shrink-0 glow-text">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-[#4a8a4f] uppercase tracking-wider">
                      <span className="text-[#00ff41]">▸</span> {cert.year}
                    </p>
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
