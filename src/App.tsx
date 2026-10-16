/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ScrollProcess } from './components/ScrollProcess';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [contactSubject, setContactSubject] = useState<string>('');

  // Synchronize theme with document class list
  useEffect(() => {
    const savedTheme = localStorage.getItem('algoryx_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('algoryx_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToContactWithSubject = (subjectText?: string) => {
    if (subjectText) {
      setContactSubject(subjectText);
    }
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic theme background wrappers */}
      <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Navigation Bar with scroll progress bar & theme toggle */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onNavigateToContact={(plan) => scrollToContactWithSubject(plan ? `Package: ${plan}` : 'General Inquiry')}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero
            onExploreWork={() => scrollToSection('#projects')}
            onGetInTouch={() => scrollToContactWithSubject('Discovery Session')}
          />

          {/* About Section with Animated Counters */}
          <About />

          {/* Services Section with Interactive Capabilities Cards */}
          <Services
            onSelectServiceForContact={(serviceName) =>
              scrollToContactWithSubject(`Service Inquiry: ${serviceName}`)
            }
          />

          {/* Featured Projects with Category Filter & Case Study Modal */}
          <Projects
            onInquireProject={(projectName) =>
              scrollToContactWithSubject(`Project Reference: ${projectName}`)
            }
          />

          {/* Scroll-Driven Process Animation Section */}
          <ScrollProcess />

          {/* Testimonials with Verified Quantitative Outcomes */}
          <Testimonials />

          {/* Transparent Pricing with Monthly / Annual Switcher */}
          <Pricing
            onSelectPlan={(planName) =>
              scrollToContactWithSubject(`Selected Plan: ${planName}`)
            }
          />

          {/* Interactive Contact Form with Real-time Validation */}
          <Contact initialSubject={contactSubject} />
        </main>

        {/* Quiet Production-Grade Footer */}
        <Footer />
      </div>
    </div>
  );
}
