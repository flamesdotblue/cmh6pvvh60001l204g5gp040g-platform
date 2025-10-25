import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-indigo-50/30 text-slate-900">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
