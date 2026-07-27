import React, { useState } from 'react';
import { beforeAfterGalleryData } from '../data/roofingData';
import { Sparkles, MapPin, Calendar, ShieldCheck, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const activeProj = beforeAfterGalleryData[activeProjectIndex];

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Real Dallas Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Before & After Proof
          </h2>
          <p className="text-slate-400 text-base font-medium">
            Drag the handle or click projects to view high-impact roof replacements.
          </p>
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
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeProjectIndex === idx
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{proj.location.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Slider Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Image Drag Comparison Canvas */}
            <div className="lg:col-span-7">
              <div
                className="relative h-[320px] sm:h-[420px] rounded-xl overflow-hidden border border-slate-800 select-none cursor-ew-resize group shadow-2xl"
                onMouseMove={(e) => {
                  if (e.buttons === 1) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
                    setSliderPos(pct);
                  }
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const touch = e.touches[0];
                  const x = touch.clientX - rect.left;
                  const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
                  setSliderPos(pct);
                }}
              >
                {/* AFTER Image (Full background) */}
                <img
                  src={activeProj.afterImg}
                  alt="After Roof Replacement"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* AFTER Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow-lg z-10 uppercase tracking-wider">
                  AFTER: Apex New Roof
                </div>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={activeProj.beforeImg}
                    alt="Before Damaged Roof"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full max-w-none object-cover object-center"
                    style={{ width: '100%', height: '100%', minWidth: '100%' }}
                  />
                  {/* BEFORE Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-md shadow-lg z-10 uppercase tracking-wider">
                    BEFORE: Hail Damaged
                  </div>
                </div>

                {/* Drag Handle Bar */}
                <div
                  className="absolute inset-y-0 w-1 bg-amber-400 shadow-xl z-20 flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 border-2 border-white shadow-2xl flex items-center justify-center -ml-0.5">
                    <ArrowLeftRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Instruction micro banner */}
                <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                  <span className="inline-block bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 border border-slate-800 shadow">
                    👈 Drag handle left or right to compare 👉
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Project Highlights & Specs */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" /> {activeProj.location}
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {activeProj.title}
                </h3>
              </div>

              <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Installed Materials</div>
                  <div className="font-extrabold text-white mt-0.5">{activeProj.roofType}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Completion</div>
                      <div className="text-xs font-bold text-white">{activeProj.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Warranty Tier</div>
                      <div className="text-xs font-bold text-white">{activeProj.warranty}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-400/10 border border-amber-400/20 p-3.5 rounded-xl text-xs font-medium text-amber-200">
                <span className="font-bold">Project Result: </span>
                {activeProj.notes}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
