import React from 'react';
import Container from '../ui/Container';
import { FaQuoteLeft, FaCheckCircle, FaLightbulb, FaBrain, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

const BusinessClaritySection: React.FC = () => {
  return (
    <section
      id="business-clarity"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-white to-background"
    >
      <Container>
        {/* セクション1: オープニング */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
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
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                「あなたの事業について、30秒で説明してください」
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-justify">
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h4 className="text-xl font-bold text-gray-700 mb-4 text-justify">
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
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700">
                      これはあなたの説明力が低いからではない
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700">
                      事業の本質が、まだ言語化されていないだけ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 font-bold">
                      本を書くことは、自分の事業を徹底的に言語化すること
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-6 md:p-8 rounded-xl border-l-4 border-gold text-justify">
              <h4 className="text-xl font-bold text-primary mb-4">
                言語化する5つの項目
              </h4>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <FaLightbulb className="text-3xl text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    なぜこの事業を始めたのか
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <FaBrain className="text-3xl text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    どんな問題を解決しているのか
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <FaUsers className="text-3xl text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    誰のためのサービスなのか
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <FaChartLine className="text-3xl text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    他社との違いは何なのか
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <FaHandshake className="text-3xl text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    自分の強みは何なのか
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-xl text-center">
              <p className="text-xl md:text-2xl font-bold mb-2">起こる変化</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-3xl mb-2">💭→💡</p>
                  <p className="text-sm">モヤモヤ → クリア</p>
                </div>
                <div>
                  <p className="text-3xl mb-2">🌫️→☀️</p>
                  <p className="text-sm">曖昧 → はっきり</p>
                </div>
                <div>
                  <p className="text-3xl mb-2">🧩→📦</p>
                  <p className="text-sm">バラバラ → まとまる</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション2: 実例 - 20年目の気づき */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              飲食店経営者が初めて知った「本当に提供していたもの」
            </h2>
            <p className="text-xl text-gray-700">20年目の気づき</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                飲食店経営者（20年）の体験談
              </h3>
              <p className="text-lg opacity-90">
                本を書く過程で見えた、事業の本質
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    本を書く前
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      「美味しい料理を出す店」だと思っていた
                    </p>
                    <p className="text-gray-700 italic text-sm">
                      自分の提供価値を明確に説明できなかった
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-accent" />
                    言語化の過程で気づいた
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-bold">
                      提供していたのは「料理」じゃなく「居場所」だった
                    </p>
                    <p className="text-gray-700 italic text-sm">
                      常連客が求めていたのは「ほっとできる場所」
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-primary mb-6 text-center">
                  具体的な変化
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-primary/10">
                    <h5 className="font-bold text-primary mb-3">
                      サービスの見直し
                    </h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">
                          メニューをシンプルに: 30種類 → 15種類
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">
                          カウンター席の間隔を広げる
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">
                          BGMを落ち着いた雰囲気に変更
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">
                          スタッフ教育の方針転換
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-gold/20 to-gold/5 p-6 rounded-xl border-2 border-gold">
                    <h5 className="font-bold text-primary mb-3">驚きの結果</h5>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">リピート率</p>
                        <p className="text-2xl font-bold text-accent">
                          40% → 75%
                        </p>
                        <p className="text-xs text-gray-500">(1.9倍)</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">売上</p>
                        <p className="text-2xl font-bold text-accent">
                          1年で1.5倍
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
                <div className="flex items-start gap-3">
                  <FaQuoteLeft className="text-gold text-3xl mt-1 flex-shrink-0" />
                  <p className="text-xl text-primary font-bold italic">
                    これは、本を書かなければ決して起きなかった変化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション3: 説明力が格段に向上する */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              本を書く前と後で、最も大きく変わるもの
            </h2>
            <p className="text-xl text-gray-700">それは「説明力」</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-600 mb-4">
                  Before
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  うまく説明できない…
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl mb-4">
                <p className="text-gray-700 italic text-justify">
                  「うちのサービスは、えーっと、要するに、お客様の課題を解決するための、まあ、総合的なソリューションというか……」
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">長い</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">曖昧</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">相手は「？」という表情</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl shadow-xl p-8 border-2 border-accent">
              <div className="text-center mb-4">
                <div className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-bold text-white mb-4">
                  After
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  30秒で相手が理解！
                </h3>
              </div>
              <div className="bg-white p-6 rounded-xl mb-4 shadow-md">
                <p className="text-primary font-semibold text-justify">
                  「中小企業の採用課題を、3ヶ月で解決するサービスです。独自の手法で、『辞めない社員』を採用できるようになります」
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent" />
                  <span className="text-gray-700 font-semibold">短い</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent" />
                  <span className="text-gray-700 font-semibold">明確</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent" />
                  <span className="text-gray-700 font-semibold">
                    相手は「なるほど！」という表情
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              なぜこの変化が起こるのか
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">
                  1
                </div>
                <p className="text-gray-700 text-lg">
                  本を書くプロセス = 何度も何度も推敲するプロセス
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">
                  2
                </div>
                <p className="text-gray-700 text-lg">
                  「この表現で伝わるだろうか？」を繰り返す
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">
                  3
                </div>
                <p className="text-gray-700 text-lg font-bold">
                  本を書くプロセス自体が、最高の説明力トレーニング
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-center">
                この説明力が活きる場面
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl mb-2">💼</p>
                  <p className="text-sm">営業</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl mb-2">📊</p>
                  <p className="text-sm">プレゼン</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl mb-2">🤝</p>
                  <p className="text-sm">採用面接</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl mb-2">💬</p>
                  <p className="text-sm">取引先との交渉</p>
                </div>
              </div>
              <p className="text-center mt-4 text-lg font-semibold">
                あらゆる場面で威力を発揮
              </p>
            </div>
          </div>
        </div>

        {/* セクション4: 社員・パートナーへの浸透効果 */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              理念が「お題目」から「行動指針」に変わる
            </h2>
            <p className="text-xl text-gray-700">
              社員・パートナーへの浸透効果
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                経営者の悩み
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">
                    朝礼で話す、ミーティングで伝える、社内報に書く
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">
                    でも、なかなか浸透しない
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <p className="text-gray-700 font-bold">なぜか？</p>
                <p className="text-gray-600 text-sm mt-2">
                  あなた自身が、理念を明確に言語化できていないから
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl shadow-xl p-8 border-2 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-6">
                本が解決する
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700">
                    本を書くことで、理念が明確に言語化される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700">
                    その本を社員に渡せば、一瞬で理念が伝わる
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-white p-4 rounded-lg border-l-4 border-gold shadow-md">
                <p className="text-primary font-bold">結果</p>
                <p className="text-gray-700 text-sm mt-2">
                  曖昧な理念は曖昧にしか伝わらない。明確な理念は明確に伝わる。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              実例：製造業の場合
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-xl mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">90%</p>
                  <p className="text-sm text-gray-600">
                    入社3ヶ月後の理念理解度
                  </p>
                </div>
                <p className="text-xs text-gray-500">(出版前は30%)</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-6 rounded-xl mb-4">
                  <p className="text-5xl font-bold text-accent mb-2">100%</p>
                  <p className="text-sm text-gray-600">
                    新入社員全員に自著を配布
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gold/10 p-6 rounded-xl mb-4">
                  <p className="text-4xl mb-2">💬</p>
                  <p className="text-sm text-gray-600">
                    社員が自分の言葉で説明できるように
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
                <h4 className="font-bold text-primary mb-3">
                  採用面接での威力
                </h4>
                <p className="text-gray-700 mb-3 text-justify">
                  「うちの会社は、こういう理念でやっています」と言いながら自著を手渡す。応募者の目が変わる。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary mb-1">
                      応募者の反応
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      「この社長、本気だ」「この会社、信頼できる」
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-accent mb-1">
                      IT企業の事例
                    </p>
                    <p className="text-sm text-gray-700">
                      内定承諾率<span className="font-bold">1.5倍</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-xl">
                <h4 className="font-bold mb-4 text-center text-xl">
                  社内教育ツールとして
                </h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl mb-2">📚</p>
                    <p className="text-sm">新人研修</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl mb-2">👔</p>
                    <p className="text-sm">管理職研修</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl mb-2">💼</p>
                    <p className="text-sm">営業マニュアル</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl mb-2">🔄</p>
                    <p className="text-sm">組織全体に浸透</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション5: 事業の見直しと改善 */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              書こうとすると、矛盾や曖昧さが浮き彫りになる
            </h2>
            <p className="text-xl text-gray-700">
              事業の見直しと改善につながる
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              書く過程で気づくこと
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-700 mb-4">よくある気づき</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">💡</span>
                    <span className="text-gray-700">
                      「あれ、この部分、説明しづらいな」
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">💡</span>
                    <span className="text-gray-700">
                      「なぜこのサービスをやっているんだっけ？」
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">💡</span>
                    <span className="text-gray-700">
                      「この強み、本当に強みなのか？」
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 p-6 rounded-xl border-2 border-accent">
                <h4 className="font-bold text-primary mb-4">重要な真実</h4>
                <p className="text-lg text-gray-700 font-bold">
                  説明しづらい部分 = 事業そのものに問題がある可能性
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* 実例1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  建設会社の事例
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    書く過程で気づいた
                  </h4>
                  <p className="text-gray-700 mb-3 text-justify">
                    「何でもやります」は強みになっていない。むしろ弱みだった。
                  </p>
                  <p className="text-gray-700 font-bold">
                    思い切って「住宅リフォーム専門」に特化
                  </p>
                </div>
                <div className="bg-gold/10 p-6 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3">結果</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-accent shrink-0" />
                      <span className="text-gray-700 text-sm">
                        説明がシンプルに
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-accent shrink-0" />
                      <span className="text-gray-700 text-sm">集客が楽に</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-accent shrink-0" />
                      <span className="text-gray-700 text-sm">
                        利益率アップ
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 実例2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  税理士事務所の事例
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    書く過程で明確に
                  </h4>
                  <p className="text-gray-700 mb-3 text-justify">
                    「自分が本当に提供したい価値は何か」
                  </p>
                  <p className="text-gray-700 font-bold">
                    「記帳代行中心」→「経営コンサルティング中心」にシフト
                  </p>
                </div>
                <div className="bg-gold/10 p-6 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3">結果</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">売上</p>
                      <p className="text-lg font-bold text-gray-700">
                        変わらず
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">利益率</p>
                      <p className="text-2xl font-bold text-accent">2倍</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              戦略の再構築
            </h3>
            <p className="text-lg mb-6 text-center">
              本を書くこと = 自分の事業を客観的に見つめ直す機会
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-center">「今のやり方で本当にいいのか？」</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-center">「もっと効率的な方法はないか？」</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-center">
                  「次のステージに進むには何が必要か？」
                </p>
              </div>
            </div>
            <p className="text-center text-lg">
              書きながら、自然とこうした問いが浮かぶ
            </p>
          </div>
        </div>

        {/* セクション6: なぜ本を書くと事業理解が深まるのか */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              なぜ本を書くと事業理解が深まるのか
            </h2>
            <p className="text-xl text-gray-700">3つの科学的根拠</p>
          </div>

          <div className="space-y-6">
            {/* 理由1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    「読者に伝える」という制約が思考を整理する
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-3">普段</h4>
                    <p className="text-gray-700 mb-4">
                      「自分がわかっていればいい」前提
                    </p>
                    <h4 className="font-bold text-primary mb-3">本を書く時</h4>
                    <p className="text-gray-700">
                      「初めて聞く人にもわかるように」という制約
                    </p>
                  </div>
                  <div className="bg-accent/10 p-6 rounded-xl">
                    <p className="text-gray-700 font-bold mb-3">
                      この制約が思考を整理する
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">
                          曖昧な部分は曖昧なままでは書けない
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">
                          論理の飛躍があれば、読者は理解できない
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">
                          だから、書く過程で自然と思考が磨かれる
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 理由2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    構造化された情報は記憶に残りやすい
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-700 mb-3">
                      本 = 章立て、見出し、構造化
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      構造化こそが記憶に残る鍵
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">✗</span>
                        <span className="text-gray-600 text-sm">
                          バラバラの情報は忘れやすい
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm font-semibold">
                          体系化された情報は忘れにくい
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gold/10 p-6 rounded-xl border-2 border-gold">
                    <p className="text-lg text-primary font-bold mb-4">
                      本を書くことで
                    </p>
                    <p className="text-gray-700 mb-3 text-justify">
                      事業に関する知識が体系化
                    </p>
                    <p className="text-gray-700 font-bold">
                      あなた自身の脳に深く刻まれる
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 理由3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    アウトプットが最強のインプット
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">
                      学習科学の研究
                    </h4>
                    <p className="text-gray-700 mb-3 text-justify">
                      インプットよりアウトプットの方が学習効果が高い
                    </p>
                    <p className="text-gray-700 text-sm">
                      本を読むだけより、本を書く方が圧倒的に学びが深い
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
                    <div className="text-center mb-4">
                      <p className="text-5xl mb-2">📚✍️</p>
                    </div>
                    <p className="text-lg text-primary font-bold text-center mb-2">
                      本を書くこと = 最高のアウトプット
                    </p>
                    <p className="text-gray-700 text-center text-sm">
                      だからこそ、事業理解が驚くほど深まる
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション7: クロージング */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-gold">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは3つを書き出してみてください
            </h2>
            <p className="text-xl text-white/90">今すぐできる簡単なワーク</p>
          </div>

          <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    あなたの事業の強みを3つ
                  </p>
                  <p className="text-white/70 text-sm">
                    思いつくものを書き出してみましょう
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    お客様が本当に求めているものは何か
                  </p>
                  <p className="text-white/70 text-sm">
                    商品・サービスの先にあるもの
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    なぜこの事業を続けているのか
                  </p>
                  <p className="text-white/70 text-sm">
                    あなたの原動力は何ですか
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 p-6 rounded-xl backdrop-blur text-center mb-8">
            <p className="text-xl mb-4">
              書き出してみて、すぐに言葉にできましたか？
            </p>
            <p className="text-lg">
              もし迷ったなら、本を書くプロセスが必ずあなたの助けになります
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-6">次のステップ</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-sm">事業の本質を言語化したい</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-sm">社員に理念を伝えたい</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <p className="text-sm">次のステージへの道筋を見つけたい</p>
              </div>
            </div>
            <p className="text-xl mb-4">
              そんなあなたは、まず無料相談から始めましょう
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessClaritySection;
