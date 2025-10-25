import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-bold">χ</div>
          <span className="text-sm font-semibold text-slate-900">chilavAI</span>
        </div>
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} chilavAI. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
