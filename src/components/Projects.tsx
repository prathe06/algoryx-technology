import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onInquireProject: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Architecture', 'Spatial & 3D', 'Design Systems', 'Creative Tech'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2"
            >
              Selected Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Featured Engineering & Design
            </motion.h2>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per guidelines) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top-right inspect hover cue */}
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Bottom metrics bar in visual frame */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-3">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="font-mono">
                          <span className="font-bold text-cyan-300">{m.value}</span>{' '}
                          <span className="text-slate-300 text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{project.year}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 dark:text-indigo-400 mb-2">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>

                    <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack metadata (clean text list with separators) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((t, tIdx) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {tIdx < 2 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="text-indigo-600 dark:text-indigo-400 font-sans font-semibold group-hover:underline">
                      View Case Study
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
