import React, { useState } from 'react';
import { SERVICES } from '../data/websiteData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Services({ onStartProject }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Intro */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-3">
            Tailored Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-6">
            A vehicle should say something before it moves. <br className="hidden md:block"/>
            <span className="italic font-light text-white/90">Every line, material, and finish is considered.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
            Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.
          </p>
        </div>

        {/* Interactive Services Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Menu List */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {SERVICES.map((service, index) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-6 sm:p-7 border transition-all duration-400 group relative ${
                    isSelected
                      ? 'bg-white/[0.05] border-[#C5A064] text-white shadow-2xl'
                      : 'bg-white/[0.01] border-white/10 hover:border-white/25 text-white/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${isSelected ? 'text-[#C5A064]' : 'text-white/30'}`}>
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 border border-white/10 text-white/50">
                      {service.badge}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/70 font-light leading-relaxed animate-in fade-in duration-300">
                      <p>{service.description}</p>
                      <button
                        onClick={onStartProject}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C5A064] hover:underline"
                      >
                        <span>Commission this service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Service Visual Preview */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] border border-white/15 overflow-hidden bg-black shadow-2xl">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                key={selectedService.id}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

              {/* Overlay Tag */}
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A064]" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-white">
                  {selectedService.badge}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between bg-black/60 backdrop-blur-md p-6 border border-white/10">
                <div>
                  <h4 className="font-serif text-2xl text-white mb-1">
                    {selectedService.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light">
                    {selectedService.summary}
                  </p>
                </div>
                <button
                  onClick={onStartProject}
                  className="btn-luxury py-2 px-4 text-[11px]"
                >
                  Configure
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
