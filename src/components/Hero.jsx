import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              AI-first expense tracking, meet simplicity
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              chilavAI
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-700 sm:text-xl">
              Your AI-powered expense tracker that learns your habits, categorizes automatically, and helps you spend smarter — without the spreadsheets.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
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
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 items-center gap-6 text-xs text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">Bank-grade</div>
                <div>Security & Privacy</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Auto-categorize</div>
                <div>with AI insights</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">5 min</div>
                <div>to first insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
