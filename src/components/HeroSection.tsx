import React, { useState } from 'react';
import { Phone, Star, ShieldCheck, Award, Clock, ArrowRight, CheckCircle2, Calculator, Check } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

interface HeroSectionProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCallClick, onEstimateClick }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<'shingle' | 'metal' | 'tile'>('shingle');

  const priceEstimates = {
    shingle: { name: 'Architectural Shingles', price: '$8,500 - $14,000', warranty: 'Lifetime System Warranty', time: '1 Day' },
    metal: { name: 'Standing Seam Metal', price: '$14,000 - $28,000', warranty: '50-Year Non-Prorated Warranty', time: '1-2 Days' },
    tile: { name: 'Tile & Synthetic Slate', price: '$18,000 - $35,000', warranty: 'Lifetime Architectural Warranty', time: '2 Days' },
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust Pills, Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold shadow-inner">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">{companyConfig.googleRating}★</span>
              <span className="text-slate-400">({companyConfig.googleReviewCount}+ Verified Dallas Reviews)</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Dallas’s #1 Rated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  Roofing Contractor
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                Protecting North Texas homes for over 25 years. Fast 1-day replacements, storm repairs, and 0% financing options.
              </p>
            </div>

            {/* Key Trust Metrics (4 Core Badges as requested) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{companyConfig.yearsInBusiness}+ Years</div>
                  <div className="text-[11px] text-slate-400">Dallas Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Licensed & Insured</div>
                  <div className="text-[11px] text-slate-400">#{companyConfig.licenseNumber}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Lifetime Warranty</div>
                  <div className="text-[11px] text-slate-400">Parts & Workmanship</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">1-Day Installation</div>
                  <div className="text-[11px] text-slate-400">Clean Yard Guarantee</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onEstimateClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-3 group hover:-translate-y-0.5"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCallClick}
                className="px-6 py-4 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base transition flex items-center justify-center gap-2.5 shadow-md"
              >
                <Phone className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" />
                <span>Call Now: {companyConfig.phone}</span>
              </button>
            </div>

            {/* Micro Guarantee Line */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Free 15-Min Inspection
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> $0 Down Financing
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Insurance Claim Experts
              </span>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Visual Estimator & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              
              {/* Premium House Roofing Photo */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Apex Roofing Solutions Dallas Texas Home"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div className="text-xs font-bold text-white">
                  Active Crew in <span className="text-amber-400">Highland Park & Frisco</span>
                </div>
              </div>

              {/* Bottom Interactive Estimator Preview Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-4 shadow-xl text-left space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Calculator className="w-4 h-4" /> Quick Cost Estimator Preview
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Dallas Avg 2,400 sq ft</span>
                </div>

                {/* Material Select Pills */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-lg text-xs font-bold">
                  {(['shingle', 'metal', 'tile'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMaterial(m)}
                      className={`py-1.5 px-2 rounded-md transition capitalize ${
                        selectedMaterial === m
                          ? 'bg-amber-400 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                {/* Calculated Result Row */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                  <div>
                    <div className="text-xs text-slate-400">{priceEstimates[selectedMaterial].name}</div>
                    <div className="text-lg font-black text-amber-400">
                      {priceEstimates[selectedMaterial].price}
                    </div>
                  </div>

                  <button
                    onClick={onEstimateClick}
                    className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition flex items-center gap-1"
                  >
                    <span>Exact Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
