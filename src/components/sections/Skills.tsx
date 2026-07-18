'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillTag } from '@/components/ui/SkillTag';
import { TECHNICAL_SKILLS, PROFESSIONAL_SKILLS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.9, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="section-container">
        <SectionHeading
          label="Skills & Tools"
          title="The Stack Behind the Work"
          index="03"
          subtitle="A small, focused set of tools I actually use to build scalable AI pipelines and fast, reliable web interfaces."
          className="items-center text-center"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical */}
          <div>
            <h3 className="font-grotesk text-xl font-bold text-text mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-secondary"></span>
              Technical Skillls
              <span className="w-8 h-[2px] bg-secondary"></span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {TECHNICAL_SKILLS.map((skill) => (
                <motion.div key={skill.label} variants={itemVariants}>
                  <SkillTag skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Professional */}
          <div>
            <h3 className="font-grotesk text-xl font-bold text-text mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-accent2"></span>
              Professional Skills
              <span className="w-8 h-[2px] bg-accent2"></span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {PROFESSIONAL_SKILLS.map((skill) => (
                <motion.div key={skill.label} variants={itemVariants}>
                  <SkillTag skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
