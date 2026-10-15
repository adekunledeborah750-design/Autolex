import React from 'react';
import { ArrowDown, ChevronRight, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export default function Hero({ onStartProject, onExploreBuilds }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Cinematic Visual with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.forgeautomotive.media/images/ed72g2cx/production/35c93330a1cd16aa426b7bded4ad225113f7b6db-3840x2160.png?auto=format&fit=max&w=2400"
          alt="Bespoke Luxury Automotive Build"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
        />
        {/* Layered luxury dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-[#0C0C0C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,12,12,0.85)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Sub-header badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A064] animate-ping"></span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#F2F1ED]/80 font-mono">
            {BRAND.name} Atelier • Bespoke Builds
          </span>
        </div>

        {/* Lead statement */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C5A064] mb-3 font-semibold">
          {BRAND.subTagline}
        </p>

        {/* Main Display Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F2F1ED] leading-[1.08] mb-6 max-w-4xl">
          For Those Who <br className="hidden sm:block" />
          <span className="italic font-light text-white/95">Refuse Ordinary</span>
        </h1>

        {/* Supporting description */}
        <p className="text-sm sm:text-base md:text-lg text-[#F2F1ED]/70 font-light max-w-2xl leading-relaxed mb-10">
          {BRAND.description}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto btn-luxury btn-luxury-solid group"
          >
            <span>Start Your Project</span>
            <ChevronRight className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={onExploreBuilds}
            className="w-full sm:w-auto btn-luxury"
          >
            <span>Explore Builds</span>
          </button>
        </div>

        {/* Atelier Quality Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-12 border-t border-white/10 w-full max-w-3xl text-left">
          <div className="flex items-start gap-3">
            <Sliders className="w-5 h-5 text-[#C5A064] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Full Bespoke Spec</h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Custom exterior styling, interior tailoring & performance geometry.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#C5A064] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Atelier Craftsmanship</h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Forged composites, titanium tuning and leather upholstery.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A064] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Yorkshire & NW Studios</h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Private consultations, viewing bays & nationwide concierge pickup.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
