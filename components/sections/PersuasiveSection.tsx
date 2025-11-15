import React from 'react';
import Container from '../ui/Container';
import { FaQuoteLeft, FaCheckCircle, FaArrowRight, FaBullhorn, FaChartLine, FaHandshake, FaUsers, FaBriefcase, FaTrophy, FaInfinity } from 'react-icons/fa';

const PersuasiveSection: React.FC = () => {
  return (
    <section id="persuasive-power" className="py-16 md:py-24 bg-gradient-to-b from-white via-background to-white">
      <Container>
        {/* セクション1: オープニング */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              飛び込み営業から完全に卒業した日
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              「待ち」の営業が可能になる
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
            <div className="mb-8">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
                保険代理店経営者の体験談
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  本を出版する前
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">毎日の飛び込み営業</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">断られ続ける日々</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">心身ともに疲弊</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-accent" />
                  本を出版して1年後
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 font-bold">年間30件以上の講演依頼</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 font-bold">飛び込み営業は一切していない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700">精神的にも時間的にも余裕が生まれた</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-6 md:p-8 rounded-xl border-l-4 border-gold mb-8">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-gold text-3xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xl text-primary font-bold mb-4">
                    なぜ「本を出版した」だけで、営業スタイルが180度変わるのか？
                  </p>
                  <p className="text-lg text-gray-700">
                    答え: <span className="font-bold text-accent">説得力が劇的に向上するから</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-center">説得力の定義</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <p className="text-center">相手が「この人の話を聞きたい」と思う力</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <p className="text-center">相手が「この人なら信頼できる」と感じる力</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <p className="text-center">相手が「お願いします」と言ってくれる力</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション2: 説得力がもたらす3つの変化 */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              本を出版すると、なぜ説得力が上がるのか
            </h2>
            <p className="text-xl text-gray-700">
              説得力がもたらす3つの変化
            </p>
          </div>

          <div className="space-y-8">
            {/* 変化1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">説明が短く、明確になる</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-700 mb-3">本を書く前</h4>
                    <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
                      <p className="text-gray-700 italic text-sm">
                        「うちのサービスは、えーっと…」
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">✗</span>
                        <span className="text-gray-600 text-sm">長々と説明しても相手は「？」</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">✗</span>
                        <span className="text-gray-600 text-sm">自分でも何を言っているのかわからなくなる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
                    <h4 className="font-bold text-primary mb-3">本を書いた後</h4>
                    <div className="bg-white p-4 rounded-lg mb-4 shadow-md">
                      <p className="text-primary font-semibold text-sm">
                        30秒で説明できる
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">相手が「なるほど！」と理解してくれる</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700 text-sm">「詳しくは本に書いてあります」で深掘りできる</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gold/10 p-6 rounded-xl border-l-4 border-gold">
                  <h4 className="font-bold text-primary mb-3">なぜこの変化が起こるのか</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-gold mt-1 shrink-0" />
                      <span className="text-gray-700 text-sm">本を書く = 何度も推敲するプロセス</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-gold mt-1 shrink-0" />
                      <span className="text-gray-700 text-sm">「どう伝えれば理解してもらえるか」を徹底的に考える</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-gold mt-1 shrink-0" />
                      <span className="text-gray-700 text-sm font-bold">結果、説明力が格段に向上する</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 変化2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">信頼が瞬時に得られる</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-700 mb-3">本がない場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700 text-sm">「この人、本当に信頼できるのか？」</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700 text-sm">実績を一つひとつ説明する必要がある</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700 text-sm">信頼されるまでに時間がかかる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl border-2 border-accent">
                    <h4 className="font-bold text-primary mb-3">本がある場合</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">「本を出版している」という事実が信頼を証明</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm font-bold">説明不要で信頼される</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">初対面でも「著者の方なんですね」で関係性が変わる</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 変化3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">本が営業ツールになる</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-primary mb-4">本の使い方</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">名刺に著書を記載 → 話題になる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">商談で本を見せる → 「読んでみます」</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">セミナーで配布 → 「先生の本を読みました」</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">Amazonリンクを送る → 事前に読んでもらえる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
                    <h4 className="font-bold text-primary mb-3">実例：経営コンサルタント</h4>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm">初回面談前に本のAmazonリンクを送る</p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">相手が事前に読んでくる</p>
                        <p className="text-sm font-bold text-primary">↓</p>
                        <p className="text-xs text-gray-600 mb-1">面談がスムーズに進む</p>
                        <p className="text-sm font-bold text-primary">↓</p>
                        <p className="text-sm font-bold text-accent">契約率 5% → 12% (2.4倍)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション3: 具体的な成果 - 数字で証明 */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              本を出版した人たちに実際に起きた変化
            </h2>
            <p className="text-xl text-gray-700">
              具体的な成果を数字で証明
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 成果1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-4xl text-gold" />
                <h3 className="text-xl md:text-2xl font-bold text-primary">契約率が劇的に向上</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">経営コンサルタント</p>
                  <p className="text-2xl font-bold text-accent">5% → 12% <span className="text-lg">(2.4倍)</span></p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">士業事務所</p>
                  <p className="text-2xl font-bold text-accent">15% → 38% <span className="text-lg">(2.5倍)</span></p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">整体院</p>
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
                <h4 className="font-bold text-primary mb-4">士業事務所の事例</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">契約までの平均日数</p>
                    <p className="text-3xl font-bold text-accent">60日 → 7日</p>
                    <p className="text-xs text-gray-500 mt-1">(8.6倍速)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">「検討します」が「お願いします」に変わる</p>
                    <p className="text-sm text-gray-700">初回面談で即決する人が増加</p>
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
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 text-sm">「本を出している先生がいるよ」と紹介される</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 text-sm">紹介される時の信頼度が全く違う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 text-sm">紹介された相手も、事前に本を読んでくれる</span>
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
                <p className="text-gray-700 mb-4 text-justify">
                  「著者」という権威性で差別化。価格ではなく、信頼で選ばれる。値上げしても顧客は離れない。
                </p>
                <div className="bg-gold/10 p-6 rounded-xl border-2 border-gold">
                  <p className="text-sm font-bold text-primary mb-3">実例：整体院</p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-600">施術料</p>
                      <p className="text-xl font-bold text-accent">5,000円 → 8,000円</p>
                    </div>
                    <p className="text-sm text-gray-700">顧客は減らず、むしろリピート率が上昇</p>
                    <p className="text-sm text-gray-700 italic">「この本を書いた先生なら」と納得してもらえる</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 成果5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <FaBullhorn className="text-4xl text-gold" />
                <h3 className="text-xl md:text-2xl font-bold text-primary">講演・セミナー依頼が増える</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">保険代理店</p>
                  <p className="text-2xl font-bold text-accent">年間30件以上<span className="text-lg">の講演依頼</span></p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">メディアは常に「専門家」を探している</p>
                  <p className="text-sm text-gray-700">専門家の証明として最もわかりやすいのが「著書」</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">依頼される理由</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700">• 本を出版している = 専門家という認識</li>
                    <li className="text-xs text-gray-700">• 主催者側が安心して依頼できる</li>
                    <li className="text-xs text-gray-700">• 参加者も「著者の話を聞ける」と集まりやすい</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 成果6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-4xl text-gold" />
                <h3 className="text-xl md:text-2xl font-bold text-primary">採用力が向上</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">IT企業</p>
                  <p className="text-2xl font-bold text-accent">応募者 10倍</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">製造業</p>
                  <p className="text-2xl font-bold text-accent">内定承諾率 1.5倍</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">なぜ採用力が上がるのか</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700">• 「著者が経営する会社」というブランド力</li>
                    <li className="text-xs text-gray-700">• 質の高い応募者が増加</li>
                    <li className="text-xs text-gray-700 italic">• 「本を読んで働きたいと思いました」という応募</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション4: ビジネスモデルが変わる */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              「攻め」から「待ち」へ
            </h2>
            <p className="text-xl text-gray-700">
              ビジネスモデルが変わる
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">従来のビジネスモデル（攻め）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">こちらから営業をかけ続ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">飛び込み、テレアポ、広告</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">労力がかかり続ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700 font-bold">営業を止めると売上が止まる</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl shadow-xl p-8 border-2 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">本を出版後のビジネスモデル（待ち）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700 font-bold">向こうから問い合わせが来る</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700">講演依頼、取材依頼、紹介</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700">一度出版すれば効果が持続</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-700 font-bold">営業コストが劇的に削減</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 実例1: 保険代理店 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <h4 className="text-xl font-bold text-primary mb-6">実例：保険代理店</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">出版前</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700">• 毎日の飛び込み営業</li>
                    <li className="text-xs text-gray-700">• 月間契約数: 平均5件</li>
                    <li className="text-xs text-gray-700">• 疲弊する日々</li>
                  </ul>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">出版後</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700">• 飛び込み営業ゼロ</li>
                    <li className="text-xs text-gray-700">• 講演依頼年間30件以上</li>
                    <li className="text-xs text-gray-700 font-bold">• 月間契約数: 平均15件 (3倍)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 実例2: 経営コンサルタント */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10">
              <h4 className="text-xl font-bold text-primary mb-6">実例：経営コンサルタント</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">出版前</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700">• 50人に会って1人契約 (2%)</li>
                    <li className="text-xs text-gray-700">• 説明に時間がかかる</li>
                    <li className="text-xs text-gray-700">• 「怪しい」と思われる</li>
                  </ul>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">3冊出版後</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700 font-bold">• 契約率12% (6倍)</li>
                    <li className="text-xs text-gray-700">• 名刺裏に本3冊の表紙</li>
                    <li className="text-xs text-gray-700 font-bold">• 月収30万円→100万円</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">ビジネスモデル転換のメリット</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl mb-2">⏰</p>
                <p className="text-sm font-semibold mb-1">時間の余裕</p>
                <p className="text-xs opacity-90">営業に追われなくなる</p>
              </div>
              <div className="text-center">
                <p className="text-3xl mb-2">😌</p>
                <p className="text-sm font-semibold mb-1">精神的余裕</p>
                <p className="text-xs opacity-90">断られ続けるストレスから解放</p>
              </div>
              <div className="text-center">
                <p className="text-3xl mb-2">📈</p>
                <p className="text-sm font-semibold mb-1">収益の安定</p>
                <p className="text-xs opacity-90">紹介や口コミで安定した契約</p>
              </div>
              <div className="text-center">
                <p className="text-3xl mb-2">🚀</p>
                <p className="text-sm font-semibold mb-1">次のステージへ</p>
                <p className="text-xs opacity-90">新規事業や事業拡大に時間を使える</p>
              </div>
            </div>
          </div>
        </div>

        {/* セクション5: 売上・利益への直接的インパクト */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              結局、売上はどれくらい変わるのか
            </h2>
            <p className="text-xl text-gray-700">
              売上・利益への直接的インパクト
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* ROI実例 - 詳細は省略してCaseStudiesSectionを参照してもらう形に */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gold">
              <h4 className="text-xl font-bold text-primary mb-4">整体院（地方都市、スタッフ1人）</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">投資額</p>
                    <p className="text-lg font-bold text-gray-700">264,000円</p>
                    <p className="text-xs text-gray-500">(88,000円×3冊)</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">月商</p>
                    <p className="text-2xl font-bold text-accent">3.8倍</p>
                  </div>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-sm font-bold text-primary mb-1">年間増収</p>
                  <p className="text-3xl font-bold text-accent">約6,600万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gold">
              <h4 className="text-xl font-bold text-primary mb-4">経営コンサルタント（独立5年目）</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">投資額</p>
                    <p className="text-lg font-bold text-gray-700">165,000円</p>
                    <p className="text-xs text-gray-500">(55,000円×3冊)</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">月収</p>
                    <p className="text-xl font-bold text-accent">30→100万</p>
                  </div>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-sm font-bold text-primary mb-1">年間増収</p>
                  <p className="text-3xl font-bold text-accent">約840万円</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">ROI（投資対効果）の分析</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur mb-2">
                  <p className="text-4xl font-bold text-gold">約10万円</p>
                </div>
                <p className="text-sm">平均投資額</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur mb-2">
                  <p className="text-4xl font-bold text-gold">数百〜数千万円</p>
                </div>
                <p className="text-sm">年間増収効果</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur mb-2">
                  <p className="text-4xl font-bold text-gold">1〜数ヶ月</p>
                </div>
                <p className="text-sm">投資回収期間</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur mb-2">
                  <p className="text-4xl font-bold text-gold">一生</p>
                </div>
                <p className="text-sm">効果の持続期間</p>
              </div>
            </div>

            <div className="bg-white/20 p-6 rounded-xl backdrop-blur text-center">
              <p className="text-2xl font-bold">
                投資対効果で考えれば、これほど優れた施策は他にない
              </p>
            </div>
          </div>
        </div>

        {/* セクション6: なぜここまで説得力が上がるのか */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              なぜここまで説得力が上がるのか
            </h2>
            <p className="text-xl text-gray-700">
              3つの科学的根拠
            </p>
          </div>

          <div className="space-y-6">
            {/* 理由1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">ハロー効果（後光効果）</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">心理学的説明</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">一つの優れた特徴が、他の評価も引き上げる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">「本を出版している」→「優れた専門家だ」と無意識に判断</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">実際の実力以上に評価される</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gold/10 p-6 rounded-xl border-2 border-gold">
                    <h4 className="font-bold text-primary mb-3">実験データ</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-600">同じ内容の講演でも</p>
                        <p className="text-sm font-bold text-accent">「著者」紹介で満足度1.8倍</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-600">名刺に「著書あり」記載で</p>
                        <p className="text-sm font-bold text-accent">信頼度2.3倍</p>
                      </div>
                    </div>
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
                  <h3 className="text-2xl md:text-3xl font-bold">社会的証明の原理</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">心理学的説明</h4>
                    <p className="text-gray-700 mb-4 text-justify">
                      多くの人（出版社、読者）が認めた = 信頼できる。本を出版 = 「世に認められた証」。これにより説得力が格段に向上。
                    </p>
                  </div>
                  <div className="bg-accent/10 p-6 rounded-xl">
                    <div className="text-center">
                      <FaUsers className="text-5xl text-accent mx-auto mb-4" />
                      <p className="font-bold text-primary mb-2">
                        出版社（読者）が認めた
                      </p>
                      <p className="text-gray-700 text-sm">という認識が説得力を高める</p>
                    </div>
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
                  <h3 className="text-2xl md:text-3xl font-bold">アンカリング効果</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">心理学的説明</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">最初に提示された情報が基準（アンカー）になる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm">初対面で「著者」と知る → すべての言動が「専門家の発言」として受け取られる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm font-bold">後から何を言っても、説得力が高い</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gold/10 p-6 rounded-xl border-2 border-gold">
                    <div className="text-center mb-4">
                      <p className="text-5xl mb-2">⚓</p>
                    </div>
                    <p className="text-gray-700 text-center">
                      「著者」という<span className="font-bold text-primary">アンカー</span>が、その後のすべての評価を引き上げる
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
              説得力は、努力ではなく「仕組み」で手に入る
            </h2>
            <p className="text-xl text-white/90">
              あなたも「説得力」を手に入れる
            </p>
          </div>

          <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">真実の提示</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-gold text-xl mt-1 shrink-0" />
                <p className="text-white">説得力を高めるために、話し方教室に通う必要はない</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-gold text-xl mt-1 shrink-0" />
                <p className="text-white">セールストークを磨く必要もない</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-gold text-xl mt-1 shrink-0" />
                <p className="text-white font-bold text-lg">必要なのは「著者になる」というただ一つの行動</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💼</div>
                <div>
                  <p className="text-white font-semibold mb-2">商談で「実は本を出版していまして」と言う瞬間</p>
                  <p className="text-white/80 text-sm">相手の表情が変わる瞬間</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🤝</div>
                <div>
                  <p className="text-white font-semibold mb-2">「お願いします」と言われる日々</p>
                  <p className="text-white/80 text-sm">飛び込み営業から卒業する日</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 p-6 md:p-8 rounded-xl backdrop-blur text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              その日は、思っているより近くにあります
            </p>
            <p className="text-xl mb-2">
              最短<span className="text-gold font-bold text-3xl">1ヶ月</span>、<span className="text-gold font-bold text-3xl">5万円台</span>から出版は可能です
            </p>
            <p className="text-lg text-white/90 mt-6">
              まずは無料相談で、あなたの「説得力革命」への道を一緒に考えましょう
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersuasiveSection;
