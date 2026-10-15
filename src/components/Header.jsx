import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'builds', label: 'Builds' },
    { id: 'stock', label: 'Stock' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Socials / Direct Link Desktop */}
          <div className="hidden lg:flex items-center gap-5 text-xs text-[#F2F1ED]/60">
            <a
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BRAND.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="w-px h-3 bg-white/20"></span>
            <span className="tracking-widest uppercase text-[10px] text-white/50">Atelier UK</span>
          </div>

          {/* Center Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Custom Luxury Monogram SVG */}
            <svg
              className="w-8 h-8 text-[#F2F1ED] transition-transform duration-500 group-hover:scale-105"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 4L4 52H18L30 26L42 52H56L30 4Z"
                fill="currentColor"
              />
              <path
                d="M19 38H41V42H19V38Z"
                fill="#C5A064"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-serif tracking-[0.3em] text-lg sm:text-xl font-bold uppercase text-white group-hover:text-[#C5A064] transition-colors">
                AUTOLUXE
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 -mt-1 font-mono">
                Atelier
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links & Action */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-xs uppercase tracking-widestLuxury font-medium transition-all relative py-1 ${
                    activeTab === link.id
                      ? 'text-[#C5A064]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeTab === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5A064]"></span>
                  )}
                </button>
              ))}
            </nav>

            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-2 border border-white/15 px-3.5 py-1.5 rounded-none text-xs text-white/80 hover:text-white hover:border-[#C5A064] transition-all bg-white/[0.02]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A064]" />
              <span className="font-mono text-[11px]">{BRAND.phone}</span>
            </a>
          </div>

          {/* Mobile Menu & Call Icons */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="p-2 border border-white/10 text-white/80 hover:text-white rounded-none"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-4 h-4 text-[#C5A064]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 p-2 border border-white/10 text-white/80 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C0C0C]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A064] block">
              Menu Navigation
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-2xl font-serif text-left tracking-wide transition-colors ${
                    activeTab === link.id ? 'text-[#C5A064]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="text-xs text-white/60 space-y-1">
              <p className="font-medium text-white">{BRAND.fullName}</p>
              <p>{BRAND.hours}</p>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-[#C5A064] block font-mono text-sm pt-1">
                {BRAND.phone}
              </a>
            </div>
            <button
              onClick={() => handleNav('contact')}
              className="w-full btn-luxury btn-luxury-solid py-3 text-center"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </>
  );
}
