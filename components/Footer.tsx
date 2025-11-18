import React from 'react';
import Container from './ui/Container';
import { SITE_INFO, NAV_ITEMS } from '@/lib/constants';
import { FaCrown, FaUserGraduate, FaBullhorn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--color-foreground) text-gray-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* サイトマップ */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gold/80 hover:text-gold-light transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="space-y-2 text-sm mt-6">
              <a
                href="https://senrigan.systems/#company"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gold/80 hover:text-gold-light transition-colors"
              >
                会社概要
              </a>
              <a
                href="/privacy"
                className="block text-gold/80 hover:text-gold-light transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href="/specified-commercial-transactions"
                className="block text-gold/80 hover:text-gold-light transition-colors"
              >
                特定商取引法に基づく表記
              </a>
            </div>
          </div>

          {/* 著力について */}
          <div className="md:col-span-4">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              <ruby>
                著力
                <rt
                  style={{
                    fontSize: "0.4em",
                    fontWeight: 600,
                    marginBottom: "0.3em",
                  }}
                >
                  ちょりょく
                </rt>
              </ruby>
            </h3>
            <p className="text-gray-200 mb-4">{SITE_INFO.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed text-justify mb-8">
              著力とは、著書を持つことで得られる大きな影響力のこと。本を出版することで、権威性・専門性が高まり、ビジネスを次のステージへと導きます。
            </p>

            {/* 著力の3つの要素 */}
            <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="flex flex-col items-center text-center">
                <FaCrown className="text-xl md:text-2xl text-gray-200 mb-2" />
                <h4 className="text-sm md:text-base font-bold mb-1 text-gray-200">
                  権威性
                </h4>
                <p className="text-gray-400 text-xs">
                  あなたへの信頼と尊敬が生まれます。
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-xl md:text-2xl text-gray-200 mb-2" />
                <h4 className="text-sm md:text-base font-bold mb-1 text-gray-200">
                  専門性
                </h4>
                <p className="text-gray-400 text-xs">
                  その分野に精通していると受け取られます。
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaBullhorn className="text-xl md:text-2xl text-gray-200 mb-2" />
                <h4 className="text-sm md:text-base font-bold mb-1 text-gray-200">
                  説得力
                </h4>
                <p className="text-gray-400 text-xs">
                  言葉に重みが増し、相手を動かす力となります。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-200 pb-24 lg:pb-6">
          <p>&copy; {currentYear} Senrigan Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
