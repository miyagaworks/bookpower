'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '本当に1ヶ月で出版できますか？',
      answer: 'はい、可能です。オンライン面談は合計2〜3時間のみで、あとはメール・チャットで完結。原稿作成からデザイン、出版まで全てプロにお任せいただけます。よって、最短1ヶ月で出版できます。ただし、内容の複雑さや修正回数によっては、もう少し時間がかかる場合もあります。'
    },
    {
      question: '文章を書くのが苦手ですが大丈夫ですか？',
      answer: '全く問題ありません。オンライン取材であなたの言葉で話していただくだけで、プロのライターが読みやすい文章に仕上げます。文章力は一切不要です。あなたの経験や知識を引き出すのが私たちの仕事です。'
    },
    {
      question: '本の内容は自分で決めるのですか？',
      answer: '初回の相談で、あなたのビジネスや強み、伝えたいメッセージをヒアリングし、一緒に企画を立てます。本のテーマや構成はプロの視点からアドバイスさせていただきますので、初めての方でも安心です。'
    },
    {
      question: '印税はどれくらいもらえますか？',
      answer: 'Amazon Kindleの印税率は35%〜70%です。販売価格や販売地域によって異なります。重要なのは、あなたが出版者（著者）なので、印税はそのままあなたのものになるということです。弊社が印税を受け取ることはありません。'
    },
    {
      question: '出版後のサポートはありますか？',
      answer: 'はい、ございます。出版後の初回修正は無料でサポートいたします。また、オプションで出版記念セミナー企画や、本と連携したホームページ制作なども承っております。'
    },
    {
      question: '紙の本も出版できますか？',
      answer: 'はい、可能です。Amazon POD（プリント・オン・デマンド）を使った紙の書籍化もサポートしております（別途お見積り）。実物の本を手に入れることで、さらに信頼性が高まります。'
    },
    {
      question: 'どんな業種でも出版できますか？',
      answer: 'はい、業種を問わず対応可能です。これまで整体院、IT企業、保険代理店、製造業など、様々な業種の方の出版をサポートしてきました。あなたのビジネスに合った内容を一緒に考えます。'
    },
    {
      question: '忙しくて時間が取れないのですが...',
      answer: 'ご安心ください。オンライン面談は合計2〜3時間のみで、あとはメール・チャットで完結します。原稿確認やデザイン確認も、すきま時間に行えます。移動時間もゼロなので、忙しい経営者の方でも無理なく進められます。'
    },
    {
      question: '本が売れなかったらどうなりますか？',
      answer: '本の出版の目的は「売上」だけではありません。最も重要なのは「著者」という権威性を手に入れること。名刺に「著者」と書けるだけで、ビジネスでの信頼度が劇的に上がります。もちろん、販売促進のアドバイスもさせていただきます。'
    },
    {
      question: '料金の支払い方法は？',
      answer: '銀行振込またはクレジットカード決済に対応しております。分割払いをご希望の場合は、ご相談ください。詳細は無料相談時にご説明いたします。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white via-background to-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            よくある質問
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold max-w-3xl mx-auto">
            出版に関する疑問にお答えします
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/10 hover:border-gold/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-primary/5 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    Q
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <FaChevronUp className="text-gold text-xl" />
                  ) : (
                    <FaChevronDown className="text-primary text-xl" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="flex items-start gap-4 bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border-l-4 border-gold">
                    <div className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      A
                    </div>
                    <p className="text-gray-800 leading-relaxed text-justify font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* まだ疑問がある方へ */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl border-4 border-gold">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            まだ疑問がありますか？
          </h3>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            無料相談で、どんな質問にもお答えします
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            あなたの状況に合わせた最適なプランをご提案いたします。
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
