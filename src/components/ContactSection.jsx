import React, { useState } from 'react';
import { Phone, Mail, Truck, MapPin, CheckCircle, Upload, ArrowRight, Clock } from 'lucide-react';
import { BRAND, PROCESS_STEPS } from '../data/websiteData';

export default function ContactSection({ prefillModel = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    preferredContact: 'email',
    email: '',
    phone: '',
    postcode: '',
    preferredSite: 'Yorkshire',
    carMakeModel: prefillModel || '',
    carRegistration: '',
    services: [],
    message: '',
  });

  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    'Bodystyling & Aero',
    'Carbon Detailing',
    'Forged Wheel Program',
    'Bespoke Interior Re-trim',
    'Sport Exhaust Tuning',
    'Satin / Gloss PPF Protection',
    'Full Atelier Transformation'
  ];

  const handleServiceToggle = (srv) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter(s => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact-studio" className="py-24 sm:py-32 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-3">
            Commissioning Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-6">
            Every build starts with a conversation
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Discuss your automotive ambition with our specialist atelier team. We prepare bespoke proposals tailored to your aesthetic, lifestyle and vehicle specification.
          </p>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Phone */}
          <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#C5A064]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-4 text-[#C5A064]">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">Direct Line</h3>
              <a href={`tel:${BRAND.phoneRaw}`} className="font-serif text-lg text-white hover:text-[#C5A064] transition-colors block">
                {BRAND.phone}
              </a>
            </div>
            <p className="text-[11px] text-white/40 mt-4 pt-4 border-t border-white/5">
              {BRAND.hours}
            </p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#C5A064]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-4 text-[#C5A064]">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">Email Enquiry</h3>
              <a href={`mailto:${BRAND.email}`} className="font-serif text-lg text-white hover:text-[#C5A064] transition-colors block break-all">
                {BRAND.email}
              </a>
            </div>
            <p className="text-[11px] text-white/40 mt-4 pt-4 border-t border-white/5">
              We aim to respond within 1–3 business days
            </p>
          </div>

          {/* Concierge */}
          <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#C5A064]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-4 text-[#C5A064]">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">Concierge</h3>
              <span className="font-serif text-lg text-white block">
                Nationwide Collection
              </span>
            </div>
            <p className="text-[11px] text-white/40 mt-4 pt-4 border-t border-white/5">
              Secure covered transporter service available across the UK
            </p>
          </div>

          {/* Studio Locations */}
          <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#C5A064]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-4 text-[#C5A064]">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">Visit Us</h3>
              <span className="font-serif text-lg text-white block">
                Viewings By Appointment
              </span>
            </div>
            <div className="text-[11px] text-white/50 mt-4 pt-4 border-t border-white/5 flex gap-2">
              <span className="text-[#C5A064] font-medium">Yorkshire</span>
              <span>•</span>
              <span className="text-[#C5A064] font-medium">North West</span>
            </div>
          </div>

        </div>

        {/* The Process (3 Steps) */}
        <div className="mb-20 p-8 sm:p-10 border border-white/10 bg-[#121212]/50">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block mb-2">
            The Consultation Journey
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mb-8">
            A considered process built around you
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="space-y-2">
                <span className="font-serif text-3xl text-[#C5A064]/70 font-light block">
                  {item.step}
                </span>
                <h4 className="font-serif text-lg text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Define Your Specification Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="specification-form">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A064] block">
              Specification Intake
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
              Define Your Specification
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Share your vehicle details and styling preferences so our design team can prepare a comprehensive blueprint and investment outline.
            </p>
            <div className="p-5 border border-white/10 bg-white/[0.01] mt-6 text-xs text-white/50 space-y-2">
              <p className="text-white font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A064]" />
                Estimated Response
              </p>
              <p>We review all submissions within 1–3 business days. For urgent allocations or existing stock queries, please telephone our direct atelier desk.</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#141414] border border-white/15 p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#C5A064]/10 border border-[#C5A064] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#C5A064]" />
                </div>
                <h4 className="font-serif text-3xl text-white">
                  Specification Received
                </h4>
                <p className="text-sm text-white/70 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your commissioning details. A senior atelier consultant has been assigned to review your vehicle specification.
                </p>
                <div className="p-4 bg-white/[0.02] border border-white/10 text-xs text-white/50 font-mono inline-block">
                  Reference: AL-SPEC-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-luxury text-xs py-2 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Row 1: Name & Contact Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Wright"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A064] transition-colors"
                    >
                      <option value="email">Email Communication</option>
                      <option value="phone">Telephone Call</option>
                      <option value="studio">Private Studio Appointment</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7000 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Postcode & Preferred Site */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Postcode / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SW1X 7LA / LS1 1AA"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Preferred Atelier Site *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Yorkshire', 'North West'].map((site) => (
                        <button
                          type="button"
                          key={site}
                          onClick={() => setFormData({ ...formData, preferredSite: site })}
                          className={`py-3 text-xs uppercase tracking-wider font-mono border transition-all ${
                            formData.preferredSite === site
                              ? 'border-[#C5A064] bg-[#C5A064]/10 text-white font-semibold'
                              : 'border-white/15 text-white/50 hover:border-white/30'
                          }`}
                        >
                          {site}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 4: Car Make/Model & Reg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Vehicle Make / Model
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Land Rover Defender 110 V8"
                      value={formData.carMakeModel}
                      onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                      Vehicle Registration
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AB24 CDE"
                      value={formData.carRegistration}
                      onChange={(e) => setFormData({ ...formData, carRegistration: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white uppercase placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors"
                    />
                  </div>
                </div>

                {/* Desired Services Checklist */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-3">
                    Requested Program Scope (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((srv) => {
                      const isChecked = formData.services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => handleServiceToggle(srv)}
                          className={`p-3 text-left text-xs border transition-all flex items-center justify-between ${
                            isChecked
                              ? 'border-[#C5A064] bg-[#C5A064]/10 text-white'
                              : 'border-white/10 bg-white/[0.01] text-white/60 hover:border-white/25'
                          }`}
                        >
                          <span>{srv}</span>
                          <span className={`w-3.5 h-3.5 rounded-none border flex items-center justify-center text-[10px] ${
                            isChecked ? 'border-[#C5A064] bg-[#C5A064] text-black font-bold' : 'border-white/20'
                          }`}>
                            {isChecked && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Current Car Image Upload Simulation */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                    Current Vehicle Reference (Optional)
                  </label>
                  <label className="border border-dashed border-white/20 hover:border-[#C5A064] p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-black/40">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-5 h-5 text-[#C5A064] mb-2" />
                    <span className="text-xs text-white/80 font-medium">
                      {fileName ? fileName : 'Click to upload current vehicle photo or reference'}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 mt-1">
                      JPG, PNG, HEIC up to 25MB
                    </span>
                  </label>
                </div>

                {/* Project Message */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-widest text-[#F2F1ED]/80 mb-2">
                    Project Vision / Special Instructions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your specific goals, preferred colors, interior leather tones, or reference vehicle builds..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A064] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-white/40 font-light text-center sm:text-left">
                    By submitting, your data is treated with strict discretion under our atelier privacy charter.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto btn-luxury btn-luxury-solid py-3 px-8 text-xs flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Synthesizing Proposal...</span>
                    ) : (
                      <>
                        <span>Submit Specification</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
