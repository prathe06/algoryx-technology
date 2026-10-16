import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Check, Layers, Cpu, Calendar, User } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10"
        >
          {/* Header image banner */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-cyan-300 tracking-wider uppercase mb-1">
                {project.category} · {project.year}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Project Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-2">
                Executive Summary
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Quantified Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                Key Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack (unboxed text per zero-pill rule) */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Architecture & Stack:</span>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 flex-wrap">
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {tIdx < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Request Similar Build
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
