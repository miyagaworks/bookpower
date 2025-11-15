import React from 'react';
import { FaQuoteLeft, FaCheckCircle, FaArrowRight, FaChartLine, FaBriefcase, FaHandshake, FaUsers, FaBullhorn, FaTrophy, FaTimesCircle } from 'react-icons/fa';

const PersuasiveContent: React.FC = () => {
  return (
    <>
      {/* セクション1: オープニング */}
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-snug">
            飛び込み営業から完全に卒業した日
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            「待ち」の営業が可能になる
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
          <div className="mb-4">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              保険代理店経営者の体験談
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 relative">
              <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                本を出版する前
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">毎日の飛び込み営業</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">断られ続ける日々</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">心身ともに疲弊</span>
                </li>
              </ul>
              {/* PC only icon */}
              <FaTimesCircle className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-8xl opacity-30" />
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent relative">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-accent" />
                本を出版して1年後
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 font-bold">年間30件以上の講演依頼</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 font-bold">飛び込み営業は一切していない</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">精神的にも時間的にも余裕が生まれた</span>
                </li>
              </ul>
              {/* PC only icon */}
              <FaCheckCircle className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-success text-8xl opacity-30" />
            </div>
          </div>

          <div className="bg-primary/5 p-6 md:p-8 rounded-xl border-l-4 border-gold mb-6">
            <div className="flex items-start gap-3">
              <FaQuoteLeft className="text-gold text-3xl mt-1 flex-shrink-0" />
              <div>
                <p className="text-xl text-primary font-bold mb-4">
                  なぜ「本を出版した」だけで、営業スタイルが180度変わるのか？
                </p>
                <p className="text-xl md:text-2xl text-gray-700">
                  答え: <span className="font-bold text-accent">説得力が劇的に向上するから</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 md:p-8 rounded-xl">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 text-center">説得力の定義</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="flex justify-center mb-4">
                  <FaBullhorn className="text-5xl text-gold" />
                </div>
                <p className="text-center text-lg md:text-xl font-semibold leading-relaxed">相手が「この人の話を聞きたい」と思う力</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="flex justify-center mb-4">
                  <FaHandshake className="text-5xl text-gold" />
                </div>
                <p className="text-center text-lg md:text-xl font-semibold leading-relaxed">相手が「この人なら信頼できる」と感じる力</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <div className="flex justify-center mb-4">
                  <FaTrophy className="text-5xl text-gold" />
                </div>
                <p className="text-center text-lg md:text-xl font-semibold leading-relaxed">相手が「お願いします」と言ってくれる力</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* セクション2: 具体的な成果 */}
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-snug">
            本を出版した人たちに実際に起きた変化
          </h2>
          <p className="text-xl text-gray-700">
            具体的な成果を数字で証明
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 成果1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-4xl text-gold" />
              <h3 className="text-xl md:text-2xl font-bold text-primary">契約率が劇的に向上</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-base text-gray-600 mb-1">経営コンサルタント</p>
                <p className="text-2xl font-bold text-accent">5% → 12% <span className="text-lg">(2.4倍)</span></p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-base text-gray-600 mb-1">士業事務所</p>
                <p className="text-2xl font-bold text-accent">15% → 38% <span className="text-lg">(2.5倍)</span></p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-base text-gray-600 mb-1">整体院</p>
                <p className="text-2xl font-bold text-accent">リピート率 25% → 65% <span className="text-lg">(2.6倍)</span></p>
              </div>
            </div>
          </div>

          {/* 成果2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-4xl text-gold" />
              <h3 className="text-xl md:text-2xl font-bold text-primary">契約までのスピードが速くなる</h3>
            </div>
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
              <h4 className="text-base font-bold text-primary mb-4">士業事務所の事例</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-base text-gray-600 mb-1">契約までの平均日数</p>
                  <p className="text-3xl font-bold text-accent">60日 → 7日</p>
                  <p className="text-sm text-gray-500 mt-1">(8.6倍速)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base text-gray-700">「検討します」が「お願いします」に変わる</p>
                  <p className="text-base text-gray-700">初回面談で即決する人が増加</p>
                </div>
              </div>
            </div>
          </div>

          {/* 成果3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-4xl text-gold" />
              <h3 className="text-xl md:text-2xl font-bold text-primary">紹介・口コミが増える</h3>
            </div>
            <div className="mb-4">
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 text-base">「本を出している先生がいるよ」と紹介される</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 text-base">紹介される時の信頼度が全く違う</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700 text-base">紹介された相手も、事前に本を読んでくれる</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                <p className="text-sm font-bold text-primary mb-1">実例：税理士事務所</p>
                <p className="text-sm text-gray-700">紹介が<span className="font-bold text-accent">2倍</span>に、紹介された人の契約率<span className="font-bold text-accent">90%以上</span></p>
              </div>
            </div>
          </div>

          {/* 成果4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <FaTrophy className="text-4xl text-gold" />
              <h3 className="text-xl md:text-2xl font-bold text-primary">価格競争から脱却</h3>
            </div>
            <div className="mb-4">
              <p className="text-base text-gray-700 mb-4 text-justify">
                「著者」という権威性で差別化。価格ではなく、信頼で選ばれる。値上げしても顧客は離れない。
              </p>
              <div className="bg-gold/10 p-6 rounded-xl border-2 border-gold">
                <p className="text-base font-bold text-primary mb-3">実例：整体院</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-base text-gray-600">施術料</p>
                    <p className="text-2xl font-bold text-accent">5,000円 → 8,000円</p>
                  </div>
                  <p className="text-base text-gray-700">顧客は減らず、むしろリピート率が上昇</p>
                  <p className="text-base text-gray-700 italic">「この本を書いた先生なら」と納得してもらえる</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ビジネスモデル転換 */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">ビジネスモデルが変わる：「攻め」から「待ち」へ</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur relative">
            <h4 className="text-xl md:text-2xl font-bold mb-6">従来（攻め）</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-base md:text-lg">
                <span className="text-white/60">•</span>
                <span>こちらから営業をかけ続ける</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg">
                <span className="text-white/60">•</span>
                <span>飛び込み、テレアポ、広告</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg">
                <span className="text-white/60">•</span>
                <span>労力がかかり続ける</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg font-bold">
                <span className="text-white/60">•</span>
                <span>営業を止めると売上が止まる</span>
              </li>
            </ul>
            {/* PC・タブレット only icon */}
            <FaTimesCircle className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-white text-8xl opacity-20" />
          </div>
          <div className="bg-white/20 p-6 md:p-8 rounded-xl backdrop-blur border-2 border-gold relative">
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-gold">出版後（待ち）</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-base md:text-lg font-bold">
                <span className="text-gold">•</span>
                <span>向こうから問い合わせが来る</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg">
                <span className="text-gold">•</span>
                <span>講演依頼、取材依頼、紹介</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg">
                <span className="text-gold">•</span>
                <span>一度出版すれば効果が持続</span>
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg font-bold">
                <span className="text-gold">•</span>
                <span>営業コストが劇的に削減</span>
              </li>
            </ul>
            {/* PC・タブレット only icon */}
            <FaCheckCircle className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-white text-8xl opacity-20" />
          </div>
        </div>

        <div className="bg-white/20 p-6 md:p-8 rounded-xl backdrop-blur text-center">
          <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
            投資対効果で考えれば、これほど優れた施策は他にない
          </p>
          <p className="text-lg md:text-xl">
            平均投資額<span className="text-gold font-bold text-2xl md:text-3xl mx-2">約10万円</span>→ 年間増収<span className="text-gold font-bold text-2xl md:text-3xl mx-2">数百〜数千万円</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PersuasiveContent;
