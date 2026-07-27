import React from 'react';
import { Shield, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyConfig, dallasServiceAreas } from '../data/roofingData';

interface FooterProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCallClick, onEstimateClick }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                <Shield className="w-5 h-5 fill-slate-950 stroke-slate-950" />
              </div>
              <div className="text-xl font-black text-white tracking-tight">
                APEX <span className="text-amber-400">ROOFING</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier Dallas roofing contractor serving North Texas residential and commercial clients with 1-day replacements, storm restoration, and lifetime warranties.
            </p>

            <div className="text-xs font-mono text-slate-500">
              Texas RCAT License #{companyConfig.licenseNumber}
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              Dallas Dispatch & Emergency
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={onCallClick} className="flex items-center gap-2 hover:text-amber-400 text-left">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Main Hotline: {companyConfig.phone}</span>
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyConfig.address}, {companyConfig.city}, {companyConfig.state}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              North Texas Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {dallasServiceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Demo Template Disclaimer Notice Ribbon */}
        <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Agency Presentation Demo Template:</strong> Designed for client sales presentations. Editable company data & options.
            </span>
          </div>

          <button
            onClick={onEstimateClick}
            className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-black shrink-0 hover:bg-amber-300 transition"
          >
            Launch Estimate Calculator
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} Apex Roofing Solutions Dallas, TX. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">License Verification</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
