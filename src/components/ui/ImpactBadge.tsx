interface ImpactBadgeProps {
  value: string;
  label: string;
}

export function ImpactBadge({ value, label }: ImpactBadgeProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="text-xl font-bold leading-none"
        style={{ color: 'var(--color-accent1)' }}
      >
        {value}
      </span>
      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-success)' }}>
        {label}
      </span>
    </div>
  );
}
