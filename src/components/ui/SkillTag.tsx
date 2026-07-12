import { clsx } from 'clsx';
import type { Skill } from '@/types';

const CATEGORY_DOT: Record<Skill['category'], string> = {
  automation: 'bg-primary',
  frontend: 'bg-accent2',
  backend: 'bg-secondary',
  professional: 'bg-muted',
};

const CATEGORY_HOVER: Record<Skill['category'], string> = {
  automation: 'hover:border-primary/60 hover:bg-primary/10',
  frontend: 'hover:border-accent2/60 hover:bg-accent2/10',
  backend: 'hover:border-secondary/60 hover:bg-secondary/10',
  professional: 'hover:border-muted/50 hover:bg-black/[0.03]',
};

interface SkillTagProps {
  skill: Skill;
}

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <div
      className={clsx(
        'group relative inline-flex items-center gap-2 px-4 py-2 rounded-full glass-soft',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_20px_-14px_rgba(10,7,5,0.4)]',
        'font-mono text-sm tracking-wide text-text transition-all duration-300',
        'cursor-default select-none',
        CATEGORY_HOVER[skill.category]
      )}
    >
      <span className={clsx('w-2 h-2 rounded-full transition-transform group-hover:scale-125', CATEGORY_DOT[skill.category])} />
      <span className="relative z-10 font-medium">
        {skill.label}
      </span>
    </div>
  );
}
