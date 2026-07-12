'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX - 4, y: mouseY - 4 });
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      gsap.set(ring, { x: ringX, y: ringY, xPercent: -50, yPercent: -50 });
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMouseMove);

    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const isCard = !!target.closest('[data-cursor="card"]');
      gsap.to(dot, { opacity: 0, duration: 0.2 });
      if (isCard) {
        gsap.to(ring, {
          width: 84, height: 84,
          backgroundColor: 'var(--color-primary)',
          borderColor: 'var(--color-primary)',
          duration: 0.3, ease: 'power3.out',
        });
        gsap.to(label, { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' });
      } else {
        gsap.to(ring, {
          width: 46, height: 46,
          backgroundColor: 'rgba(245,66,0,0.12)',
          borderColor: 'var(--color-secondary)',
          duration: 0.25,
        });
      }
    };

    const onLeave = () => {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
      gsap.to(label, { opacity: 0, scale: 0.6, duration: 0.2 });
      gsap.to(ring, {
        width: 34, height: 34,
        backgroundColor: 'transparent',
        borderColor: 'var(--color-secondary)',
        duration: 0.25,
      });
    };

    const bind = () => {
      const els = document.querySelectorAll<HTMLElement>('a, button, [data-cursor]');
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
      return els;
    };
    let interactiveEls = bind();

    // Re-bind when lazy sections (Projects) mount later
    const rebind = setTimeout(() => {
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      interactiveEls = bind();
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      clearTimeout(rebind);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-visual pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-secondary"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-visual pointer-events-none fixed top-0 left-0 z-[9998] w-[34px] h-[34px] rounded-full border border-secondary flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        <span
          ref={labelRef}
          className="text-[11px] font-bold uppercase tracking-wider text-[#0A0705] opacity-0"
          style={{ transform: 'scale(0.6)' }}
        >
          View
        </span>
      </div>
    </>
  );
}
