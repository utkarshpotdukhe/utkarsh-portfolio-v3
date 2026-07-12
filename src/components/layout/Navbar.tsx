'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 100);
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/90 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.06] shadow-[0_10px_30px_-20px_rgba(10,7,5,0.35)]'
            : 'bg-transparent'
          }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-grotesk font-black text-3xl text-text relative group tracking-tighter">
            <span className="gradient-text">UP</span>
            <span className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 bg-primary/5 transition-opacity" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-200 tracking-tight ${activeLink === link.href ? 'text-text' : 'text-muted hover:text-text'
                    }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-secondary rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-8 py-3 rounded-full bg-primary text-[#04000b] text-base font-bold hover:bg-secondary hover:text-white transition-all duration-300 glow-primary hover:scale-105"
          >
            Hire Me Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-text p-1"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-grotesk font-bold text-2xl gradient-text">UP</span>
              <button onClick={() => setMenuOpen(false)} className="text-muted" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-grotesk text-3xl font-bold text-text hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
