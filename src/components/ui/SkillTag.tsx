import { clsx } from 'clsx';

interface SkillTagProps {
  label: string;
  className?: string;
}

/** Quiet chip: white surface, hairline border, ink text. Accent only on hover. */
export function SkillTag({ label, className }: SkillTagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3.5 py-1.5 rounded-full glass-soft',
        'font-mono text-[13px] tracking-wide text-ink',
        'transition-colors duration-300 cursor-default select-none',
        'hover:border-accent/50 hover:text-accent hover:bg-accent-soft/60',
        className
      )}
    >
      {label}
    </span>
  );
}
