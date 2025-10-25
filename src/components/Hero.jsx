import React from 'react';
import { Rocket, Star, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import mock1 from '../assets/chilavai-mock-1.svg';
import mock2 from '../assets/chilavai-mock-2.svg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="pointer-events-none absolute -left-28 -top-28 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-200/80 to-violet-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 -bottom-28 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-rose-200/70 to-amber-200/60 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-100/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <Star className="h-3.5 w-3.5 text-amber-500" />
            AI-first expense tracking, meet simplicity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
          >
            chilavAI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-4 text-lg leading-7 text-slate-700 sm:text-xl"
          >
            Your AI-powered expense tracker that learns your habits, auto-categorizes transactions, and delivers smart insights — no spreadsheets required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.38 }}
            className="mt-8 grid max-w-lg grid-cols-3 items-center gap-6 text-xs text-slate-600"
          >
            <div className="space-y-0.5">
              <div className="font-semibold text-slate-900">Bank-grade</div>
              <div className="inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Security</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Auto-categorize</div>
              <div className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> with AI</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">5 min</div>
              <div>to first insights</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="group relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 -z-10 animate-pulse rounded-[2rem] bg-gradient-to-tr from-indigo-200 via-sky-200 to-violet-200 opacity-50 blur-2xl" />

            <motion.img
              src={mock1}
              alt="chilavAI mobile mockup - transactions"
              className="relative z-10 w-full rotate-[-6deg] rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition will-change-transform group-hover:rotate-[-4deg]"
              whileHover={{ y: -4 }}
            />

            <motion.img
              src={mock2}
              alt="chilavAI mobile mockup - insights"
              className="absolute -right-12 top-24 w-40 rotate-[12deg] rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl transition will-change-transform sm:w-48 lg:w-56"
              initial={{ opacity: 0, y: 30, rotate: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ y: -6 }}
            />

            <motion.div
              className="pointer-events-none absolute -left-6 bottom-8 hidden h-24 w-24 rounded-full bg-indigo-400/40 blur-2xl sm:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
