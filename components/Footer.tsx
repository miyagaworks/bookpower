import React from 'react';
import Container from './ui/Container';
import { SITE_INFO, NAV_ITEMS } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--color-foreground) text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* サイトマップ */}
          <div>
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="space-y-2 text-sm mt-6">
              <a href="https://senrigan.systems/#company" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-gold transition-colors">
                会社概要
              </a>
              <a href="/privacy" className="block text-gray-300 hover:text-gold transition-colors">
                プライバシーポリシー
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-gold transition-colors">
                特定商取引法に基づく表記
              </a>
            </div>
          </div>

          {/* 著力について */}
          <div>
            <h3 className="text-xl font-bold mb-4"><ruby>著力<rt style={{ fontSize: '0.4em', fontWeight: 600, marginBottom: '0.3em' }}>ちょりょく</rt></ruby></h3>
            <p className="text-gray-300 mb-4">{SITE_INFO.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              著力とは、著書を持つことで得られる圧倒的な影響力のこと。本を出版することで、権威性・専門性が高まり、ビジネスを次のステージへと導きます。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Senrigan Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
