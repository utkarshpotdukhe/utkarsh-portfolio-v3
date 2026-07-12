'use client';

import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { clsx } from 'clsx';

interface MagneticBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export function MagneticBtn({
  variant = 'primary',
  children,
  href,
  target,
  rel,
  download,
  className,
  ...props
}: MagneticBtnProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  }, []);

  const baseClasses = clsx(
    'relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm',
    'transition-colors duration-200 select-none will-change-transform',
    variant === 'primary' &&
    'bg-primary text-[#04000b] hover:bg-secondary hover:text-white glow-primary',
    variant === 'outline' &&
    'border border-text/20 text-text hover:border-secondary hover:text-secondary',
    className
  );

  if (href) {
    return (
      <a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
