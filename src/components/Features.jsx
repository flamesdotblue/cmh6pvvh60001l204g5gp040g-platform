import React from 'react';
import { Bot, CreditCard, PieChart, Shield, Sparkles, Smartphone } from 'lucide-react';

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

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Features that keep you in control</h2>
          <p className="mt-3 text-slate-600">
            Designed to be delightful and powerful — so staying on top of money becomes effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
