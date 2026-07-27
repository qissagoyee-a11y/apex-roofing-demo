import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { reviewsData, companyConfig } from '../data/roofingData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Storm Damage Insurance Claim', 'Complete Roof Replacement', 'Standing Seam Metal Roof', 'Emergency Leak Repair'];

  const filteredReviews = filter === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.serviceType === filter);

  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold">
              <span className="font-extrabold text-amber-400">Google Rating</span>
              <span className="text-slate-400">•</span>
              <span>Dallas-Fort Worth Verified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Dallas Homeowners Say
            </h2>
          </div>

          {/* Big 4.9 Rating Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xl shrink-0">
            {/* Google G Logo mockup */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-slate-950 text-xl shadow">
              <span className="text-blue-600">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white">{companyConfig.googleRating}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-400">
                Based on {companyConfig.googleReviewCount}+ Verified Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap ${
                filter === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700 transition shadow-md"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-800/50 pointer-events-none" />

              <div className="space-y-3">
                {/* Stars & Verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Verified Customer
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-200 font-medium leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-white">{rev.author}</div>
                  <div className="text-xs text-slate-400 font-medium">{rev.location}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-extrabold text-amber-400">{rev.serviceType}</div>
                  <div className="text-[10px] text-slate-400">{rev.date}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-800 transition"
          >
            <span>Read All 520+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
