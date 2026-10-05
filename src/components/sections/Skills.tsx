'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillTag } from '@/components/ui/SkillTag';
import { SKILL_GROUPS } from '@/lib/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const chipsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="section-container">
        <SectionHeading
          label="Skills and Tools"
          title="The Stack Behind the Work"
          index="03"
          subtitle="LLM applications, retrieval, agents and the infrastructure to run them in production, plus the web stack I came up through."
          className="items-center text-center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="industrial-box p-6 md:p-7 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-grotesk text-lg font-bold text-text tracking-tight">{group.title}</h3>
                <span className="font-mono text-[11px] text-muted/70 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="h-px w-full bg-border" />
              <motion.div variants={chipsVariants} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span key={item} variants={chipVariants}>
                    <SkillTag label={item} />
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
