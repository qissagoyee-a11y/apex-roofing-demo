import React from 'react';
import { DollarSign, Clock, ShieldCheck, Zap, Sparkles, FileText } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    { num: '0%', title: '0% Interest', desc: '18 Months No Interest', icon: DollarSign },
    { num: '2 HR', title: '2-Hour Dispatch', desc: 'Dallas Emergency Response', icon: Clock },
    { num: '1 DAY', title: '1-Day Install', desc: 'Complete Tear-Off & Build', icon: Zap },
    { num: '100%', title: 'Lifetime Warranty', desc: 'Materials & Workmanship', icon: ShieldCheck },
    { num: '0 NAILS', title: 'Clean Yard', desc: 'Triple Magnetic Sweep', icon: Sparkles },
    { num: '$0 OUT', title: 'Insurance Direct', desc: 'We File Your Claim', icon: FileText },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-1">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            The Apex Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Choose Apex
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-xl font-black text-white">{pt.title}</div>
                  <div className="text-xs font-bold text-amber-400">{pt.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
