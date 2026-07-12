'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { PROJECTS } from '@/lib/constants';
import type { Project } from '@/types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          label="Selected Work"
          title="Work That Ships"
          index="02"
          subtitle="Automation systems I have built for real businesses. Tap any card to see the full breakdown: the modules, the stack, and what changed after."
          className="items-center text-center mb-16"
        />

        {/* Improved 3-Column Grid with tighter gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="flex flex-col h-full w-full">
              <ProjectCard project={project} index={i} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
