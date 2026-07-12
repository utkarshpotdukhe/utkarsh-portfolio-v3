import React, { Suspense, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Preloader } from '@/components/ui/Preloader';

const Projects = React.lazy(() => import('@/components/sections/Projects'));
const CustomCursor = React.lazy(() => import('@/components/ui/CustomCursor'));
const SmoothScroll = React.lazy(() => import('@/components/ui/SmoothScroll'));

export default function App() {
  const [loaded, setLoaded] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('intro-done') === '1';
  });

  const finishIntro = () => {
    sessionStorage.setItem('intro-done', '1');
    setLoaded(true);
  };

  return (
    <div className="font-sans antialiased relative min-h-screen">
      <AnimatePresence>
        {!loaded && <Preloader key="preloader" onDone={finishIntro} />}
      </AnimatePresence>

      {/* Full-page ambient colour field — gives the frosted glass something to refract */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-primary/25 blur-[170px]" />
        <div className="absolute top-[28%] -right-[14%] w-[50vw] h-[50vw] rounded-full bg-accent2/20 blur-[170px]" />
        <div className="absolute top-[60%] left-[18%] w-[46vw] h-[46vw] rounded-full bg-secondary/14 blur-[180px]" />
        <div className="absolute -bottom-[12%] right-[8%] w-[42vw] h-[42vw] rounded-full bg-primary/16 blur-[170px]" />
      </div>

      {/* Paper grain for a printed, tactile feel */}
      <div className="noise-overlay" />

      <Suspense fallback={null}>
        <SmoothScroll />
        <CustomCursor />
      </Suspense>

      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
