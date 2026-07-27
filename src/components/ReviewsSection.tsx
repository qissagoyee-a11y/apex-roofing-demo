import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { reviewsData, companyConfig } from '../data/roofingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 text-center sm:text-left">
          <div>
            <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
              Verified Dallas Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Customer Reviews
            </h2>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center gap-3">
            <span className="text-2xl font-black text-white">{companyConfig.googleRating}</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-400">520+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px]">
                <div>
                  <div className="font-extrabold text-white">{rev.author}</div>
                  <div className="text-slate-500 font-bold">{rev.location}</div>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
