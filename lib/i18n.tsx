"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

type Dict = {
  nav: { about: string; stack: string; projects: string; courses: string; experience: string; journey: string; contact: string };
  hero: {
    systemOnline: string;
    identityVerified: string;
    promptDecrypt: string;
    role: string;
    course: string;
    loc: string;
  };
  sections: {
    aboutTitle: string;
    aboutCmd: string;
    aboutCatCmd: string;
    skillsTitle: string;
    skillsCmd: string;
    skillsListCmd: string;
    projectsTitle: string;
    projectsCmd: string;
    projectsListCmd: string;
    certsTitle: string;
    certsCmd: string;
    certsDecryptCmd: string;
    expTitle: string;
    expCmd: string;
    expCatCmd: string;
    achTitle: string;
    achCmd: string;
    achTailCmd: string;
    contactTitle: string;
    contactCmd: string;
    contactOpenCmd: string;
  };
  badges: {
    verified: string;
    new: string;
    live: string;
    active: string;
    sectionOk: string;
    sectionLoad: string;
  };
  about: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  contact: {
    transmissionReady: string;
    heading1: string;
    heading2: string;
    description: string;
    ch01: string;
    ch02: string;
    ch03: string;
  };
  experiences: { id: number; role: string; description: string; tags: string[] }[];
  projects: { id: number; title: string; description: string; tags: string[] }[];
  achievements: { id: number; title: string; description: string }[];
  personal: { title: string; description: string };
  footer: string;
};

const PT: Dict = {
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    courses: "Cursos",
    experience: "Experiência",
    journey: "Jornada",
    contact: "Contato",
  },
  hero: {
    systemOnline: "[ SISTEMA ONLINE ]",
    identityVerified: "// IDENTIDADE VERIFICADA",
    promptDecrypt: "./decrypt --target=identity",
    role: "Analista de Sistemas",
    course: "Ciência da Computação",
    loc: "LOC:",
  },
  sections: {
    aboutTitle: "IDENTIDADE",
    aboutCmd: "./section_01 --load",
    aboutCatCmd: "cat ./identity.log",
    skillsTitle: "SKILLS",
    skillsCmd: "./section_02 --load",
    skillsListCmd: "ls -la ./skills/",
    projectsTitle: "PROJETOS",
    projectsCmd: "./section_03 --load",
    projectsListCmd: "./projetos --list --status=active",
    certsTitle: "CERTIFICAÇÕES",
    certsCmd: "./section_04 --load",
    certsDecryptCmd: "./decrypt_credenciais --verified-only",
    expTitle: "EXPERIÊNCIA",
    expCmd: "./section_05 --load",
    expCatCmd: "cat ./historico_profissional.log",
    achTitle: "LINHA DO TEMPO",
    achCmd: "./section_06 --load",
    achTailCmd: "tail -f ./carreira.log",
    contactTitle: "ESTABELECER LINK",
    contactCmd: "./section_07 --load",
    contactOpenCmd: "./abrir_canal --seguro",
  },
  badges: {
    verified: "VERIFICADO",
    new: "NOVO",
    live: "ATIVO",
    active: "ATIVO",
    sectionOk: "[ OK ]",
    sectionLoad: "--load",
  },
  about: {
    paragraphs: [
      "Atualmente estudando Ciência da Computação, onde venho desenvolvendo habilidades técnicas e práticas voltadas para o desenvolvimento de software e infraestrutura de TI. Estou em constante aprendizado e buscando evoluir tanto em programação quanto em ambientes de nuvem e sistemas operacionais.",
      "Desde pequeno, sou fascinado por tecnologia. Sempre explorei novidades com curiosidade, desmontando aparelhos e testando softwares.",
      "Com o tempo, essa paixão virou propósito: aprender continuamente e criar soluções eficientes, práticas e inovadoras.",
    ],
    facts: [
      { label: "Faculdade", value: "UNIP — Ciência da Computação" },
      { label: "Período", value: "2025 — 2028" },
      { label: "Localização", value: "Osasco, SP" },
    ],
  },
  contact: {
    transmissionReady: "[ TRANSMISSÃO PRONTA ]",
    heading1: "Iniciar",
    heading2: "contato",
    description: "Aberto a oportunidades, colaborações e conversas sobre IA.",
    ch01: "EMAIL_CRIPTOGRAFADO",
    ch02: "LINKEDIN",
    ch03: "GITHUB",
  },
  experiences: [
    {
      id: 1,
      role: "Estagiário Analista de Sistemas",
      description:
        "Atuação como analista de sistemas em ambiente híbrido. Foco em desenvolvimento, análise de soluções tecnológicas e suporte a sistemas corporativos.",
      tags: ["Análise de Sistemas", "Desenvolvimento", "Híbrido"],
    },
    {
      id: 2,
      role: "Estagiário Analista de Sistemas",
      description:
        "Atuação em codificação de front-end, desenvolvimento web e análise de sistemas. Primeira experiência profissional em TI no setor público.",
      tags: ["Front-end", "Desenvolvimento Web", "Systems Analysis", "Setor Público"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "EcoCity",
      description:
        "RPG textual educativo sobre conscientização ambiental. Projeto Java desenvolvido como APS na UNIP (2026/1) para disciplina de Linguagem de Programação Orientada a Objetos.",
      tags: ["Java", "POO", "Educação"],
    },
    {
      id: 2,
      title: "CloudOps Copilot 1.0",
      description:
        "Participação como colaborador no desenvolvimento do CloudOps Copilot — solução de Deploy, Segurança e Observabilidade. Projeto destacado no LinkedIn.",
      tags: ["Cloud", "DevOps", "Observabilidade"],
    },
  ],
  achievements: [
    { id: 1, title: "Informática Básica — SENAI", description: "Primeira certificação técnica: Microsoft Office e fundamentos." },
    { id: 2, title: "AZ-900 + IA pela USP", description: "Implantação de Serviços em Nuvem (Microsoft AZ-900) pelo SENAI e Inteligência Artificial pela USP." },
    { id: 3, title: "Linux LPIC-1 — SENAI", description: "Sistemas Operacionais Linux, Instalação e Configuração." },
    { id: 4, title: "Início Ciência da Computação — UNIP", description: "Início oficial da graduação na Universidade Paulista (2025—2028)." },
    { id: 5, title: "Estágio na Prefeitura de Osasco", description: "Front-end, desenvolvimento web e análise de sistemas (Abr 2025 — Abr 2026)." },
    { id: 6, title: "Certificações Microsoft + Oracle", description: "Azure AI applications & agents (Microsoft Learning) e Certified AI Foundations Associate (Oracle)." },
    { id: 7, title: "Estágio na Atrys Brasil", description: "Analista de Sistemas em ambiente híbrido — São Paulo." },
    { id: 8, title: "EcoCity + CloudOps Copilot", description: "Projeto Java (APS UNIP) e participação no CloudOps Copilot 1.0." },
  ],
  personal: {
    title: "Analista de Sistemas",
    description:
      "Estudante de Ciência da Computação na UNIP, atuando como Analista de Sistemas com foco em Inteligência Artificial, Azure AI Foundry, Cloud Computing e desenvolvimento web.",
  },
  footer: "FIM DA TRANSMISSÃO",
};

