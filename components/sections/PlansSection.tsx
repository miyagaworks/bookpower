import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { PRICING_PLANS } from '@/lib/constants';
import { FaCheck, FaStar, FaCalendarCheck } from 'react-icons/fa';

const PlansSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-primary">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            料金プラン
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            3つのプランから選べます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'border-gold' : 'border-primary/20'
              }`}
            >
              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-gold to-gold-light text-white px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                  <FaStar />
                  <span className="font-bold">一番人気</span>
                </div>
              )}

              {/* ヘッダー */}
              <div className={`p-8 text-center ${plan.popular ? 'bg-gradient-to-br from-gold/30 to-gold/10' : 'bg-gradient-to-br from-primary/15 to-primary/5'}`}>
                <h3 className="text-3xl font-bold mb-2 text-primary">
                  {plan.name}
                </h3>
                <p className="text-gray-800 font-semibold mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    {plan.priceText.split('（')[0]}
                  </span>
                  <span className="text-gray-700 text-sm ml-1 font-semibold">（税込）</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/images/icons/mainicon.svg"
                    alt="icon"
                    width={60}
                    height={60}
                    className="shrink-0"
                  />
                  <div className="text-left text-base space-y-1">
                    <div className="text-primary font-bold">{plan.pages}</div>
                    <div className="text-primary font-bold">納期：{plan.delivery}</div>
                  </div>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-8">
                <h4 className="font-bold text-xl mb-4 text-primary">サポート内容</h4>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheck className="text-gold-dark shrink-0 text-lg" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="md"
                  fullWidth
                  icon={<FaCalendarCheck />}
                  className={!plan.popular ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white' : ''}
                >
                  このプランで相談する
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* すべてのプランに含まれるもの */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-8 border-2 border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
            すべてのプランに含まれるもの
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'あなたが出版者（印税35%〜70%はそのまま受取）',
              '本の要約作成サポート',
              'Amazon Kindle出版サポート',
              '表紙デザイン',
              '出版後の修正サポート（初回のみ）',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <FaCheck className="text-gold-dark text-xl shrink-0" />
                <span className="text-white font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* オプションサービス */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
            オプションサービス
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gold/30">
              <h4 className="font-bold text-xl mb-2 text-primary">出版手続き完全代行</h4>
              <p className="text-2xl font-bold text-gold-dark mb-2">5,500円（税込）</p>
              <p className="text-gray-800 font-medium text-justify">
                Kindle出版の手続きを完全代行。面倒な作業は全てお任せください。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gold/30">
              <h4 className="font-bold text-xl mb-2 text-primary">ホームページ制作・リニューアル</h4>
              <p className="text-xl font-bold text-gold-dark mb-2">別途お見積り</p>
              <p className="text-gray-800 font-medium text-justify">
                出版した本と連携したホームページで、さらに信頼性を高めます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gold/30">
              <h4 className="font-bold text-xl mb-2 text-primary">出版記念セミナー企画</h4>
              <p className="text-2xl font-bold text-gold-dark mb-2">110,000円（税込）〜</p>
              <p className="text-gray-800 font-medium text-justify">
                出版を最大限に活用するためのセミナー企画をサポートします。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gold/30">
              <h4 className="font-bold text-xl mb-2 text-primary">紙の書籍化サポート</h4>
              <p className="text-xl font-bold text-gold-dark mb-2">別途お見積り</p>
              <p className="text-gray-800 font-medium text-justify">
                Amazon PODを使った紙の書籍化もサポート。実物の本を手に入れられます。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlansSection;
