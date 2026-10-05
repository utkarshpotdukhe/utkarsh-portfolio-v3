import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative glass-panel pt-24 pb-12 overflow-hidden">
      {/* Background Accents (Industrial Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />
      
      <div className="section-container relative z-10">
        {/* Top Section: CTA / Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent" />
                Ready to automate?
              </span>
              <h2 className="font-display font-extrabold text-6xl md:text-8xl text-text leading-[0.85] tracking-[-0.02em]">
                LET'S BUILD <br /> <span className="text-black/15">SOMETHING GOOD.</span>
              </h2>
            </div>
            
            <motion.a
              href="mailto:utkarsh16potdukhe@gmail.com"
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 text-xl md:text-2xl font-semibold text-text hover:text-accent transition-colors pr-4"
            >
              {CONTACT.email}
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent-soft transition-all">
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Navigation</span>
              <ul className="flex flex-col gap-3">
                {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[13px] text-muted/70 hover:text-accent transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Social</span>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-muted/60 hover:text-accent transition-colors font-medium">
                    <LinkedinIcon size={14} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-muted/70 hover:text-text transition-colors font-medium">
                    <GithubIcon size={14} /> GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Contact</span>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-[12px] text-muted/70 leading-relaxed font-medium">
                    {CONTACT.location.split(',').slice(0, 2).join(',')},<br />{CONTACT.location.split(',').slice(2).join(',')}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-accent shrink-0" />
                  <span className="text-[12px] text-muted/70 font-medium">{CONTACT.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & System Status */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="font-grotesk font-black text-2xl text-text tracking-tighter uppercase whitespace-nowrap">Utkarsh Potdukhe<span className="text-accent">.</span></span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-[12px] text-muted/70 font-medium">
              © {currentYear} Utkarsh Potdukhe. Designed and built in Pune, India.
            </span>
          </div>

          <div className="flex items-center gap-6 px-5 py-2 glass-soft rounded-full">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-[12px] text-text font-semibold">Available for new work</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Globe size={12} className="text-muted/50" />
              <span className="text-[12px] text-muted/70 font-medium">Remote, GMT+5:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}

