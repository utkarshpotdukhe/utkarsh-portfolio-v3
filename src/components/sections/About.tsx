'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlurReveal } from '@/components/ui/BlurReveal';

type Info = { label: string; value: string; highlight?: boolean };

const INFO: Info[] = [
  { label: 'Location', value: 'Pune, Maharashtra, India' },
  { label: 'Email', value: 'utkarsh16potdukhe@gmail.com' },
  { label: 'Phone', value: '+91 9823668825' },
  { label: 'Current Role', value: 'AI Automation Developer at E-Commerce Collections' },
  { label: 'Availability', value: 'Open to new opportunities', highlight: true },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 tracking-wide relative overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Area */}
        <div className="flex flex-col gap-10">
          <SectionHeading
            label="About Me"
            title="Where code meets automation"
            index="01"
          />
          <div className="space-y-6">
            <BlurReveal align="left" spanClassName="text-ink text-lg md:text-xl leading-relaxed">
              {`For the last couple of years I have been building n8n workflows, deploying AI agents, and building web dashboards that save teams hours every week. Right now I build multi-agent automation and AI product systems for E-Commerce Collections (US, remote), where I connect what is technically possible with what the business actually needs.`}
            </BlurReveal>
            <BlurReveal align="left" spanClassName="text-muted text-lg md:text-xl leading-relaxed">
              {`I started out doing React performance work with Redux, GraphQL, and component-level tuning, and then moved into building full multi-agent AI pipelines that remove a lot of manual work. I enjoy turning unclear business goals into systems you can actually measure.`}
            </BlurReveal>
          </div>

          {/* Languages */}
          <div className="pt-8 border-t border-border">
            <p className="text-[11px] font-mono text-secondary uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-secondary rounded-sm"></span>
              Spoken Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {['English', 'Hindi', 'Marathi'].map((lang) => (
                <div
                  key={lang}
                  className="group relative px-4 py-2 bg-surface border border-border hover:border-secondary/50 transition-all duration-300 rounded-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 font-mono text-xs tracking-wider text-text/80 group-hover:text-secondary transition-colors">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="relative group h-fit w-full max-w-[500px] lg:ml-auto">
          {/* Ambient glow */}
          <div className="absolute -inset-6 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000" />

          <div className="industrial-box p-4 md:p-7 relative z-10 hover:border-primary/40">
            {/* Engineering corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/20 -mt-[1px] -ml-[1px]" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/20 -mt-[1px] -mr-[1px]" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/20 -mb-[1px] -ml-[1px]" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/20 -mb-[1px] -mr-[1px]" />

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col relative z-20 gap-8 w-full"
            >
              {INFO.map((item, idx) => (
                <motion.div
                  key={item.label}
                  variants={rowVariants}
                  className={`flex flex-col gap-2 relative ${idx !== 0 ? 'border-t border-border pt-6' : 'pt-0'}`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary font-bold">
                    {item.label}
                  </span>

                  <div className={`text-base md:text-lg font-bold tracking-tight leading-tight ${item.highlight ? 'text-success drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]' : 'text-text'}`}>
                    {item.highlight ? (
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-3.5 w-3.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-success"></span>
                        </div>
                        {item.value}
                      </div>
                    ) : (
                      item.value
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
