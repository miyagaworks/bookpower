import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaQuoteRight } from 'react-icons/fa';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-primary text-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-relaxed"
            style={{ fontWeight: 900 }}
          >
            <span className="block md:inline" style={{ marginLeft: "-0.6em" }}>
              「
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
              」がもたらす
            </span>
            <span className="block md:inline">３つの革命</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-left md:text-center px-4 md:px-0">
            著力を手に入れると、あなたのビジネスに「3つの革命」が起こります。
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* 革命1：権威性（旧革命2） */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gold">
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="p-8 md:p-12 bg-gradient-to-br from-gold/30 to-gold/10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  営業力が劇的に上がる
                </h3>
                <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-6">
                  権威性という最強の武器。
                </p>
                {/* 画像: 800×400px (2:1) */}
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-visible">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/revolution/revolution1.png"
                      alt="営業力が劇的に上がる"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute -left-6 -bottom-10 font-bold text-white/50 italic leading-none"
                    style={{
                      fontFamily: "serif",
                      fontSize: "18rem",
                      lineHeight: "1",
                    }}
                  >
                    1
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h4 className="text-2xl font-bold mb-4 text-primary">
                  「著者」という肩書きが全てを変える
                </h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      初対面の人の態度が変わる
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      取引先からの信頼が増す
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      契約率・紹介・リピート率が向上
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      講演依頼・メディア掲載が増える
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      この権威性は一生モノ。消えない資産
                    </span>
                  </li>
                </ul>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                  <div className="flex items-start gap-2">
                    <FaQuoteRight className="text-gold text-xl mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">
                        整体院A社長
                      </p>
                      <p className="text-gray-700 text-sm italic text-justify">
                        名刺に『著者』と書いた瞬間から、周囲の反応が全く変わった
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 革命2：事業理解（旧革命1） */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gold">
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="p-8 md:p-12 bg-gradient-to-br from-gold/30 to-gold/10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  商品・サービスが進化する
                </h3>
                <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-6">
                  事業理解が驚くほど深まる。
                </p>
                {/* 画像: 800×400px (2:1) */}
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-visible">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/revolution/revolution2.png"
                      alt="商品・サービスが進化する"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute -left-6 -bottom-10 font-bold text-white/40 italic leading-none"
                    style={{
                      fontFamily: "serif",
                      fontSize: "18rem",
                      lineHeight: "1",
                    }}
                  >
                    2
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h4 className="text-2xl font-bold mb-4 text-primary">
                  頭の中の「なんとなく」が「明確」に変わる
                </h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      事業の本質が見え、問題点が浮き彫りになる
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      言葉になることで、お客様にも社員にも「伝わる」
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      客観視で強みと問題が明確になる
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      改善が進み、商品・サービスが進化する
                    </span>
                  </li>
                </ul>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                  <div className="flex items-start gap-2">
                    <FaQuoteRight className="text-gold text-xl mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">
                        飲食店経営者
                      </p>
                      <p className="text-gray-700 text-sm italic text-justify">
                        本を書く過程で「料理ではなく居場所を提供している」と気づき、店のコンセプトを変えた。結果、リピート率が40%から75%に上昇
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 革命3：数字 */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gold">
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="p-8 md:p-12 bg-gradient-to-br from-gold/30 to-gold/10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  ビジネスモデル自体が変わる
                </h3>
                <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-6">
                  「待ち」の営業が可能になる。
                </p>
                {/* 画像: 800×400px (2:1) */}
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-visible">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/revolution/revolution3.png"
                      alt="ビジネスモデル自体が変わる"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute -left-6 -bottom-10 font-bold text-white/60 italic leading-none"
                    style={{
                      fontFamily: "serif",
                      fontSize: "18rem",
                      lineHeight: "1",
                    }}
                  >
                    3
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h4 className="text-2xl font-bold mb-4 text-primary">
                  実際に起きた変化
                </h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      整体院：月商が半年で
                      <span className="text-accent text-xl font-bold">
                        3.8倍
                      </span>
                      に跳ね上がった
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      IT企業：応募者が
                      <span className="text-accent text-xl font-bold">
                        10倍
                      </span>
                      、離職率が30%→5%に激減
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                    <span className="text-gray-800 font-semibold text-lg leading-snug">
                      保険代理店：年間
                      <span className="text-accent text-xl font-bold">
                        30件以上
                      </span>
                      の講演依頼、飛び込み営業から卒業
                    </span>
                  </li>
                </ul>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                  <div className="flex items-start gap-2">
                    <FaQuoteRight className="text-gold text-xl mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">
                        保険代理店経営者
                      </p>
                      <p className="text-gray-700 text-sm italic text-justify">
                        年間30件以上の講演依頼が来るようになり、飛び込み営業から完全に卒業できた。すべて「本を出版した」というただ一つの行動から始まった
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
