'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import AuthorityContent from './content/AuthorityContent';
import BusinessClarityContent from './content/BusinessClarityContent';
import PersuasiveContent from './content/PersuasiveContent';

type TabType = 'authority' | 'business-clarity' | 'persuasive';

const DetailedContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('authority');

  const tabs = [
    { id: 'authority' as TabType, label: '権威性', description: '信頼が一瞬で手に入る' },
    { id: 'business-clarity' as TabType, label: '事業理解', description: 'なんとなくが明確に' },
    { id: 'persuasive' as TabType, label: '説得力', description: '待ちの営業が可能に' },
  ];

  const scrollToTabs = () => {
    const element = document.getElementById('tab-navigation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-background">
      <style jsx>{`
        @media (max-width: 767px) {
          h2 ruby rt {
            margin-bottom: -0.5em;
          }
        }
        ruby rt {
          margin-bottom: 0.2em;
        }
      `}</style>
      <Container>
        {/* タブナビゲーション */}
        <div id="tab-navigation" className="mb-12 md:mb-16 relative rounded-xl md:rounded-2xl overflow-hidden">
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <Image
              src="/images/revolution/revolution8.png"
              alt="背景"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
            {/* オーバーレイで視認性向上 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
          </div>

          {/* コンテンツ */}
          <div className="relative z-10 px-4 py-8 md:px-8 md:py-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <ruby className="ruby-spaced">著力<rt style={{ fontSize: '0.35em' }}>ちょりょく</rt></ruby>がもたらす３つの変化を詳しく知る
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-accent-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                それぞれのタブをクリックして、詳細をご覧ください
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-6 max-w-5xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl md:scale-105 border-3 md:border-4 border-gold'
                      : 'bg-white/95 backdrop-blur-sm text-gray-700 shadow-lg hover:shadow-xl md:hover:scale-102 border-2 border-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${
                      activeTab === tab.id ? 'text-white' : 'text-primary'
                    }`}>
                      {tab.label}
                    </h3>
                    <p className={`text-xs sm:text-sm md:text-base ${
                      activeTab === tab.id ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {tab.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* コンテンツ表示エリア */}
        <div className="animate-fadeIn">
          {activeTab === 'authority' && <AuthorityContent />}
          {activeTab === 'business-clarity' && <BusinessClarityContent />}
          {activeTab === 'persuasive' && <PersuasiveContent />}
        </div>

        {/* 下部タブナビゲーション */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
          <div className="text-center mb-6">
            <p className="text-lg md:text-xl font-bold text-primary">
              現在表示中: <span className="text-gold-dark">{tabs.find(tab => tab.id === activeTab)?.label}</span>
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              他のコンテンツも見てみましょう
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-3xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToTabs();
                }}
                className={`flex-1 p-4 md:p-6 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg cursor-default border-3 border-gold'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105 border-2 border-primary/20'
                }`}
              >
                <div className="text-center">
                  <h4 className={`text-lg md:text-xl font-bold mb-1 ${
                    activeTab === tab.id ? 'text-white' : 'text-primary'
                  }`}>
                    {tab.label}
                  </h4>
                  <p className={`text-xs md:text-sm ${
                    activeTab === tab.id ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailedContentSection;
