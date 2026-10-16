import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export const ScrollProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<string>(PROCESS_STEPS[0].step);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transform values
  const yParallaxBackground = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-28 relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Dynamic Parallax Background Orbs */}
      <motion.div
        style={{ y: yParallaxBackground, opacity: opacityParallax }}
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent blur-[140px] rounded-full pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [90, -90]) }}
        className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-cyan-600/15 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
          >
            Engineering Lifecycle
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            A four-phase pipeline crafted for absolute reliability.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            We adhere to rigorous software engineering cycles where architectural design,
            micro-interaction choreographies, and continuous profiling work in seamless lockstep.
          </motion.p>
        </div>

        {/* Scroll-Animated Timeline / Process Flow */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === step.step;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveStep(step.step)}
                  className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 group cursor-pointer"
                >
                  {/* Step Marker Node */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border transition-all duration-300 z-10 ${
                      isSelected
                        ? 'border-cyan-400 shadow-xl shadow-cyan-500/25 scale-105'
                        : 'border-slate-700/80 group-hover:border-cyan-400/80 group-hover:shadow-cyan-500/20'
                    }`}
                  >
                    <span className="font-mono text-xl font-bold bg-gradient-to-br from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>

                  {/* Content Card with Glassmorphic styling */}
                  <div
                    className={`flex-1 rounded-2xl p-6 sm:p-8 backdrop-blur-md border transition-all duration-300 ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400/60 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/50'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {step.title}
                        </h3>
                        {isSelected && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                            Active Phase
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-indigo-400">
                        {step.tagline}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>

                    {/* Deliverables sub-list */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <span className="text-xs uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                        Phase Artifacts:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800"
                          >
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
