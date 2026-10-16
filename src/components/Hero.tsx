import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles, Terminal, Layers, Globe } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onExploreWork: () => void;
  onGetInTouch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onGetInTouch }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft radial blur orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[350px] bg-purple-500/15 blur-[120px] rounded-full" />
        {/* Fine grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Natural human editorial kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Digital Innovation & Creative Engineering</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance"
          >
            Build Beyond{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Boundaries.
            </span>
          </motion.h1>

          {/* Value proposition description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance"
          >
            We architect transformative web applications, immersive spatial systems, and
            bespoke digital products that bridge creative imagination with mathematical precision.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onGetInTouch}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium tracking-wide text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-800 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </motion.div>
        </div>

        {/* Cinematic Visual Showcase with Floating Glass Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* Frame with subtle border and glow */}
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-indigo-500/30 via-slate-800/20 to-purple-500/20 shadow-2xl shadow-indigo-950/40">
            <div className="relative rounded-[14px] overflow-hidden bg-slate-950 aspect-[16/9] group">
              <img
                src={HERO_IMAGE}
                alt="ALGORYX digital innovation lab showcase"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Glass Node 1: Left Top */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
                }}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-lg hidden sm:flex items-center gap-2.5 text-xs text-slate-200"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-100">Full-Stack Precision</span>
                  <span className="text-[11px] text-slate-400">TypeScript · WebGL · Reactive Engine</span>
                </div>
              </motion.div>

              {/* Floating Glass Node 2: Right Bottom */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 6, 0]
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg flex items-center gap-3 text-xs text-slate-200"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-semibold block text-slate-100 text-xs">Sub-50ms Rendering</span>
                  <span className="text-[11px] text-indigo-300 font-mono">Lighthouse 99/100 Core Web Vitals</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator prompt */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              const aboutSec = document.querySelector('#about');
              if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer group"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-indigo-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
