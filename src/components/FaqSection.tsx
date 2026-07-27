import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqData, companyConfig } from '../data/roofingData';

interface FaqSectionProps {
  onCallClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCallClick }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 space-y-1">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-white hover:bg-slate-900/50 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs font-bold text-amber-400 border-t border-slate-900 pt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onCallClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-bold text-xs border border-slate-800"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Specialist: {companyConfig.phone}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
