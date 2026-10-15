import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import BuildsSection from './components/BuildsSection';
import StockSection from './components/StockSection';
import ContactSection from './components/ContactSection';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import BuildDetailModal from './components/BuildDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBuild, setSelectedBuild] = useState(null);
  const [prefillModel, setPrefillModel] = useState('');

  const handleStartProject = (modelName = '') => {
    if (typeof modelName === 'string' && modelName) {
      setPrefillModel(modelName);
    }
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('specification-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleInquireStock = (stockItem) => {
    setPrefillModel(`${stockItem.model} (${stockItem.code})`);
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('specification-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F2F1ED] flex flex-col justify-between selection:bg-[#F2F1ED] selection:text-[#410306]">
      {/* Fixed Luxury Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onStartProject={() => handleStartProject()}
              onExploreBuilds={() => {
                setActiveTab('builds');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <Marquee />
            <Philosophy onStartProject={() => handleStartProject()} />
            <Services onStartProject={() => handleStartProject()} />
            <BuildsSection
              isFullPage={false}
              onSelectBuild={setSelectedBuild}
              onStartProject={handleStartProject}
            />
            <StockSection
              isFullPage={false}
              onSelectBuild={setSelectedBuild}
              onInquire={handleInquireStock}
            />
            <ContactSection prefillModel={prefillModel} />
          </>
        )}

        {activeTab === 'builds' && (
          <div className="pt-20">
            <BuildsSection
              isFullPage={true}
              onSelectBuild={setSelectedBuild}
              onStartProject={handleStartProject}
            />
            <Marquee />
          </div>
        )}

        {activeTab === 'stock' && (
          <div className="pt-20">
            <StockSection
              isFullPage={true}
              onSelectBuild={setSelectedBuild}
              onInquire={handleInquireStock}
            />
            <Marquee />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-20">
            <Services onStartProject={() => handleStartProject()} />
            <Philosophy onStartProject={() => handleStartProject()} />
            <Marquee />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-20">
            <ContactSection prefillModel={prefillModel} />
            <Marquee />
          </div>
        )}
      </main>

      {/* Detail Modal for inspecting vehicle specifications */}
      {selectedBuild && (
        <BuildDetailModal
          build={selectedBuild}
          onClose={() => setSelectedBuild(null)}
          onInquire={(build) => handleInquireStock(build)}
        />
      )}

      {/* Luxury Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onStartProject={() => handleStartProject()}
      />
    </div>
  );
}
