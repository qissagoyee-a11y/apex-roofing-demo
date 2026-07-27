import React from 'react';
import { Shield, Phone, MapPin, Mail } from 'lucide-react';
import { companyConfig, dallasServiceAreas } from '../data/roofingData';

interface FooterProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCallClick, onEstimateClick }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                <Shield className="w-5 h-5 fill-slate-950 stroke-slate-950" />
              </div>
              <div className="text-lg font-black text-white tracking-tight">
                APEX <span className="text-amber-400">ROOFING</span>
              </div>
            </div>
            <div className="text-xs font-bold text-slate-500">
              Dallas, TX • License #{companyConfig.licenseNumber}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {dallasServiceAreas.slice(0, 6).map((area, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-bold text-slate-400">
                {area}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onCallClick}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-bold text-xs"
            >
              Call {companyConfig.phone}
            </button>
            <button
              onClick={onEstimateClick}
              className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs"
            >
              Free Estimate
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-500 gap-2">
          <div>© {new Date().getFullYear()} Apex Roofing Solutions. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">License</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
