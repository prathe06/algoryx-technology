import React, { useState } from 'react';
import { ArrowUp, Sparkles, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setError('Please provide a valid email');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 py-16 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800">
          {/* Brand statement */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white">
                ALGORYX
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Digital innovation and creative technology agency. We engineer transformative web architectures, spatial digital platforms, and design systems for boundary-pushing companies.
            </p>
            <div className="text-xs text-slate-400 font-mono">
              Designed for Algoryx Frontend Internship · Week 2 Showcase
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              {['About', 'Services', 'Projects', 'Process', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-600 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block mb-4">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design Systems</li>
              <li>Spatial & 3D Experiences</li>
              <li>Creative Technology R&D</li>
              <li>Performance Engineering</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block mb-4">
              Engineering Dispatch
            </span>
            <p className="text-xs leading-relaxed mb-3">
              Quarterly briefs on web performance, spatial architectures, and motion engineering.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed to dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="engineer@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-rose-500">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} ALGORYX Innovation Labs. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
