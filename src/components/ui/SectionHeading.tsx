'use client';

import { motion } from 'framer-motion';
import { BlurReveal } from './BlurReveal';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  index?: string;
  className?: string;
}

/** Big editorial title that reveals word-by-word from a mask on scroll. */
function RevealTitle({ title, center }: { title: string; center?: boolean }) {
  const words = title.split(' ');
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.08 }}
      className={`font-display font-extrabold text-[13vw] leading-[0.86] sm:text-6xl md:text-7xl text-text tracking-[-0.02em] ${center ? 'text-center' : ''}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', rotate: 4 },
              visible: { y: '0%', rotate: 0 },
            }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </motion.h2>
  );
}

export function SectionHeading({ label, title, subtitle, index, className = '' }: SectionHeadingProps) {
  const center = className.includes('center');
  return (
    <div className={`flex flex-col mb-14 md:mb-20 ${className}`}>
      <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
        {index && (
          <span className="font-mono text-xs text-muted/70 tabular-nums">{index}</span>
        )}
        <span className="h-px w-8 bg-secondary" />
        <span className="eyebrow !gap-0">{label}</span>
      </div>

      <RevealTitle title={title} center={center} />

      {subtitle && (
        <BlurReveal
          className={`max-w-2xl mt-6 ${center ? 'mx-auto text-center' : ''}`}
          spanClassName="text-muted text-lg md:text-xl leading-relaxed font-normal"
        >
          {subtitle}
        </BlurReveal>
      )}
    </div>
  );
}