const EN: Dict = {
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    courses: "Courses",
    experience: "Experience",
    journey: "Journey",
    contact: "Contact",
  },
  hero: {
    systemOnline: "[ SYSTEM ONLINE ]",
    identityVerified: "// IDENTITY VERIFIED",
    promptDecrypt: "./decrypt --target=identity",
    role: "Systems Analyst",
    course: "Computer Science",
    loc: "LOC:",
  },
  sections: {
    aboutTitle: "IDENTITY",
    aboutCmd: "./section_01 --load",
    aboutCatCmd: "cat ./identity.log",
    skillsTitle: "SKILLS",
    skillsCmd: "./section_02 --load",
    skillsListCmd: "ls -la ./capabilities/",
    projectsTitle: "MISSIONS",
    projectsCmd: "./section_03 --load",
    projectsListCmd: "./missions --list --status=active",
    certsTitle: "CREDENTIALS",
    certsCmd: "./section_04 --load",
    certsDecryptCmd: "./decrypt_credentials --verified-only",
    expTitle: "DEPLOYMENT",
    expCmd: "./section_05 --load",
    expCatCmd: "cat ./deployment_history.log",
    achTitle: "TIMELINE",
    achCmd: "./section_06 --load",
    achTailCmd: "tail -f ./career.log",
    contactTitle: "ESTABLISH_LINK",
    contactCmd: "./section_07 --load",
    contactOpenCmd: "./open_channel --secure",
  },
  badges: {
    verified: "VERIFIED",
    new: "NEW",
    live: "LIVE",
    active: "ACTIVE",
    sectionOk: "[ OK ]",
    sectionLoad: "--load",
  },
  about: {
    paragraphs: [
      "Currently studying Computer Science, developing technical and practical skills in software development and IT infrastructure. Constantly learning and evolving in programming, cloud environments and operating systems.",
      "Since I was a kid, I've been fascinated by technology. I always explored new things with curiosity, taking devices apart and testing software.",
      "Over time, that passion turned into purpose: to learn continuously and build efficient, practical, innovative solutions.",
    ],
    facts: [
      { label: "University", value: "UNIP — Computer Science" },
      { label: "Period", value: "2025 — 2028" },
      { label: "Location", value: "Osasco, SP — Brazil" },
    ],
  },
  contact: {
    transmissionReady: "[ TRANSMISSION READY ]",
    heading1: "Initiate",
    heading2: "contact",
    description: "Open to opportunities, collaborations & AI discussions.",
    ch01: "ENCRYPTED_MAIL",
    ch02: "LINKEDIN",
    ch03: "GITHUB",
  },
  experiences: [
    {
      id: 1,
      role: "Systems Analyst Intern",
      description:
        "Working as systems analyst in hybrid environment. Focus on development, technology solutions analysis and corporate systems support.",
      tags: ["Systems Analysis", "Development", "Hybrid"],
    },
    {
      id: 2,
      role: "Systems Analyst Intern",
      description:
        "Front-end coding, web development and systems analysis. First professional experience in IT within public sector.",
      tags: ["Front-end", "Web Development", "Systems Analysis", "Public Sector"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "EcoCity",
      description:
        "Educational text-based RPG about environmental awareness. Java project developed as final assignment at UNIP (2026/1) for Object-Oriented Programming course.",
      tags: ["Java", "OOP", "Education"],
    },
    {
      id: 2,
      title: "CloudOps Copilot 1.0",
      description:
        "Collaborator on CloudOps Copilot development — Deploy, Security and Observability solution. Featured project on LinkedIn.",
      tags: ["Cloud", "DevOps", "Observability"],
    },
  ],
  achievements: [
    { id: 1, title: "Basic Computing — SENAI", description: "First technical certification: Microsoft Office and fundamentals." },
    { id: 2, title: "AZ-900 + AI from USP", description: "Cloud Services Deployment (Microsoft AZ-900) from SENAI and Artificial Intelligence from USP." },
    { id: 3, title: "Linux LPIC-1 — SENAI", description: "Linux Operating Systems, Installation and Configuration." },
    { id: 4, title: "Started Computer Science — UNIP", description: "Official start of undergraduate studies at Universidade Paulista (2025—2028)." },
    { id: 5, title: "Internship at Osasco City Hall", description: "Front-end, web development and systems analysis (Apr 2025 — Apr 2026)." },
    { id: 6, title: "Microsoft + Oracle Certifications", description: "Azure AI applications & agents (Microsoft Learning) and Certified AI Foundations Associate (Oracle)." },
    { id: 7, title: "Internship at Atrys Brasil", description: "Systems Analyst in hybrid environment — São Paulo." },
    { id: 8, title: "EcoCity + CloudOps Copilot", description: "Java project (UNIP final assignment) and contribution to CloudOps Copilot 1.0." },
  ],
  personal: {
    title: "Systems Analyst",
    description:
      "Computer Science student at UNIP, working as Systems Analyst with focus on Artificial Intelligence, Azure AI Foundry, Cloud Computing and web development.",
  },
  footer: "END_OF_TRANSMISSION",
};

