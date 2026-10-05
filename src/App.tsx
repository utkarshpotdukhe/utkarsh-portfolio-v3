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

      {/* Two very faint accent washes, nothing louder */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[30%] -right-[16%] w-[48vw] h-[48vw] rounded-full bg-accent/[0.07] blur-[180px]" />
        <div className="absolute -bottom-[14%] left-[6%] w-[44vw] h-[44vw] rounded-full bg-accent/[0.05] blur-[180px]" />
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
