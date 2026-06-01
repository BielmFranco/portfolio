"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme";

export default function MatrixRain({ opacity = 0.35 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ╳▌▍▎▏░▒▓◤◢◣◥";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const isLight = theme === "light";
    const bgFade = isLight ? "rgba(244, 247, 251, 0.10)" : "rgba(5, 8, 7, 0.08)";
    const rainColor = isLight ? "0, 102, 255" : "0, 255, 65";
    const leadColor = isLight ? "#0a1929" : "#d4ffd4";
    const glowColor = isLight ? "#0066ff" : "#00ff41";

    const draw = () => {
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        if (Math.random() > 0.975) {
          ctx.fillStyle = leadColor;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = isLight ? 4 : 8;
        } else {
          ctx.fillStyle = `rgba(${rainColor}, ${0.4 + Math.random() * 0.5})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };
    window.addEventListener("resize", onResize);

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-bg"
      style={{ opacity }}
    />
  );
}
