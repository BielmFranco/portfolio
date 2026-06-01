import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Moraes Franco | AI Developer",
  description:
    "Desenvolvedor de IA | Azure AI | AI Agents | Python Developer. Estudante de Ciência da Computação apaixonado por Inteligência Artificial e Agentes Autônomos.",
  keywords: [
    "Gabriel Moraes Franco",
    "AI Developer",
    "Azure AI",
    "Python",
    "AI Agents",
    "Inteligência Artificial",
  ],
  authors: [{ name: "Gabriel Moraes Franco" }],
  openGraph: {
    title: "Gabriel Moraes Franco | AI Developer",
    description:
      "Desenvolvedor de IA | Azure AI | AI Agents | Python Developer",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Moraes Franco | AI Developer",
    description: "Desenvolvedor de IA | Azure AI | AI Agents | Python Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
