import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Layout, Layers, Cpu, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data/mockData';

const iconMap = {
  Code: Code,
  Layout: Layout,
  Layers: Layers,
  Cpu: Cpu,
};

interface ServicesProps {
  onSelectServiceForContact?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2"
            >
              Core Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Services engineered for the high-performance web.
            </motion.h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
            Every engagement is bespoke. We do not use cookie-cutter boilerplates or off-the-shelf themes.
            Everything is crafted to elevate your technical differentiation.
          </p>
        </div>

        {/* 4 Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName];
            const isSelected = activeServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveServiceId(service.id)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 relative group overflow-hidden border ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-indigo-500/80 shadow-xl shadow-indigo-500/10'
                    : 'bg-white/80 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-opacity duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                          : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-medium text-slate-400 block">
                        Service {service.number}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300'
                        : 'text-slate-400'
                    }`}
                  >
                    Active
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Scope highlights */}
                <div className="space-y-2 mb-6">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack metadata (clean unboxed text with separators per guidelines) */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex-wrap">
                    {service.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {tIdx < service.technologies.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {onSelectServiceForContact && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceForContact(service.title);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group/btn shrink-0 ml-2"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
