import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Register all GSAP plugins (call once per component via useGSAP) */
export function registerGsapPlugins() {
  gsap.registerPlugin(ScrollTrigger);
}

/** Fade-in from below — reusable preset */
export function fadeInUp(
  target: gsap.TweenTarget,
  delay = 0,
  duration = 0.8
): gsap.core.Tween {
  return gsap.from(target, {
    y: 40,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
  });
}

/** Staggered reveal for a list of elements */
export function staggerReveal(
  targets: gsap.TweenTarget,
  stagger = 0.08,
  delay = 0
): gsap.core.Tween {
  return gsap.from(targets, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger,
    delay,
    ease: 'power2.out',
  });
}

/** GSAP counter animation from 0 → end */
export function animateCounter(
  el: HTMLElement,
  end: number,
  suffix: string,
  duration = 2
): gsap.core.Tween {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    onUpdate() {
      el.textContent = Math.round(obj.val).toString() + suffix;
    },
  });
}

/** SVG line draw (strokeDashoffset trick) */
export function drawLine(
  lineEl: SVGElement,
  scrollTriggerVars: ScrollTrigger.Vars
): gsap.core.Tween {
  const length = (lineEl as SVGGeometryElement).getTotalLength?.() ?? 500;
  gsap.set(lineEl, { strokeDasharray: length, strokeDashoffset: length });
  return gsap.to(lineEl, {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: scrollTriggerVars,
  });
}
