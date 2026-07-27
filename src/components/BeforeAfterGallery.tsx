import React, { useState } from 'react';
import { beforeAfterGalleryData } from '../data/roofingData';
import { Sparkles, MapPin, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const activeProj = beforeAfterGalleryData[activeProjectIndex];

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 space-y-1">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            Visual Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Before & After
          </h2>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {beforeAfterGalleryData.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProjectIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${
                activeProjectIndex === idx
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{proj.location}</span>
            </button>
          ))}
        </div>

        {/* Slider Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto">
          <div
            className="relative h-[300px] sm:h-[380px] rounded-xl overflow-hidden border border-slate-800 select-none cursor-ew-resize shadow-2xl"
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
              }
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = touch.clientX - rect.left;
              setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
            }}
          >
            {/* AFTER Image */}
            <img
              src={activeProj.afterImg}
              alt="After Roof"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded shadow uppercase">
              AFTER: Apex
            </div>

            {/* BEFORE Image (Clipped) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeProj.beforeImg}
                alt="Before Roof"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full max-w-none object-cover object-center"
                style={{ width: '100%', height: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-[10px] px-2.5 py-1 rounded shadow uppercase">
                BEFORE: Damaged
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-400 shadow-2xl z-20 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 border-2 border-white shadow-2xl flex items-center justify-center -ml-0.5">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-300">
            <div><span className="text-slate-500">Material:</span> {activeProj.roofType}</div>
            <div><span className="text-slate-500">Time:</span> {activeProj.duration}</div>
            <div className="text-amber-400">{activeProj.notes}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
