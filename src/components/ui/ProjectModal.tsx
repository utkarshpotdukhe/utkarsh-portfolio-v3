'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, BarChart3, Layers, CheckCircle2, ZoomIn, ZoomOut, ShieldCheck, Cog } from 'lucide-react';

import type { Project } from '@/types';
import { asset } from '@/lib/asset';
import { MagneticBtn } from './MagneticBtn';
import { GoogleSheetUI } from './GoogleSheetUI';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const KeyFeature = ({ children }: { children: string }) => (
  <li className="flex gap-3 text-[11px] text-muted items-center">
    <CheckCircle2 size={12} className="text-success shrink-0" />
    {children}
  </li>
);

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Reset zoom when image changes or modal closes
  useEffect(() => {
    setZoomScale(1);
  }, [activeImage, project]);

  // Prevent scroll when modal is open — also pause Lenis smooth scroll,
  // otherwise Lenis keeps scrolling the page behind the modal.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (project) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      (window as unknown as { __lenis?: { start: () => void } }).__lenis?.start();
    };
  }, [project]);

  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden industrial-box shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-surface border border-border text-muted hover:text-text hover:bg-black/[0.05] transition-all"
            >
              <X size={18} />
            </button>

            {/* Left Panel: Overview */}
            <div className="w-full md:w-[38%] p-6 md:p-10 border-b md:border-b-0 md:border-r border-border bg-gradient-to-br from-primary/[0.10] to-transparent flex flex-col">
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-secondary font-bold">
                    Project Case Study
                  </span>
                  <h2 className="font-grotesk text-2xl md:text-3xl font-black text-text leading-tight">
                    {project.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-secondary font-black text-3xl tracking-tight">{project.impact}</span>
                  <span className="text-success font-mono text-[9px] uppercase tracking-widest font-bold">
                    {project.impactLabel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white border border-border rounded-sm font-mono text-[9px] text-muted uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Dashboard Logic */}
            <div data-lenis-prevent className="w-full md:w-[62%] p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-8">
                {/* Description Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-muted">
                    <Zap size={16} className="text-secondary" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">The Problem & Solution</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Dashboard Modules */}
                {project.modules ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.modules.map((module, i) => {
                      const Icon = [BarChart3, Layers, Zap, CheckCircle2, ShieldCheck, Cog][i % 6];
                      return (
                        <div key={i} className="p-5 rounded-xl border border-border bg-surface flex flex-col gap-2.5 transition-all hover:bg-white hover:border-primary/40 hover:shadow-[0_16px_40px_-24px_rgba(4,0,11,0.30)]">
                          <Icon size={18} className={[
                            "text-secondary",
                            "text-accent2",
                            "text-secondary",
                            "text-success",
                            "text-accent2",
                            "text-secondary"
                          ][i % 6]} />
                          <h4 className="font-grotesk font-bold text-text text-[13px] leading-tight">{module.title}</h4>
                          <p className="text-[11px] text-muted leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      );
                    })}

                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                      <BarChart3 size={18} className="text-secondary" />
                      <h4 className="font-grotesk font-bold text-text text-[13px]">Automated Logic</h4>
                      <p className="text-[11px] text-muted leading-relaxed">
                        Custom-built workflow triggers and complex conditional branching for zero manual intervention.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                      <Layers size={18} className="text-accent2" />
                      <h4 className="font-grotesk font-bold text-text text-[13px]">Data Integrity</h4>
                      <p className="text-[11px] text-muted leading-relaxed">
                        Built-in error handling and multi-service sync keeping reports and datasets perfectly aligned.
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Capabilities */}
                {project.capabilities && (
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Core Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {project.capabilities.map((cap, i) => (
                        <div key={i} className="flex gap-2 items-center text-[11px] text-muted">
                          <CheckCircle2 size={12} className="text-secondary shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                {project.images && (
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">Workflow Logic Screenshots</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {project.images.map((rawSrc, i) => {
                        const src = asset(rawSrc);
                        return (
                        <div
                          key={i}
                          onClick={() => setActiveImage(src)}
                          className="relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer group/img"
                        >
                          <img
                            src={src}
                            alt={`Logic Preview ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-[8px] font-mono uppercase tracking-widest text-white font-bold bg-black/60 px-2 py-1 rounded">View Full</span>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technical Highlights & Business Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">Technical Highlights</h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {project.highlights ? (
                        project.highlights.map((h, i) => <KeyFeature key={i}>{h}</KeyFeature>)
                      ) : (
                        <>
                          <KeyFeature>End-to-end API integration with robust rate-limiting handling.</KeyFeature>
                          <KeyFeature>Secure webhook management with real-time payload transformation.</KeyFeature>
                          <KeyFeature>AI-driven decision making nodes for complex content parsing.</KeyFeature>
                          <KeyFeature>Low-latency data synchronization across multiple global regions.</KeyFeature>
                        </>
                      )}
                    </ul>
                  </div>

                  {project.businessImpact && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-success font-bold">Business Impact</h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {project.businessImpact.map((impact, i) => (
                          <li key={i} className="flex gap-3 text-[11px] text-muted items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                  {project.liveUrl ? (
                    <div className="flex flex-col gap-8 w-full">
                      {project.showSheetUI && (
                        <div className="flex flex-col gap-4">
                          <h4 className="text-[10px] font-mono uppercase tracking-widest text-success font-bold flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-success pr-[0.1px] flex items-center justify-center animate-pulse" /> Live System Dashboard (UI)
                          </h4>
                          <GoogleSheetUI sheetUrl={project.liveUrl} />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3 pt-6 mt-auto">
                        <MagneticBtn href="#contact" onClick={onClose} className="px-6 py-2.5 text-[10px] tracking-widest uppercase font-bold">
                          Inquire Now
                        </MagneticBtn>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary hover:bg-secondary/20 transition-colors text-[9px] tracking-widest uppercase font-bold"
                        >
                          Open Live Script <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3 pt-6 mt-auto">
                      <MagneticBtn href="#contact" onClick={onClose} className="px-6 py-2.5 text-[10px] tracking-widest uppercase font-bold">
                        Inquire Now
                      </MagneticBtn>
                      <button
                        disabled
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface border border-border text-muted/50 text-[9px] tracking-widest uppercase font-bold cursor-not-allowed opacity-70"
                      >
                        Live Demo <ExternalLink size={12} />
                      </button>
                    </div>
                  )}
              </div>
            </div>

            {/* Industrial Design Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/30" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md"
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.div
                key={activeImage}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                drag={zoomScale > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                className="relative max-w-full max-h-full cursor-grab active:cursor-grabbing"
              >
                <img
                  src={activeImage}
                  alt="Full Technical Logic"
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 select-none pointer-events-none"
                />
              </motion.div>

              {/* Controls Overlay */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-[210]">
                <button
                  onClick={() => setZoomScale(Math.max(1, zoomScale - 0.5))}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="font-mono text-xs text-white/50 w-12 text-center">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  onClick={() => setZoomScale(Math.min(3, zoomScale + 0.5))}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <div className="w-px h-4 bg-white/10 mx-2" />
                <button
                  onClick={() => {
                    setActiveImage(null);
                    setZoomScale(1);
                  }}
                  className="p-2 text-white/70 hover:text-secondary transition-colors"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