const ES: Dict = {
  nav: {
    about: "Sobre Mí",
    stack: "Stack",
    projects: "Proyectos",
    courses: "Cursos",
    experience: "Experiencia",
    journey: "Trayectoria",
    contact: "Contacto",
  },
  hero: {
    systemOnline: "[ SISTEMA EN LÍNEA ]",
    identityVerified: "// IDENTIDAD VERIFICADA",
    promptDecrypt: "./decrypt --target=identity",
    role: "Analista de Sistemas",
    course: "Ciencias de la Computación",
    loc: "LOC:",
  },
  sections: {
    aboutTitle: "IDENTIDAD",
    aboutCmd: "./section_01 --load",
    aboutCatCmd: "cat ./identity.log",
    skillsTitle: "SKILLS",
    skillsCmd: "./section_02 --load",
    skillsListCmd: "ls -la ./capacidades/",
    projectsTitle: "MISIONES",
    projectsCmd: "./section_03 --load",
    projectsListCmd: "./misiones --list --status=active",
    certsTitle: "CREDENCIALES",
    certsCmd: "./section_04 --load",
    certsDecryptCmd: "./decrypt_credenciales --verified-only",
    expTitle: "EXPERIENCIA",
    expCmd: "./section_05 --load",
    expCatCmd: "cat ./historial_profesional.log",
    achTitle: "LÍNEA TEMPORAL",
    achCmd: "./section_06 --load",
    achTailCmd: "tail -f ./carrera.log",
    contactTitle: "ESTABLECER_ENLACE",
    contactCmd: "./section_07 --load",
    contactOpenCmd: "./abrir_canal --seguro",
  },
  badges: {
    verified: "VERIFICADO",
    new: "NUEVO",
    live: "ACTIVO",
    active: "ACTIVO",
    sectionOk: "[ OK ]",
    sectionLoad: "--load",
  },
  about: {
    paragraphs: [
      "Actualmente estudiando Ciencias de la Computación, desarrollando habilidades técnicas y prácticas en desarrollo de software e infraestructura de TI. En constante aprendizaje y evolución en programación, entornos de nube y sistemas operativos.",
      "Desde pequeño me fascina la tecnología. Siempre exploré novedades con curiosidad, desarmando aparatos y probando softwares.",
      "Con el tiempo, esa pasión se convirtió en propósito: aprender continuamente y crear soluciones eficientes, prácticas e innovadoras.",
    ],
    facts: [
      { label: "Universidad", value: "UNIP — Ciencias de la Computación" },
      { label: "Período", value: "2025 — 2028" },
      { label: "Ubicación", value: "Osasco, SP — Brasil" },
    ],
  },
  contact: {
    transmissionReady: "[ TRANSMISIÓN LISTA ]",
    heading1: "Iniciar",
    heading2: "contacto",
    description: "Abierto a oportunidades, colaboraciones y conversaciones sobre IA.",
    ch01: "CORREO_CIFRADO",
    ch02: "LINKEDIN",
    ch03: "GITHUB",
  },
  experiences: [
    {
      id: 1,
      role: "Pasante Analista de Sistemas",
      description:
        "Actuación como analista de sistemas en entorno híbrido. Enfoque en desarrollo, análisis de soluciones tecnológicas y soporte a sistemas corporativos.",
      tags: ["Análisis de Sistemas", "Desarrollo", "Híbrido"],
    },
    {
      id: 2,
      role: "Pasante Analista de Sistemas",
      description:
        "Actuación en codificación front-end, desarrollo web y análisis de sistemas. Primera experiencia profesional en TI en el sector público.",
      tags: ["Front-end", "Desarrollo Web", "Systems Analysis", "Sector Público"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "EcoCity",
      description:
        "RPG textual educativo sobre concientización ambiental. Proyecto Java desarrollado como trabajo final en UNIP (2026/1) para la materia Programación Orientada a Objetos.",
      tags: ["Java", "POO", "Educación"],
    },
    {
      id: 2,
      title: "CloudOps Copilot 1.0",
      description:
        "Participación como colaborador en el desarrollo del CloudOps Copilot — solución de Deploy, Seguridad y Observabilidad. Proyecto destacado en LinkedIn.",
      tags: ["Cloud", "DevOps", "Observabilidad"],
    },
  ],
  achievements: [
    { id: 1, title: "Informática Básica — SENAI", description: "Primera certificación técnica: Microsoft Office y fundamentos." },
    { id: 2, title: "AZ-900 + IA por la USP", description: "Implantación de Servicios en Nube (Microsoft AZ-900) por SENAI e Inteligencia Artificial por la USP." },
    { id: 3, title: "Linux LPIC-1 — SENAI", description: "Sistemas Operativos Linux, Instalación y Configuración." },
    { id: 4, title: "Inicio Ciencias de la Computación — UNIP", description: "Inicio oficial de la carrera en la Universidad Paulista (2025—2028)." },
    { id: 5, title: "Pasantía en la Alcaldía de Osasco", description: "Front-end, desarrollo web y análisis de sistemas (Abr 2025 — Abr 2026)." },
    { id: 6, title: "Certificaciones Microsoft + Oracle", description: "Azure AI applications & agents (Microsoft Learning) y Certified AI Foundations Associate (Oracle)." },
    { id: 7, title: "Pasantía en Atrys Brasil", description: "Analista de Sistemas en entorno híbrido — São Paulo." },
    { id: 8, title: "EcoCity + CloudOps Copilot", description: "Proyecto Java (trabajo final UNIP) y contribución a CloudOps Copilot 1.0." },
  ],
  personal: {
    title: "Analista de Sistemas",
    description:
      "Estudiante de Ciencias de la Computación en UNIP, actuando como Analista de Sistemas con foco en Inteligencia Artificial, Azure AI Foundry, Cloud Computing y desarrollo web.",
  },
  footer: "FIN_DE_TRANSMISIÓN",
};

const DICTS: Record<Lang, Dict> = { pt: PT, en: EN, es: ES };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-lang", next);
      document.documentElement.lang = next === "pt" ? "pt-BR" : next;
    }
  };

  const value: LangContextValue = {
    lang,
    setLang,
    t: DICTS[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
