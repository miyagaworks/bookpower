import React from 'react';
import { FaQuoteLeft, FaCheckCircle, FaLightbulb, FaBrain, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

const BusinessClarityContent: React.FC = () => {
  return (
    <>
      {/* セクション1: オープニング */}
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-snug">
            「なんとなく」が「明確」に変わる瞬間
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            30秒で説明できますか？　あなたの事業について
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
          <div className="mb-8">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              問いかけ
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-justify">
              「あなたの事業について、30秒で説明してください」
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 text-justify">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">
                多くの経営者が詰まってしまう
              </h4>
              <div className="space-y-3">
                <p className="text-gray-700 italic">「えーっと、うちは……」</p>
                <p className="text-gray-700 italic">
                  「簡単に言うと……いや、でも……」
                </p>
                <p className="text-gray-700 font-semibold">
                  頭の中では理解しているはずなのに、うまく言葉にできない
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
              <h4 className="text-xl font-bold text-primary mb-4">
                真実の提示
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    これはあなたの説明力が低いからではない
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    事業の本質が、まだ言語化されていないだけ
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 font-bold">
                    本を書くことは、自分の事業を徹底的に言語化すること
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 md:p-8 rounded-xl border-2 border-gold">
            <h4 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">
              言語化する5つの項目
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-4xl text-gold" />
                </div>
                <p className="text-base font-bold text-gray-800 text-center leading-snug">
                  なぜこの事業を
                  <br />
                  始めたのか
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaBrain className="text-4xl text-gold" />
                </div>
                <p className="text-base font-bold text-gray-800 text-center leading-snug">
                  どんな問題を
                  <br />
                  解決しているのか
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-4xl text-gold" />
                </div>
                <p className="text-base font-bold text-gray-800 text-center leading-snug">
                  誰のための
                  <br />
                  サービスなのか
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-4xl text-gold" />
                </div>
                <p className="text-base font-bold text-gray-800 text-center leading-snug">
                  他社との違いは
                  <br />
                  何なのか
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-4xl text-gold" />
                </div>
                <p className="text-base font-bold text-gray-800 text-center leading-snug">
                  自分の強みは
                  <br />
                  何なのか
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary to-primary-light text-white p-6 md:p-8 rounded-xl">
            <p className="text-xl md:text-2xl font-bold mb-6 text-center">
              起こる変化
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-lg md:text-xl font-bold mb-2">
                  モヤモヤ → クリア
                </p>
                <p className="text-sm opacity-90">思考が整理される</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-lg md:text-xl font-bold mb-2">
                  曖昧 → はっきり
                </p>
                <p className="text-sm opacity-90">言葉で表現できる</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-lg md:text-xl font-bold mb-2">
                  バラバラ → まとまる
                </p>
                <p className="text-sm opacity-90">体系的に理解できる</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* セクション2: 実例 */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-snug">
            飲食店経営者が初めて知った
            <br className="hidden md:block" />
            「本当に提供していたもの」
          </h2>
          <p className="text-xl text-gray-700">20年目の気づき</p>
        </div>

        <div className="bg-gradient-to-br from-background to-white rounded-2xl shadow-xl overflow-hidden border border-primary/10">
          {/* ヘッダー */}
          <div className="relative bg-gradient-to-r from-primary to-primary-light p-6 md:p-8 text-white overflow-hidden">
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

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                飲食店経営者（20年）の体験談
              </h3>
              <p className="text-base md:text-lg opacity-90">
                本を書く過程で見えた、事業の本質
              </p>
            </div>
          </div>

          {/* コンテンツ */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* 本を書く前 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-bold mb-4 text-gray-700 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  本を書く前
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400">•</span>
                    <span>「美味しい料理を出す店」だと思っていた</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400">•</span>
                    <span>自分の提供価値を明確に説明できなかった</span>
                  </li>
                </ul>
              </div>

              {/* 言語化の過程で気づいた */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold/30">
                <h4 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  言語化の過程で気づいた
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 text-xl shrink-0" />
                    <span className="text-accent font-bold text-xl">
                      提供していたのは「料理」じゃなく「居場所」だった
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 text-xl shrink-0" />
                    <span className="text-gray-700">
                      常連客が求めていたのは「ほっとできる場所」
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 text-xl shrink-0" />
                    <span className="text-accent font-bold text-xl">
                      リピート率40% → 75%（1.9倍！）
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 text-xl shrink-0" />
                    <span className="text-accent font-bold text-xl">
                      1年で売上1.5倍
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 引用 */}
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-gold text-2xl mt-1 flex-shrink-0" />
                <p className="text-lg md:text-xl text-primary font-semibold italic text-justify">
                  これは、本を書かなければ決して起きなかった変化
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessClarityContent;
