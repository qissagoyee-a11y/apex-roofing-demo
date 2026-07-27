import React from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { EstimateCalculatorForm } from './EstimateCalculatorForm';
import { companyConfig } from '../data/roofingData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCallClick: () => void;
  initialServiceId?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  onCallClick,
  initialServiceId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-none">
                Free Estimate Request
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">Dallas, Texas Service Area</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onCallClick();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-amber-400 text-xs font-bold hover:bg-slate-800"
            >
              <Phone className="w-3.5 h-3.5 fill-amber-400/20" />
              <span>Call Hotline</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <EstimateCalculatorForm
            initialServiceId={initialServiceId}
            onCallClick={onCallClick}
          />
        </div>

      </div>
    </div>
  );
};
