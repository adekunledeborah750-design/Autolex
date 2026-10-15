import React from 'react';
import { STOCK } from '../data/websiteData';
import { ArrowUpRight, Tag, Clock } from 'lucide-react';

export default function StockSection({ isFullPage = false, onSelectBuild, onInquire }) {
  const displayStock = isFullPage ? STOCK : STOCK.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-3">
            Available Showroom
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Available Stock
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-light mt-4">
            Builds available for immediate delivery, refined with intent, engineered with purpose, and ready to make a statement.
          </p>
        </div>

        {/* Stock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayStock.map((item) => (
            <div
              key={item.code}
              className="bg-[#141414] border border-white/10 hover:border-[#C5A064]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/11] bg-black overflow-hidden">
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs bg-black/80 px-2.5 py-1 text-[#C5A064] border border-white/10">
                    {item.code}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 border ${
                      item.status === 'Available Now'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">Pricing</span>
                  <span className="font-serif text-2xl text-white font-semibold">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C5A064] transition-colors">
                    {item.model}
                  </h3>
                  <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => onSelectBuild(item)}
                    className="flex-1 py-2 px-3 border border-white/20 hover:border-white text-xs uppercase tracking-widest text-white/80 hover:text-white text-center transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onInquire(item)}
                    className="flex-1 py-2 px-3 bg-[#C5A064] hover:bg-[#d6b175] text-[#0C0C0C] font-semibold text-xs uppercase tracking-widest text-center transition-colors"
                  >
                    Inquire
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
