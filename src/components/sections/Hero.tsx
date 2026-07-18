'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticBtn } from '@/components/ui/MagneticBtn';
import { STATS, ROLES, CONTACT } from '@/lib/constants';
import { asset } from '@/lib/asset';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Role switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const name = nameRef.current;
      if (!name) return;

      // Split into chars with a mask for a clean reveal.
      // Wrap each WORD in a nowrap span so it never breaks mid-word,
      // and join words with a real (breakable) space so it wraps cleanly.
      const text = name.textContent ?? '';
      name.innerHTML = text
        .split(' ')
        .map(
          (word) =>
            `<span class="inline-block whitespace-nowrap">` +
            word
              .split('')
              .map(
                (ch) =>
                  `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block char-reveal">${ch}</span></span>`
              )
              .join('') +
            `</span>`
        )
        .join(' ');

      const chars = name.querySelectorAll('.char-reveal');
      gsap.from(chars, {
        yPercent: 115,
        duration: 0.9,
        stagger: 0.035,
        ease: 'power4.out',
        delay: 0.25,
      });

      // Stats counter on scroll
      const statsEl = statsRef.current;
      if (!statsEl) return;

      const counters = statsEl.querySelectorAll<HTMLElement>('[data-count]');
      counters.forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: { trigger: statsEl, start: 'top 85%', once: true },
        });
      });
    },
    { scope: containerRef }
  );

  // Mouse parallax on the warm background blobs
  useEffect(() => {
    const scope = containerRef.current;
    if (!scope) return;
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tweens = (['.mesh-blob-1', '.mesh-blob-2', '.mesh-blob-3'] as const).map((sel) => {
      const node = scope.querySelector(sel);
      return node
        ? {
            x: gsap.quickTo(node, 'x', { duration: 1.4, ease: 'power3.out' }),
            y: gsap.quickTo(node, 'y', { duration: 1.4, ease: 'power3.out' }),
          }
        : null;
    });
    const depth = [70, -55, 45];

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      tweens.forEach((t, i) => {
        if (!t) return;
        t.x(dx * depth[i]);
        t.y(dy * depth[i]);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Warm gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mesh-blob-1 absolute top-[-12%] left-[-10%] w-[620px] h-[620px] rounded-full bg-primary opacity-[0.20] blur-[130px]" />
        <div className="mesh-blob-2 absolute bottom-[-12%] right-[-6%] w-[520px] h-[520px] rounded-full bg-accent2 opacity-[0.16] blur-[120px]" />
        <div className="mesh-blob-3 absolute top-[38%] left-[46%] w-[420px] h-[420px] rounded-full bg-secondary opacity-[0.10] blur-[120px]" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center gap-5 pt-24">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-muted"
        >
          Hey, I&apos;m Utkarsh
        </motion.p>

        {/* Name — GSAP char reveal, condensed display */}
        <h1
          ref={nameRef}
          className="font-display font-extrabold text-[16vw] sm:text-8xl md:text-9xl text-text leading-[0.92] tracking-[-0.02em]"
        >
          Utkarsh Potdukhe
        </h1>

        {/* Role switcher */}
        <div className="min-h-[2.75rem] md:min-h-[3rem] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -22, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="font-display uppercase tracking-wide text-xl sm:text-3xl md:text-4xl font-bold gradient-text text-center leading-tight px-2"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-xl mx-auto text-lg text-muted leading-relaxed"
        >
          I build AI systems that take over repetitive work. I have shipped
          70+ automation projects and helped teams stop doing everything by hand.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-3"
        >
          <MagneticBtn href="#projects" variant="primary">
            View my work
          </MagneticBtn>
          <MagneticBtn href={asset(CONTACT.resume)} variant="outline" download="Utkarsh-Potdukhe-Resume.pdf">
            Download resume
          </MagneticBtn>
        </motion.div>

        {/* Stats row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 pt-12 border-t border-border w-full"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="group/stat flex flex-col items-center gap-1.5 p-4 md:p-6 rounded-2xl border border-transparent hover:border-border hover:bg-white/70 hover:shadow-[0_18px_44px_-28px_rgba(10,7,5,0.28)] transition-all duration-500">
              <span
                className="font-display font-bold text-5xl md:text-6xl leading-none tabular-nums text-secondary group-hover/stat:scale-[1.06] transition-transform duration-500"
                data-count={stat.numericValue}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </span>
              <span className="text-muted text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted/70 hover:text-secondary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={18} className="bounce-slow" />
      </motion.a>
    </section>
  );
}
