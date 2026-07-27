import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Medal, Home, Star } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { label: 'GAF Master Elite', stat: 'Top 2% in US', icon: Award, color: 'text-amber-400' },
    { label: 'Owens Corning Platinum', stat: 'Preferred Partner', icon: ShieldCheck, color: 'text-emerald-400' },
    { label: 'BBB Accredited', stat: 'A+ Highest Rating', icon: CheckCircle2, color: 'text-blue-400' },
    { label: 'CertainTeed Select', stat: 'Master Craftsman', icon: Medal, color: 'text-purple-400' },
    { label: '10,000+ Dallas Roofs', stat: 'Local & Established', icon: Home, color: 'text-amber-400' },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Micro Header */}
        <div className="text-center mb-6">
          <div className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
            Trusted By 10,000+ Dallas Homeowners & Certified By Industry Leaders
          </div>
        </div>

        {/* Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 flex flex-col items-center text-center justify-center hover:border-slate-700 transition shadow-sm group"
              >
                <IconComponent className={`w-6 h-6 ${item.color} mb-1.5 group-hover:scale-110 transition-transform`} />
                <div className="text-sm font-extrabold text-white leading-tight">{item.label}</div>
                <div className="text-[11px] font-semibold text-slate-400 mt-0.5">{item.stat}</div>
              </div>
            );
          })}
        </div>

        {/* 5-Second Stat Numbers Ribbon */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">10,450+</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Roofs Replaced</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">4.9 ★</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">520+ Google Reviews</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">25 Years</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">In Dallas Fort Worth</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">1 Day</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Avg Install Time</div>
          </div>
        </div>

      </div>
    </section>
  );
};
