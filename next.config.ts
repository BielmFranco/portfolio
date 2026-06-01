import type { NextConfig } from "next";

// Security headers applied site-wide. See SECURITY.md for rationale.
const securityHeaders = [
  // Block clickjacking entirely. Site is never embedded.
  { key: "X-Frame-Options", value: "DENY" },

  // Prevent MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Send referrer only on same-origin / strip on cross-origin downgrade.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Disable powerful browser APIs we never use.
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
      "payment=()",
      "usb=()",
      "magnetometer=()",
      "accelerometer=()",
      "gyroscope=()",
    ].join(", "),
  },

  // Force HTTPS for 2 years, eligible for browser preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // Isolate browsing context (Spectre mitigation / window.opener protection).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },

  // Block other origins from loading our resources (image hot-linking etc.).
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },

  // Allow speculative DNS resolution for snappier external badges.
  { key: "X-DNS-Prefetch-Control", value: "on" },

  // Content Security Policy. Strict allow-list per directive.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // unsafe-inline still required by Next.js for hydration scripts.
      // unsafe-eval intentionally NOT included (removed for hardening).
      "script-src 'self' 'unsafe-inline'",
      // unsafe-inline required by styled-jsx + Tailwind runtime classes.
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data/blob URIs (canvas matrix rain, SVG icons).
      // External hosts kept minimal — only badge/avatar providers used in profile README context.
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      // mailto: links use same-origin form-action evaluation.
      "form-action 'self'",
      // Outbound XHR/fetch. Vercel Analytics endpoint preserved for future.
      "connect-src 'self' https://vitals.vercel-insights.com",
      // Refuse being embedded in any iframe.
      "frame-ancestors 'none'",
      // Lock <base href> to self.
      "base-uri 'self'",
      // Block <object>, <embed>, <applet>.
      "object-src 'none'",
      // Force HTTPS for any subresource.
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Hide framework fingerprint.
  poweredByHeader: false,

  // Strict React diagnostics in dev.
  reactStrictMode: true,

  // Generate Cross-Origin: anonymous for built assets.
  crossOrigin: "anonymous",

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
