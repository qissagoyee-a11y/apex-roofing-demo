import React from 'react';
import { DollarSign, Clock, ShieldCheck, Zap, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      num: '0%',
      title: '0% Interest Financing',
      desc: '18 Months No Payments & No Interest. $0 Down Options Available.',
      icon: DollarSign,
      highlight: 'Flexible Pay',
    },
    {
      num: '2 HR',
      title: 'Same-Day Response',
      desc: 'Dispatched in Dallas County within 2 hours for emergencies.',
      icon: Clock,
      highlight: 'Rapid Arrival',
    },
    {
      num: '1 DAY',
      title: '1-Day Tear-Off & Install',
      desc: 'Full residential roof replacement completed in a single day.',
      icon: Zap,
      highlight: 'Fast Completion',
    },
    {
      num: '100%',
      title: 'Lifetime Warranty',
      desc: 'Includes both manufacturer materials and Apex workmanship.',
      icon: ShieldCheck,
      highlight: 'Zero Risk',
    },
    {
      num: '0 NAILS',
      title: 'Clean Yard Guarantee',
      desc: 'Triple magnetic sweep around landscaping, driveways, & lawn.',
      icon: Sparkles,
      highlight: 'Pet & Kid Safe',
    },
    {
      num: '$0 OUT',
      title: 'Insurance Direct Claim',
      desc: 'We file digital drone reports & negotiate directly with adjusters.',
      icon: FileText,
      highlight: 'No Hassle',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            The Apex Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why 10,000+ Dallas Homeowners Pick Apex
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Zero hassle. High quality. Guaranteed protection.
          </p>
        </div>

        {/* 6-Grid Icon & Stat Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden hover:border-slate-700 transition group"
              >
                {/* Background Large Stat Number */}
                <div className="absolute top-2 right-4 text-4xl font-black text-slate-800/40 select-none group-hover:text-amber-500/10 transition">
                  {pt.num}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-300">
                    {pt.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-1.5">
                  <span>{pt.title}</span>
                </h3>

                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {pt.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-1 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed In Writing</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
