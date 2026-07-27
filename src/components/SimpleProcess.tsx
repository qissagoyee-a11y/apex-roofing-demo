import React from 'react';
import { Search, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface SimpleProcessProps {
  onEstimateClick: () => void;
}

export const SimpleProcess: React.FC<SimpleProcessProps> = ({ onEstimateClick }) => {
  const steps = [
    { num: '01', title: 'Free Drone Inspection', desc: '4K Aerial Leak & Hail Scan', time: '15 Mins' },
    { num: '02', title: 'Upfront Proposal', desc: 'Fixed Price & Insurance Options', time: 'Instant' },
    { num: '03', title: '1-Day Roof Install', desc: 'Clean Yard Guarantee', time: '24 Hours' },
  ];

  return (
    <section id="process" className="py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-1">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            Simple 3 Steps
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center">
                  {st.num}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  {st.time}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">{st.title}</h3>
                <div className="text-xs font-bold text-slate-400 mt-1">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onEstimateClick}
            className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm inline-flex items-center gap-2 shadow-xl"
          >
            <span>Start Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
