import React, { useState } from 'react';
import { X, Phone, Copy, Check, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

interface CallConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallConfirmationModal: React.FC<CallConfirmationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(companyConfig.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Header */}
        <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto shadow-xl">
          <Phone className="w-8 h-8 fill-amber-400/30 animate-bounce" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white">Call Apex Roofing Dispatch</h3>
          <p className="text-xs text-slate-300 font-medium">
            Dallas County Response Team Active • 24/7 Priority Emergency Line
          </p>
        </div>

        {/* Phone Display Box */}
        <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-3">
          <div className="text-2xl font-black text-amber-400 tracking-wider">
            {companyConfig.phone}
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Dial Phone Now</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Guarantee Pills */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-400 text-left">
          <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Avg Wait: &lt; 30 Sec</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dallas Local Office</span>
          </div>
        </div>

      </div>
    </div>
  );
};
