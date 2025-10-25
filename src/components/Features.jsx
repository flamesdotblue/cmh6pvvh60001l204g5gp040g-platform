import React from 'react';
import { Bot, CreditCard, PieChart, Shield, Sparkles, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bot,
    title: 'Autopilot Categorization',
    desc: 'Let chilavAI auto-label and group your expenses with context-aware AI models tuned for personal finance.'
  },
  {
    icon: PieChart,
    title: 'Smart Insights',
    desc: 'See trends, forecasts, and spending health scores so you can plan with confidence.'
  },
  {
    icon: CreditCard,
    title: 'Seamless Imports',
    desc: 'Connect cards and banks, or drop a CSV. We clean, dedupe, and enrich your data in seconds.'
  },
  {
    icon: Shield,
    title: 'Private by Design',
    desc: 'End-to-end encryption in transit, secure storage, and granular controls for your data.'
  },
  {
    icon: Sparkles,
    title: 'AI Assist',
    desc: 'Ask natural-language questions like “Where did I overspend last month?” and get answers instantly.'
  },
  {
    icon: Smartphone,
    title: 'Everywhere You Are',
    desc: 'Responsive web app that feels native on desktop, tablet, and mobile — no friction.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Features that keep you in control</h2>
          <p className="mt-3 text-slate-600">
            Designed to be delightful and powerful — so staying on top of money becomes effortless.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100/60 blur-2xl transition group-hover:scale-125" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white ring-1 ring-black/5">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
