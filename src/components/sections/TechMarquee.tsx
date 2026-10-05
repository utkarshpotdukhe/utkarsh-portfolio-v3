'use client';

import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const ROW_A = ['LangChain', 'LangGraph', 'RAG', 'AI Agents', 'OpenAI API', 'FastAPI', 'Python', 'n8n', 'Next.js', 'React'];
const ROW_B = ['Vector Databases', 'BM25', 'Redis', 'PostgreSQL', 'Docker', 'Langfuse', 'OpenTelemetry', 'RAGAS', 'ElevenLabs', 'Node.js'];

function Row({ items, duration, reverse }: { items: string[]; duration: number; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-paused overflow-hidden">
      <div
        className="marquee-track items-center gap-8 md:gap-14 py-1"
        style={{ ['--marquee-duration' as string]: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-14 shrink-0">
            <span className="font-display font-semibold uppercase tracking-tight text-4xl md:text-6xl text-text/85 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/70 select-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVel = useSpring(velocity, { stiffness: 200, damping: 40, mass: 0.4 });
  const skewX = useTransform(smoothVel, [-2500, 0, 2500], [-7, 0, 7], { clamp: true });

  return (
    <section aria-label="Tools and technologies" className="relative py-10 md:py-14 glass-panel overflow-hidden">
      <motion.div style={{ skewX }} className="flex flex-col gap-3 md:gap-5 will-change-transform">
        <Row items={ROW_A} duration={34} />
        <Row items={ROW_B} duration={40} reverse />
      </motion.div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent" />
    </section>
  );
}
