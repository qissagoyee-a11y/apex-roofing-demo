import React from 'react';
import { Home, Zap, Building2, ShieldCheck, Search, Check, ArrowRight, Tag } from 'lucide-react';
import { servicesData } from '../data/roofingData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-6 h-6 text-amber-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    Search: <Search className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" /> High-Performance Roofing Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Engineered specifically for Texas hail storms, heat waves, and high winds.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative bg-slate-900 border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                service.popular
                  ? 'border-amber-400/80 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular / Tag Ribbon */}
              {service.tag && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-black tracking-wide uppercase ${
                    service.popular ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Service Card Body */}
              <div className="p-6 space-y-4">
                {/* Header Row */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    {iconMap[service.iconName] || <Home className="w-6 h-6 text-amber-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">{service.title}</h3>
                    <p className="text-xs font-bold text-amber-400">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {service.description}
                </p>

                {/* Scannable Feature List */}
                <ul className="space-y-2 pt-2 border-t border-slate-800">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Price Range & Quick Action */}
              <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Estimated Cost</div>
                  <div className="text-sm font-black text-white">{service.estimatedPriceRange}</div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition flex items-center gap-1.5 ${
                    service.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Select & Estimate</span>
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
