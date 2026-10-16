import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle2, Target, Eye, Compass, Award } from 'lucide-react';
import { COMPANY_STATS } from '../data/mockData';

// Custom animated counter hook
function Counter({ targetValue, suffix = '', duration = 1.6 }: { targetValue: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const isFloat = targetValue % 1 !== 0;
    const stepTime = 16;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {targetValue % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2"
          >
            About ALGORYX
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            We merge algorithmic discipline with boundary-pushing creativity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            Founded by engineers and digital artists, ALGORYX is a dedicated digital innovation collective.
            We partner with forward-thinking enterprises, bold startups, and cultural icons to design and engineer
            breakthrough web platforms that leave an indelible mark on the digital frontier.
          </motion.p>
        </div>

        {/* Mission & Vision Dual Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To eliminate the boundary between complex technical engineering and emotional user resonance.
              We construct digital products that are not merely functional, but deeply intuitive, blisteringly fast,
              and visually unforgettable.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              <span>Full-Stack Engineering · Sub-second Performance · WCAG AA Standards</span>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-purple-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To pioneer the next era of the open web, where spatial computing, ambient micro-interactions,
              and generative interfaces operate seamlessly across every screen, without bloated code or fragile dependencies.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <Compass className="w-4 h-4 text-purple-500" />
              <span>Spatial Web Architectures · Sustainable Compute · Zero-Bloat Standards</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Counters Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-1.5"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  <Counter targetValue={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
