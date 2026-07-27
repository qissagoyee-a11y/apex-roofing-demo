import React, { useState } from 'react';
import { Sliders, AlertTriangle, Sparkles, X, Palette, Copy, Check } from 'lucide-react';

interface DemoToolbarProps {
  isStormAlert: boolean;
  setIsStormAlert: (v: boolean) => void;
  onEstimateClick: () => void;
  onCallClick: () => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({
  isStormAlert,
  setIsStormAlert,
  onEstimateClick,
  onCallClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const copyPresentationLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Floating Toggle Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-bold text-xs shadow-2xl hover:bg-slate-800 hover:scale-105 transition-all"
        >
          <Sliders className="w-4 h-4" />
          <span className="hidden sm:inline">Demo Pitch Controls</span>
        </button>
      )}

      {/* Expanded Control Box */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 w-80 text-white space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Presentation Demo Panel
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Toggle Storm Alert Mode */}
            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <AlertTriangle className={`w-4 h-4 ${isStormAlert ? 'text-amber-400' : 'text-slate-500'}`} />
                <div>
                  <div className="font-extrabold text-white">Storm Alert Banner</div>
                  <div className="text-[10px] text-slate-400">Simulate severe weather alert</div>
                </div>
              </div>

              <button
                onClick={() => setIsStormAlert(!isStormAlert)}
                className={`w-10 h-6 rounded-full transition-colors relative ${
                  isStormAlert ? 'bg-amber-400' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-slate-950 absolute top-1 transition-transform ${
                    isStormAlert ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Presentation Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onEstimateClick}
                className="py-2 px-2.5 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px] text-center"
              >
                Test Calculator
              </button>
              <button
                onClick={onCallClick}
                className="py-2 px-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-bold text-[11px] text-center"
              >
                Test Call Modal
              </button>
            </div>

            {/* Copy Presentation Share Link */}
            <button
              onClick={copyPresentationLink}
              className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 font-bold text-[11px] text-slate-300 flex items-center justify-center gap-1.5 transition"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Copy Demo Link for Client'}</span>
            </button>
          </div>

          <div className="text-[10px] text-slate-500 font-mono text-center">
            Apex Roofing Solutions Demo Template v1.0
          </div>
        </div>
      )}
    </div>
  );
};
