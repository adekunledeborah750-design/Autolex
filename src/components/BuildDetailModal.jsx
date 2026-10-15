import React from 'react';
import { X, Check, ArrowRight, Shield, Award, Gauge } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export default function BuildDetailModal({ build, onClose, onInquire }) {
  if (!build) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/15 my-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/15 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <img
            src={build.image}
            alt={build.model}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs text-[#C5A064] tracking-widest uppercase bg-black/70 px-2.5 py-1 border border-white/10 inline-block mb-2">
                {build.code} • {build.make}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                {build.model}
              </h2>
            </div>
            {build.price && (
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">Investment</span>
                <span className="font-serif text-2xl sm:text-3xl text-white font-semibold">{build.price}</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] mb-2">
              Build Narrative
            </h4>
            <p className="text-base sm:text-lg text-white/90 font-light italic mb-3">
              "{build.tagline}"
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              {build.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] mb-4">
              Specification Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(build.specs || {}).map(([key, value]) => (
                <div key={key} className="p-4 bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-1">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-5 bg-white/[0.02] border border-white/10 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A064]" />
              <span>Full Atelier Authenticity Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A064]" />
              <span>10-Year Self-Healing Film Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#C5A064]" />
              <span>Nationwide Concierge Delivery</span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/50">
              Reference code: <span className="font-mono text-white">{build.code}</span>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 border border-white/20 text-xs uppercase tracking-widest text-white/70 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire(build);
                }}
                className="w-1/2 sm:w-auto btn-luxury btn-luxury-solid py-2.5 px-6 text-xs flex items-center justify-center gap-2"
              >
                <span>Commission Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
