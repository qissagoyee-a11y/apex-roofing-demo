import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Medal, Home } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const badges = [
    { label: 'GAF Master Elite', stat: 'Top 2% US', icon: Award },
    { label: 'Owens Corning', stat: 'Platinum Partner', icon: ShieldCheck },
    { label: 'BBB Accredited', stat: 'A+ Rating', icon: CheckCircle2 },
    { label: 'CertainTeed', stat: 'Select Craftsman', icon: Medal },
    { label: 'Dallas Local', stat: '10,000+ Roofs', icon: Home },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-center flex flex-col items-center justify-center hover:border-slate-700 transition"
              >
                <Icon className="w-5 h-5 text-amber-400 mb-1" />
                <div className="text-xs font-black text-white">{b.label}</div>
                <div className="text-[10px] font-bold text-slate-400">{b.stat}</div>
              </div>
            );
          })}
        </div>

        {/* 4 Stat Column Ribbon */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-black text-amber-400">10,450+</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Roofs Built</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400">4.9 ★</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">520+ Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400">25 Years</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">In Dallas</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400">1 Day</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Avg Install</div>
          </div>
        </div>

      </div>
    </section>
  );
};
