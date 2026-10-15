import React from 'react';
import { PHILOSOPHY } from '../data/websiteData';

export default function Philosophy({ onStartProject }) {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0C0C] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-3">
            Atelier Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-6">
            Our Approach To Every Build
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your standards.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
          {PHILOSOPHY.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 sm:p-10 bg-white/[0.02] border border-white/10 hover:border-[#C5A064]/50 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl text-[#C5A064]/80 font-light">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                    Phase {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-white mb-4 group-hover:text-[#C5A064] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={onStartProject}
                  className="text-xs uppercase tracking-widest text-[#F2F1ED]/70 group-hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Start Your Project</span>
                  <span className="text-[#C5A064]">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
