import React, { useState, useEffect } from 'react';
import { Phone, Shield, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { companyConfig } from '../data/roofingData';

interface StickyNavbarProps {
  onCallClick: () => void;
  onEstimateClick: () => void;
}

export const StickyNavbar: React.FC<StickyNavbarProps> = ({ onCallClick, onEstimateClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
          : 'bg-slate-900 py-4 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 fill-slate-950 stroke-slate-950" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
              APEX <span className="text-amber-400 font-extrabold">ROOFING</span>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              SOLUTIONS • DALLAS, TX
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onCallClick}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>{companyConfig.phone}</span>
          </button>

          <button
            onClick={onEstimateClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md hover:shadow-amber-400/20 transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            <span>Free Estimate</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onCallClick}
            className="p-2 rounded-lg bg-amber-400 text-slate-950 font-bold"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-3 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEstimateClick();
              }}
              className="w-full py-3 rounded-lg bg-amber-400 text-slate-950 font-black text-center shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              <span>Get Free Estimate (60 Sec)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCallClick();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Hotline: {companyConfig.phone}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
