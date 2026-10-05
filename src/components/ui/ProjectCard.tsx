'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

const ICONS: Record<Project['iconType'], React.ReactNode> = {
  rag: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="6" y="8" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M11 15h10M11 21h10M11 27h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="33" cy="30" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M38 35l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  agent: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="10" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v8M24 22l-11 10M24 22l11 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  gateway: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <path d="M6 24h12M30 12h12M30 24h12M30 36h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 24c6 0 6-12 12-12M18 24h12M18 24c6 0 6 12 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <circle cx="10" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="12" r="3" fill="currentColor" />
      <circle cx="24" cy="36" r="3" fill="currentColor" />
      <circle cx="38" cy="24" r="3" fill="currentColor" />
      <path d="M12.5 22l9-8M12.5 26l9 8M26.5 13.5l9 8M26.5 34.5l9-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  ecom: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="4" y="12" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 12V8a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="18" cy="28" r="2.5" fill="currentColor" />
      <circle cx="30" cy="28" r="2.5" fill="currentColor" />
    </svg>
  ),
  appointment: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18h36" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 6v6M32 6v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 20v14M14 16v1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 34v-8c0-2 1-4 4-4s4 2 4 4v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <path d="M24 6C14.06 6 6 14.06 6 24c0 3.3.9 6.4 2.47 9.06L6 42l9.18-2.43A17.92 17.92 0 0024 42c9.94 0 18-8.06 18-18S33.94 6 24 6z" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="4" y="8" width="40" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="4" y="22" width="40" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="11" cy="13" r="1.8" fill="currentColor" />
      <circle cx="11" cy="27" r="1.8" fill="currentColor" />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <rect x="18" y="6" width="12" height="22" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 24a14 14 0 0028 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 38v4M18 42h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <path d="M12 10v12c0 4 3 7 7 7h10c4 0 7-3 7-7V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 10v6M24 10v8M30 10v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 29v10M16 42h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  copywriting: (
    <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
      <path d="M12 36l-4 4V8a4 4 0 014-4h24a4 4 0 014 4v28a4 4 0 01-4 4H16l-4-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 14h16M16 22h16M16 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], ['7deg', '-7deg']), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], ['-7deg', '7deg']), { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const shownStack = project.stack.slice(0, 3);
  const extra = project.stack.length - shownStack.length;

  return (
    <div style={{ perspective: 1000 }} className="h-full w-full">
      <motion.button
        ref={ref}
        data-cursor="card"
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 36, scale: 0.96, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group glass-card relative h-full w-full flex flex-col text-left p-6 md:p-7 cursor-pointer
                   hover:border-accent/40 transition-colors duration-300 overflow-hidden"
      >
        {/* faint accent wash on hover */}
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-[radial-gradient(120%_120%_at_100%_0%,rgba(22,106,107,0.08),transparent_55%)]" />

        {/* Top row: index + icon */}
        <div className="relative flex items-start justify-between mb-6" style={{ transform: 'translateZ(30px)' }}>
          <span className="font-display font-bold text-5xl leading-none text-text/10 group-hover:text-accent/30 transition-colors duration-500 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text
                           group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
            {ICONS[project.iconType]}
          </span>
        </div>

        {/* Impact */}
        <div className="relative flex items-baseline gap-2 mb-3" style={{ transform: 'translateZ(24px)' }}>
          <span className="font-display font-bold text-4xl md:text-5xl text-accent leading-none tracking-tight">
            {project.impact}
          </span>
          <span className="text-[11px] text-muted font-medium leading-tight max-w-[9rem]">
            {project.impactLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative font-grotesk text-xl md:text-[22px] font-bold text-text leading-snug mb-3" style={{ transform: 'translateZ(18px)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="relative text-[15px] text-muted leading-relaxed line-clamp-3 mb-6" style={{ transform: 'translateZ(10px)' }}>
          {project.description}
        </p>

        {/* Footer: stack + view */}
        <div className="relative mt-auto flex items-center justify-between gap-3 pt-5 border-t border-border" style={{ transform: 'translateZ(14px)' }}>
          <div className="flex flex-wrap gap-1.5">
            {shownStack.map((tech) => (
              <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-muted">
                {tech}
              </span>
            ))}
            {extra > 0 && (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md text-muted/70">+{extra}</span>
            )}
          </div>
          <span className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-text
                           group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </motion.button>
    </div>
  );
}
