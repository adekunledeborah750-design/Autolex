import React from 'react';
import { MARQUEE_BRANDS } from '../data/websiteData';

export default function Marquee() {
  return (
    <div className="py-8 bg-[#0C0C0C] border-y border-white/5 overflow-hidden relative select-none">
      {/* Subtle fade masks on sides */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
          <div
            key={i}
            className="flex items-center space-x-12 opacity-40 hover:opacity-90 transition-opacity duration-300"
          >
            <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.3em] text-[#F2F1ED] whitespace-nowrap">
              {brand}
            </span>
            <span className="w-1.5 h-1.5 bg-[#C5A064] rotate-45 inline-block"></span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
