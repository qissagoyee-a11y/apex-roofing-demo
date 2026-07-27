import React from 'react';
import { Search, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface SimpleProcessProps {
  onEstimateClick: () => void;
}

export const SimpleProcess: React.FC<SimpleProcessProps> = ({ onEstimateClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Free 15-Min Inspection',
      desc: 'High-definition drone scan & thermal moisture test. 100% free with zero obligation.',
      icon: Search,
      time: 'Same-Day Service',
    },
    {
      num: '02',
      title: 'Transparent Upfront Quote',
      desc: 'Fixed-price estimate options with $0 down financing choices & insurance guidance.',
      icon: FileCheck,
      time: 'Instantly Delivered',
    },
    {
      num: '03',
      title: '1-Day Flawless Install',
      desc: 'Expert crew tears off, installs new roof, and sweeps yard with magnetic sweeps in 1 day.',
      icon: ShieldCheck,
      time: 'Completed in 24 Hrs',
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            Simple 3-Step Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How Apex Replaces Your Roof
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            From initial drone scan to final clean yard in 3 easy steps.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-400/60 transition group shadow-lg"
              >
                {/* Giant Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {step.time}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>Apex Guarantee Included</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-400/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-black text-white">Ready to Schedule Your Free 15-Minute Inspection?</h4>
            <p className="text-sm text-slate-300">No high-pressure sales. Just transparent, expert answers.</p>
          </div>

          <button
            onClick={onEstimateClick}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Book Free Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
