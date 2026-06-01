import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Inline scripts/styles needed by Next.js runtime + Framer Motion + styled-jsx
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data URIs (canvas, SVG) + GitHub avatars + shields.io badges + devicon CDN
      "img-src 'self' data: blob: https://img.shields.io https://avatars.githubusercontent.com https://komarev.com https://cdn.jsdelivr.net https://readme-typing-svg.demolab.com https://github-readme-stats.vercel.app https://github-readme-streak-stats.herokuapp.com",
      "font-src 'self' data:",
      // mailto: counts as form-action target via 'self'
      "form-action 'self'",
      // Network calls (Vercel Analytics if enabled later)
      "connect-src 'self' https://vitals.vercel-insights.com",
      // Block being embedded in iframes
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
