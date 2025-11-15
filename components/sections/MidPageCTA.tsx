import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { FaCalendarCheck, FaArrowRight, FaClock, FaGift, FaDesktop } from 'react-icons/fa';

const MidPageCTA: React.FC = () => {
  return (
    <section className="relative bg-gradient-primary py-16 md:py-24 overflow-hidden">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* メインコンテンツ */}
          <div className="bg-primary-dark/65 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-2 rounded-full text-sm md:text-base font-bold mb-6 border border-white/30">
                <FaCalendarCheck className="text-lg" />
                <span>完全無料・オンライン対応</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                まずは無料相談から<br className="hidden md:block" />始めましょう
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                あなたの事業に「著力」がどう活きるか、<br className="hidden md:block" />
                具体的にお伝えします
              </p>
            </div>

            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="#contact"
                className="bg-gold hover:bg-gold-light text-kindle-black px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto whitespace-nowrap"
                icon={<FaCalendarCheck className="text-xl sm:text-2xl" />}
              >
                無料相談を申し込む
              </Button>
            </div>

            {/* 追加情報 */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="text-white">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FaClock className="text-3xl md:text-4xl text-gold" />
                    <p className="text-3xl md:text-4xl font-bold">30分</p>
                  </div>
                  <p className="text-sm md:text-base opacity-90">相談時間</p>
                </div>
                <div className="text-white">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FaGift className="text-3xl md:text-4xl text-gold" />
                    <p className="text-3xl md:text-4xl font-bold">完全無料</p>
                  </div>
                  <p className="text-sm md:text-base opacity-90">費用は一切かかりません</p>
                </div>
                <div className="text-white">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FaDesktop className="text-3xl md:text-4xl text-gold" />
                    <p className="text-3xl md:text-4xl font-bold">オンライン</p>
                  </div>
                  <p className="text-sm md:text-base opacity-90">全国どこからでもOK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 装飾的な要素 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default MidPageCTA;
