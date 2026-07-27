import React, { useState } from 'react';
import { Phone, Star, ShieldCheck, Award, Clock, ArrowRight, Check, Calculator } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

interface HeroSectionProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCallClick, onEstimateClick }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<'shingle' | 'metal' | 'tile'>('shingle');

  const priceEstimates = {
    shingle: { name: 'Architectural Shingle', price: '$8,500 - $14,000' },
    metal: { name: 'Standing Seam Metal', price: '$14,000 - $28,000' },
    tile: { name: 'Synthetic Tile', price: '$18,000 - $35,000' },
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span>4.9★ Rating</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">520+ Dallas Reviews</span>
            </div>

            {/* Main Title (Max 5 Words) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Dallas’s Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Roofing Contractor
              </span>
            </h1>

            {/* 4 Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-800/80">
              <div>
                <div className="text-2xl font-black text-amber-400">25+ Yrs</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">10,000+</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Roofs Built</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">1 Day</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Installation</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">Lifetime</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Warranty</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onEstimateClick}
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl transition flex items-center justify-center gap-2 group"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCallClick}
                className="px-6 py-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                <span>Call {companyConfig.phone}</span>
              </button>
            </div>

            {/* Micro Trust Specs */}
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> $0 Down Financing</span>
            </div>

          </div>

          {/* Right Column: Clean Image & Instant Estimator Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Apex Roofing Dallas Home"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Bottom Interactive Estimator Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 shadow-2xl text-left space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-400 uppercase tracking-wider">
                    <Calculator className="w-4 h-4" /> Quick Estimate
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">2,400 sq ft Avg</span>
                </div>

                <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg text-xs font-bold">
                  {(['shingle', 'metal', 'tile'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMaterial(m)}
                      className={`py-1 rounded-md capitalize transition ${
                        selectedMaterial === m
                          ? 'bg-amber-400 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Estimated Cost</div>
                    <div className="text-base font-black text-amber-400">
                      {priceEstimates[selectedMaterial].price}
                    </div>
                  </div>

                  <button
                    onClick={onEstimateClick}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
