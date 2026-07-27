import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, Upload, ArrowRight, ArrowLeft, Phone, Send, Sparkles } from 'lucide-react';
import { EstimateFormData } from '../types';
import { companyConfig, dallasServiceAreas } from '../data/roofingData';

interface EstimateCalculatorFormProps {
  initialServiceId?: string;
  onCallClick: () => void;
}

export const EstimateCalculatorForm: React.FC<EstimateCalculatorFormProps> = ({
  initialServiceId,
  onCallClick,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<EstimateFormData>({
    serviceType: initialServiceId || 'replacement',
    roofMaterial: 'architectural_shingle',
    propertyType: 'single_family',
    estimatedSqFt: 2200,
    stories: '1_story',
    address: '',
    zipCode: '75201',
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'phone',
    urgency: 'this_week',
    notes: '',
  });

  // Calculate dynamic ballpark quote
  const calculateBallpark = () => {
    let basePerSqFt = 4.5;
    if (formData.roofMaterial === 'standing_seam_metal') basePerSqFt = 8.5;
    if (formData.roofMaterial === 'tile_slate') basePerSqFt = 11.0;
    if (formData.roofMaterial === '3_tab_shingle') basePerSqFt = 3.8;

    if (formData.stories === '2_story') basePerSqFt *= 1.15;
    if (formData.stories === '3_story') basePerSqFt *= 1.25;

    if (formData.serviceType === 'storm_repair') return { min: 350, max: 1500, label: 'Standard Repair / Covered by Insurance' };
    if (formData.serviceType === 'inspection') return { min: 0, max: 0, label: '100% FREE ($0)' };

    const total = Math.round(formData.estimatedSqFt * basePerSqFt);
    const min = Math.round(total * 0.9);
    const max = Math.round(total * 1.15);

    return { min, max, label: `$${min.toLocaleString()} - $${max.toLocaleString()}` };
  };

  const est = calculateBallpark();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate-form" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Instant Estimate Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Get Your Free 60-Second Estimate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Transparent pricing with zero hidden fees & 0% financing options.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10">
          
          {submitted ? (
            /* Success Confirmation View */
            <div className="text-center py-10 space-y-6 max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white">Estimate Request Received!</h3>
                <p className="text-slate-300 text-sm">
                  Thank you <span className="font-bold text-amber-400">{formData.fullName || 'Valued Homeowner'}</span>. Our Dallas roofing project specialist is reviewing your project details now.
                </p>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Ballpark Estimate</div>
                <div className="text-2xl font-black text-amber-400">{est.label}</div>
                <div className="text-xs text-slate-400">
                  Location: <span className="text-white font-semibold">{formData.address || 'Dallas, TX'}</span> ({formData.zipCode})
                </div>
              </div>

              <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-xl text-xs text-amber-200 font-medium">
                ⚡ Need immediate help? Call our dispatch line directly for priority dispatch.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onCallClick}
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Dispatch Now ({companyConfig.phone})</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Stepper Progress Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                {[
                  { num: 1, label: 'Service & Type' },
                  { num: 2, label: 'Size & Specs' },
                  { num: 3, label: 'Contact & Address' },
                ].map((s) => (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => setStep(s.num)}
                    className={`flex items-center gap-2 transition ${
                      step === s.num
                        ? 'text-amber-400 font-black'
                        : step > s.num
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-500 font-medium'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                      step === s.num
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : step > s.num
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    <span className="hidden sm:inline text-xs sm:text-sm">{s.label}</span>
                  </button>
                ))}
              </div>

              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-lg font-black text-white">Step 1: Select Your Service Needs</div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { id: 'replacement', title: 'Complete Roof Replacement', desc: 'Full tear-off & 1-day new roof install' },
                      { id: 'storm_repair', title: 'Storm & Hail Damage Claim', desc: 'Free inspection & insurance claim support' },
                      { id: 'metal_roofing', title: 'Standing Seam Metal Roof', desc: 'Luxury 50+ year architectural metal' },
                      { id: 'inspection', title: 'Free 21-Point Drone Inspection', desc: '100% free checkup with video report' },
                    ].map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: srv.id })}
                        className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
                          formData.serviceType === srv.id
                            ? 'bg-amber-400/10 border-amber-400 text-white ring-1 ring-amber-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-sm text-white">{srv.title}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.serviceType === srv.id ? 'border-amber-400 bg-amber-400' : 'border-slate-700'
                          }`}>
                            {formData.serviceType === srv.id && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 mt-1">{srv.desc}</span>
                      </button>
                    ))}
                  </div>

                  {/* Material Preference */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300">
                      Preferred Material Tier
                    </label>
                    <select
                      value={formData.roofMaterial}
                      onChange={(e) => setFormData({ ...formData, roofMaterial: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="architectural_shingle">GAF Timberline HDZ Architectural Shingles (Most Popular)</option>
                      <option value="standing_seam_metal">Standing Seam Metal Roofing (High Wind & Hail Resistance)</option>
                      <option value="tile_slate">Synthetic Slate & Spanish Tile</option>
                      <option value="3_tab_shingle">Standard 3-Tab Asphalt Shingles</option>
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center gap-2 shadow-md"
                    >
                      <span>Next: Roof Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Size & Specs */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-lg font-black text-white">Step 2: Property & Size Details</div>

                  {/* Estimated Sq Ft Slider */}
                  <div className="space-y-3 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-extrabold uppercase text-slate-300">
                        Approximate Home Size (Sq Ft)
                      </label>
                      <span className="text-lg font-black text-amber-400">
                        {formData.estimatedSqFt.toLocaleString()} sq ft
                      </span>
                    </div>

                    <input
                      type="range"
                      min={1000}
                      max={6000}
                      step={100}
                      value={formData.estimatedSqFt}
                      onChange={(e) => setFormData({ ...formData, estimatedSqFt: Number(e.target.value) })}
                      className="w-full accent-amber-400 cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>1,000 sq ft</span>
                      <span>3,000 sq ft</span>
                      <span>6,000+ sq ft</span>
                    </div>
                  </div>

                  {/* Stories */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase text-slate-300">
                      Property Stories
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: '1_story', label: '1 Story' },
                        { id: '2_story', label: '2 Stories' },
                        { id: '3_story', label: '3+ Stories / Steep' },
                      ].map((st) => (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, stories: st.id })}
                          className={`py-3 px-3 rounded-xl border text-xs font-bold text-center transition ${
                            formData.stories === st.id
                              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Calculation Preview Banner */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-400/40 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Live Calculated Range</div>
                      <div className="text-xl font-black text-amber-400">{est.label}</div>
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">$0 Down Financing Available</span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-bold text-sm flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center gap-2 shadow-md"
                    >
                      <span>Next: Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Address */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-lg font-black text-white">Step 3: Where Should We Send Your Proposal?</div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(214) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4500 Preston Rd"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                        Dallas Area ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 75205"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Photo Upload Mockup */}
                  <div className="border-2 border-dashed border-slate-800 hover:border-slate-700 rounded-2xl p-4 text-center cursor-pointer transition bg-slate-950/50">
                    <Upload className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-300">
                      Optional: Attach Roof / Storm Photo
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Helps our Dallas estimator assess damage before calling
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-bold text-sm flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 transition flex items-center gap-2"
                    >
                      <Send className="w-5 h-5 fill-slate-950" />
                      <span>Submit For Instant Proposal</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
