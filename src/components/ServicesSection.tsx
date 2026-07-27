import React from 'react';
import { Home, Zap, Building2, ShieldCheck, Search, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/roofingData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-5 h-5 text-amber-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Building2: <Building2 className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    Search: <Search className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Max 4 words) */}
        <div className="text-center mb-12 space-y-1">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
            High-Performance Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Roofing Services
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-slate-900 border rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/60 transition ${
                service.popular ? 'border-amber-400/80 shadow-xl shadow-amber-500/10' : 'border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {iconMap[service.iconName]}
                  </div>
                  {service.tag && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                      {service.tag}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black text-white leading-tight">{service.title}</h3>
                  <div className="text-xs font-bold text-amber-400 mt-0.5">{service.subtitle}</div>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-slate-800 text-xs font-bold text-slate-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Cost</div>
                  <div className="text-sm font-black text-white">{service.estimatedPriceRange}</div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
