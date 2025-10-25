import React from 'react';
import { Check, Crown } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    subtitle: 'For getting started',
    features: [
      'Connect up to 2 accounts',
      'Monthly summaries',
      'Basic AI categorization',
      'CSV import/export'
    ],
    cta: 'Start Free',
    href: '#',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$7/mo',
    subtitle: 'For power users',
    features: [
      'Unlimited accounts',
      'Real-time sync',
      'Advanced AI insights & chat',
      'Custom rules & alerts',
      'Priority support'
    ],
    cta: 'Go Pro',
    href: '#',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    subtitle: 'For teams & startups',
    features: [
      'SAML/SSO',
      'Role-based access',
      'Audit logs',
      'Dedicated onboarding'
    ],
    cta: 'Contact Sales',
    href: '#',
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-100/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade only when you’re ready.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 shadow-sm transition ${
                tier.highlight
                  ? 'border-slate-900 bg-gradient-to-b from-white to-slate-50 shadow-md'
                  : 'border-slate-200 bg-white hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                  <Crown className="h-3.5 w-3.5" /> Best value
                </div>
              )}
              <div className="mb-4">
                <div className="text-sm font-medium text-slate-600">{tier.subtitle}</div>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-slate-900">{tier.price}</div>
              </div>
              <ul className="space-y-3">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  tier.highlight
                    ? 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900'
                    : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-300'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Prices in USD. Cancel anytime. Pro includes a 7-day free trial. We offer student and non-profit discounts.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
