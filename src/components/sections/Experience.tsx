'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { JOBS, EDUCATION } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!scrollLineRef.current || !railRef.current) return;

      gsap.fromTo(
        scrollLineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: railRef.current,
            start: 'top 72%',
            end: 'bottom 65%',
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="experience" className="py-28 relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="Track Record"
          title="Where I've Built Things"
          index="04"
          className="items-center text-center mb-20"
        />

        {/* Alternating timeline */}
        <div ref={railRef} className="relative max-w-6xl mx-auto">
          {/* Spine: left rail on mobile, centered on desktop */}
          <div className="absolute top-2 bottom-2 w-[2px] bg-border rounded-full left-[15px] md:left-1/2 md:-translate-x-1/2">
            <div
              ref={scrollLineRef}
              className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: '0%' }}
            >
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5">
                <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-60" />
                <span className="absolute inset-0 rounded-full bg-secondary shadow-[0_0_16px_5px_rgba(245,66,0,0.55)]" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-6">
            {JOBS.map((job, i) => {
              const right = i % 2 !== 0;
              return (
                <div
                  key={job.id}
                  className={`relative flex md:items-center ${right ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node marker */}
                  <span className="absolute z-10 left-[15px] md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-bg border-[3px] border-primary shadow-[0_0_0_5px_rgba(255,174,0,0.10)]" />
                  </span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: right ? 44 : -44 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${right ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className="industrial-box p-5 md:p-7 hover:border-primary/50 hover:shadow-[0_24px_60px_-30px_rgba(10,7,5,0.30)] transition-all duration-500">
                      <div className="flex items-center gap-3 flex-wrap mb-1.5">
                        {job.current && (
                          <span className="bg-success/10 border border-success/30 text-success px-2 py-0.5 rounded-sm text-[9px] tracking-widest uppercase font-bold">
                            Current
                          </span>
                        )}
                        <h3 className="font-grotesk text-xl md:text-2xl font-black text-text tracking-tight uppercase leading-none">
                          {job.role}
                        </h3>
                      </div>

                      <p className="text-secondary font-mono text-sm font-bold tracking-widest uppercase">{job.company}</p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted font-mono text-[10px] uppercase tracking-widest mt-2.5">
                        <span>{job.period}</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/60" />
                        <span>{job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/60" />
                        <span>{job.location}</span>
                      </div>

                      <ul className="flex flex-col gap-3 mt-5">
                        {job.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                            <span className="shrink-0 mt-[3px] font-mono text-[10px] font-bold text-secondary/70 tabular-nums">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Spacer for the empty half on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Education — deliberately set apart and highlighted, not part of the job timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mt-20"
        >
          <div className="relative rounded-[26px] overflow-hidden border border-secondary/30 p-8 md:p-11 text-center
                          bg-gradient-to-br from-primary/20 via-white/55 to-secondary/15
                          shadow-[0_30px_70px_-34px_rgba(10,7,5,0.4)]">
            <div className="flex flex-col items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-white shadow-[0_12px_26px_-10px_rgba(245,66,0,0.6)]">
                <GraduationCap size={26} />
              </span>
              <span className="eyebrow">Education</span>
              <h4 className="font-display font-extrabold text-3xl md:text-5xl text-text uppercase leading-[0.95]">
                {EDUCATION.degree}, {EDUCATION.field}
              </h4>
              <p className="text-muted font-mono text-sm tracking-wide">{EDUCATION.institution}</p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <span className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-secondary">
                  Class of {EDUCATION.year}
                </span>
                <span className="px-4 py-1.5 bg-white/70 border border-border rounded-full text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-muted">
                  GPA {EDUCATION.cgpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
