import React from 'react';
import { BRAND } from '../data/websiteData';
import { ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer({ setActiveTab, onStartProject }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-[#F2F1ED] border-t border-white/10 relative overflow-hidden">
      
      {/* "Refuse Ordinary" Pre-Footer Call to Action */}
      <div className="py-24 sm:py-32 border-b border-white/10 relative text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#C5A064] block">
            Are You Ready To
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white">
            Refuse Ordinary
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto">
            Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.
          </p>
          <div className="pt-4">
            <button
              onClick={onStartProject}
              className="btn-luxury btn-luxury-solid py-3.5 px-8 text-xs"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#C5A064]"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30 4L4 52H18L30 26L42 52H56L30 4Z" fill="currentColor" />
                <path d="M19 38H41V42H19V38Z" fill="#F2F1ED" />
              </svg>
              <span className="font-serif tracking-[0.3em] text-xl font-bold uppercase text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">
              {BRAND.atelierStatement}
            </p>
            <div className="text-xs font-mono text-white/40 space-y-1">
              <p>Yorkshire &amp; North West Studios</p>
              <p>{BRAND.phone}</p>
              <p>{BRAND.email}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#C5A064]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-light text-white/70">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('builds'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Builds Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('stock'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Available Stock
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('services'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Bespoke Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Commissioning Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Atelier Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#C5A064]">
              Connect &amp; Legal
            </h4>
            <div className="flex items-center gap-4 text-white/60">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-white/40 pt-2">
              <li className="hover:text-white cursor-pointer transition-colors">Cookies</li>
              <li>•</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li>•</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Atelier</li>
              <li>•</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sitemap</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4">
          <p>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
