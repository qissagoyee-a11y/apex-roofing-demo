import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqData, companyConfig } from '../data/roofingData';

interface FaqSectionProps {
  onCallClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCallClick }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Quick Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Everything you need to know about roof replacement & insurance in Dallas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-900/60 transition"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-slate-900 pt-3">
                    <p className="font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need custom help callout */}
        <div className="mt-10 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-semibold text-slate-300">
            Have a specific storm or insurance question?
          </div>
          <button
            onClick={onCallClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak with a Dallas Specialist ({companyConfig.phone})</span>
          </button>
        </div>

      </div>
    </section>
  );
};
