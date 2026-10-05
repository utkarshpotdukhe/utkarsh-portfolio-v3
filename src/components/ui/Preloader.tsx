'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Agency-style intro: a dark panel with a 0→100 counter and a filling
 * progress line, then a smooth curtain lift that reveals the site.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // lock scroll while the intro is on screen
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 6) + 3);
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        setTimeout(onDone, 550);
      }
    }, 80);

    return () => {
      clearInterval(id);
      document.body.style.overflow = 'unset';
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[300] bg-[#0F1115] text-white flex flex-col justify-between p-7 md:p-12 overflow-hidden"
    >
      {/* quiet accent glow */}
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-accent/25 blur-[160px]" />

      {/* Top row */}
      <div className="relative flex items-center justify-between">
        <span className="eyebrow !text-white/80">
          <span className="h-px w-8 bg-accent" />
          Utkarsh Potdukhe
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">Portfolio ’26</span>
      </div>

      {/* Center word */}
      <div className="relative flex flex-col items-center justify-center flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold uppercase text-white text-6xl md:text-8xl tracking-[-0.02em] text-center leading-[0.9]"
        >
          AI<br />
          <span className="text-white/25">Engineer</span>
        </motion.h2>
      </div>

      {/* Bottom: counter + progress */}
      <div className="relative flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <span className="text-sm text-white/50 font-medium">Loading experience</span>
          <span className="font-display font-bold text-6xl md:text-8xl leading-none tabular-nums text-white">
            {count}
            <span className="text-white/30">%</span>
          </span>
        </div>
        <div className="h-px w-full bg-white/15 overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
