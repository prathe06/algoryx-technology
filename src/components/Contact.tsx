import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock, Github, Twitter, Linkedin, Dribbble, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: initialSubject || 'New Project Inquiry',
    message: '',
  });

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'New Project Inquiry',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2"
              >
                Direct Dialogue
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                Let’s construct something extraordinary.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal"
              >
                Have an upcoming digital flagship, architectural web system, or design overhaul?
                Drop your parameters below and our founding team will respond within 24 hours.
              </motion.p>
            </div>

            {/* Practical Contact Points */}
            <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">General Inquiries</span>
                  <a href="mailto:inquiries@algoryx.digital" className="font-medium hover:text-indigo-500 transition-colors">
                    inquiries@algoryx.digital
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Creative Lab Headquarters</span>
                  <span className="font-medium">San Francisco · London · Tokyo</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Typical Response SLA</span>
                  <span className="font-medium font-mono">Under 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Social Proof Channels */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Connect Across Networks
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com' },
                  { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/40 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5 relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Transmission Received
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-indigo-500">{formData.name}</span>.
                      Your project brief regarding <span className="font-semibold text-indigo-500">"{formData.subject}"</span> has been logged. Our engineering directors will evaluate your requirements and reach out via <span className="font-mono">{formData.email}</span>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="e.g. Alex Rivera"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.name
                              ? 'border-rose-500 focus:ring-rose-500/20'
                              : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:ring-rose-500/20'
                              : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Project Subject / Plan *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                        placeholder="e.g. Professional Plan, Web Development, or Custom Spatial UI"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.subject
                            ? 'border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Project Scope & Objectives *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell us about your timeline, core technical requirements, and target outcomes..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message
                            ? 'border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Dispatching Brief...</span>
                          </>
                        ) : (
                          <>
                            <span>Transmit Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
