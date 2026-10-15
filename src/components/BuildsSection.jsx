import React, { useState } from 'react';
import { BUILDS } from '../data/websiteData';
import { ChevronRight, Eye } from 'lucide-react';

export default function BuildsSection({ isFullPage = false, onSelectBuild, onStartProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Land Rover', 'Porsche', 'Lamborghini', 'BMW', 'Mercedes-AMG'];

  const filteredBuilds = filter === 'ALL'
    ? BUILDS
    : BUILDS.filter(b => b.make.toLowerCase().includes(filter.toLowerCase()));

  const displayBuilds = isFullPage ? filteredBuilds : BUILDS.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[#0C0C0C] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-3">
              Commissioning Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Previous Builds
            </h2>
            <p className="text-base sm:text-lg text-white/60 font-light mt-4">
              A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.
            </p>
          </div>

          {isFullPage && (
            <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[11px] uppercase tracking-widest px-3.5 py-1.5 border transition-all ${
                    filter === cat
                      ? 'border-[#C5A064] text-[#C5A064] bg-[#C5A064]/10'
                      : 'border-white/10 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Builds Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {displayBuilds.map((build) => (
            <div
              key={build.code}
              className="group relative bg-[#141414] border border-white/10 hover:border-[#C5A064]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={build.image}
                  alt={build.model}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                {/* Build Badge */}
                <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md px-3 py-1 border border-white/10">
                  <span className="font-mono text-xs text-[#C5A064] tracking-widest">
                    {build.code}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 bg-black/80 border border-white/20 text-xs uppercase tracking-widest text-white flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#C5A064]" />
                    <span>View Specification</span>
                  </span>
                </div>
              </div>

              {/* Build Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#C5A064] transition-colors">
                      {build.model}
                    </h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      {build.make}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    {build.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectBuild(build)}
                    className="text-xs uppercase tracking-widest font-medium text-white/80 group-hover:text-white flex items-center gap-2"
                  >
                    <span>Inspect Archive</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A064] transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onStartProject(build.model)}
                    className="text-[11px] font-mono uppercase tracking-wider text-white/40 hover:text-[#C5A064] transition-colors"
                  >
                    Build Yours &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
