import React from 'react';
import { Phone, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

interface EmergencyTopBarProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
  isStormAlert: boolean;
}

export const EmergencyTopBar: React.FC<EmergencyTopBarProps> = ({
  onCallClick,
  onEstimateClick,
  isStormAlert,
}) => {
  return (
    <div className={`text-xs sm:text-sm font-medium transition-colors ${
      isStormAlert ? 'bg-amber-500 text-slate-950 py-2.5' : 'bg-slate-950 text-slate-200 py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-500 text-white animate-pulse">
            <AlertTriangle className="w-3 h-3" />
            {isStormAlert ? 'Dallas Storm Alert' : '24/7 Active'}
          </span>
          <span>
            {isStormAlert
              ? 'Severe Hail & Wind Response Team Dispatched in Dallas County'
              : 'Dallas Emergency Roof Repairs & Free Same-Day Inspections'}
          </span>
          <span className="hidden md:inline-block text-slate-500">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold">
            <Clock className="w-3.5 h-3.5" /> 2-Hour Avg Response
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onCallClick}
            className="flex items-center gap-1.5 font-bold hover:underline transition-all text-amber-400 hover:text-amber-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency Hotline: {companyConfig.phone}</span>
          </button>
          
          <button
            onClick={onEstimateClick}
            className="hidden lg:inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 px-2.5 py-0.5 rounded text-xs font-bold transition"
          >
            <ShieldCheck className="w-3 h-3" />
            0% Financing Options
          </button>
        </div>
      </div>
    </div>
  );
};
