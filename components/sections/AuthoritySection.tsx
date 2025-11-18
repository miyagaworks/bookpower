import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaQuoteLeft, FaCheckCircle, FaBriefcase, FaBalanceScale, FaUsers, FaTrophy, FaInfinity, FaChartLine } from 'react-icons/fa';

const AuthoritySection: React.FC = () => {
  return (
    <section
      id="authority"
      className="py-16 md:py-2 bg-gradient-to-b from-white via-background to-white"
    >
      <Container>
        {/* セクション1: オープニング */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              「本を出版している」その一言が、全てを変えた
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              大手企業との商談で、相手の態度が一瞬で180度変わった瞬間
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                    実話
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    冷ややかな雰囲気が一変
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-justify">
                    大手企業との初めての商談。相手の表情は冷ややか。30分の予定で、早く終わらせたい雰囲気が伝わってきた。
                  </p>
                  <p className="text-justify">
                    そのとき、ふと思い立ってスマホでKindle本の画面を見せた。
                  </p>
                  <p className="text-justify font-bold text-primary">
                    「実は、本を出版しておりまして…」
                  </p>
                  <p className="text-justify">瞬間、相手の表情が変わった。</p>
                  <p className="text-justify">
                    「著者の方だとは存じ上げず、失礼いたしました」
                  </p>
                  <p className="text-justify">
                    30分の予定が1時間に。その場で次のアポが決定。
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 p-8 rounded-xl border-2 border-gold">
                  <div className="text-center mb-6">
                    <p className="text-6xl mb-4">📱</p>
                    <p className="text-lg font-bold text-primary">
                      Kindle本を見せた瞬間
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                      <div className="text-3xl">❄️</div>
                      <div className="flex-1 text-sm text-gray-600">
                        冷ややかな雰囲気
                      </div>
                    </div>
                    <div className="text-center text-2xl text-gold">↓</div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                      <div className="text-3xl">🔥</div>
                      <div className="flex-1 text-sm font-bold text-primary">
                        「著者の方だとは！」
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-gold text-3xl mt-1 flex-shrink-0" />
                <p className="text-xl text-primary font-bold italic">
                  なぜ「本を出版している」という事実だけで、相手の態度が180度変わるのか？
                  <br />
                  <span className="text-lg text-gray-700 not-italic mt-2 block">
                    答えは、人間の心理に深く根ざした「権威性の原理」にある
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* セクション2: 権威性の原理とは */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              信用・信頼が一瞬で手に入る理由
            </h2>
            <p className="text-xl text-gray-700">
              心理学が証明する「権威性の原理」
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="text-5xl mb-4 text-center">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                医者の白衣
              </h3>
              <p className="text-gray-700 text-sm text-center">権威の象徴</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="text-5xl mb-4 text-center">⚖️</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                弁護士のバッジ
              </h3>
              <p className="text-gray-700 text-sm text-center">権威の象徴</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gold hover:border-gold transition-all bg-gradient-to-br from-gold/10 to-gold/5">
              <div className="text-5xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                著者という肩書き
              </h3>
              <p className="text-gold font-bold text-sm text-center">
                強力な権威の象徴
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              一般認識のギャップが、著力の源泉
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  一般の人の認識
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">
                      本を出版する = 選ばれた人だけができること
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">
                      出版社の審査を通った人だけ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-700">著者 = すごい人</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  実際の現実
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700">
                      現代はセルフ出版で誰でも可能
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700">
                      最短1ヶ月、5万円台から出版できる
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" />
                    <span className="text-gray-700 font-bold">
                      しかし一般の人はそれを知らない
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
              <p className="text-xl text-primary font-bold text-center">
                この認識のギャップこそが、著力の源泉
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              衝撃的な事実
            </h3>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                実は、意外なことに...
              </h3>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg">
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed text-justify">
                本の内容をじっくり読む方は、<br />
                それほど多くありません。
              </p>

              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed text-justify">
                でも、大切なのは<br />
                <span className="text-gold font-bold">「著者である」という事実そのもの</span>。
              </p>

              <p className="text-xl md:text-2xl text-white leading-relaxed text-justify">
                たとえ全てを読まれなくても、<br />
                「この方は本を書いている」という認識が、<br />
                <span className="text-gold font-bold">信頼と安心感を生み出します</span>。
              </p>
            </div>
          </div>
        </div>

        {/* セクション3: 3つの心理メカニズム */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              なぜ人は「著者」を「すごい」と思ってしまうのか
            </h2>
            <p className="text-xl text-gray-700">3つの心理メカニズム</p>
          </div>

          <div className="space-y-6">
            {/* メカニズム1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">権威の原理</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6 text-justify">
                  同じアドバイスでも、「医師」という肩書きで従う人が
                  <span className="text-accent font-bold text-2xl">3倍</span>
                  に増加（実験結果）
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-3">
                      「著者」が言うと
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700">信用される</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700">説得力が増す</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-accent shrink-0" />
                        <span className="text-gray-700">提供価値が上がる</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
                    <div className="text-center">
                      <FaBriefcase className="text-5xl text-gold mx-auto mb-4" />
                      <p className="font-bold text-primary">同じサービスでも</p>
                      <p className="text-gray-700 text-sm mt-2">
                        「著者」が提供するだけで価値が上がる
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* メカニズム2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    希少性の原理
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-gold mb-6">
                  <p className="text-2xl font-bold text-primary text-center">
                    日本で本を出版したことがある人は人口の
                    <span className="text-accent text-4xl">1%未満</span>
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-lg text-gray-700 mb-4 text-justify">
                      ダイヤモンドが高価なのは、美しさだけでなく希少性のため。
                    </p>
                    <p className="text-lg text-gray-700 text-justify">
                      「著者」という肩書きも、希少性ゆえに価値が高い。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
                    <div className="text-center">
                      <FaTrophy className="text-5xl text-gold mx-auto mb-4" />
                      <p className="font-bold text-primary mb-2">
                        著者は圧倒的な少数派
                      </p>
                      <p className="text-gray-700 text-sm">
                        だからこそ、価値がある
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* メカニズム3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-gold text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    社会的証明の原理
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6 text-justify">
                  本を出版 =
                  「世に認められた」証。多くの人（出版社・読者）が認めたから本になったと受け取られる。
                </p>
                <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold">
                  <div className="text-center">
                    <FaUsers className="text-5xl text-gold mx-auto mb-4" />
                    <p className="text-xl font-bold text-primary mb-2">
                      「出版社（読者）が認めた」
                    </p>
                    <p className="text-gray-700">
                      これにより信頼が一気に高まる
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション4: ビジネスへの具体的インパクト（6つの変化） */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              権威性がもたらす6つの変化
            </h2>
            <p className="text-xl text-gray-700">
              あなたのビジネスに起こる具体的な変化
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 変化1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  競合との決定的な差別化
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                同じサービスでも「著者」が提供すると価値が上がる。価格競争から完全に抜け出せる。
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                <p className="text-sm font-bold text-primary mb-1">
                  実例：整体師
                </p>
                <p className="text-sm text-gray-700">
                  施術料1.5倍に値上げ、顧客は減らずむしろ増加
                </p>
              </div>
            </div>

            {/* 変化2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  契約率が劇的に向上
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    経営コンサルタント:{" "}
                    <span className="font-bold text-accent">
                      5% → 12% (2.4倍)
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    士業事務所:{" "}
                    <span className="font-bold text-accent">
                      15% → 38% (2.5倍)
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    整体院: リピート率
                    <span className="font-bold text-accent">
                      25% → 65% (2.6倍)
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-gold/10 p-4 rounded-lg">
                <p className="text-sm font-bold text-primary text-center">
                  「検討します」が「お願いします」に変わる
                </p>
              </div>
            </div>

            {/* 変化3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  メディア・講演依頼が増える
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                メディアは常に「専門家」を探している。専門家の証明として最もわかりやすいのが「著書」。
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                <p className="text-sm font-bold text-primary mb-2">
                  実例：税理士
                </p>
                <p className="text-sm text-gray-700">
                  地方紙取材 → テレビ出演 → 全国紙取材
                </p>
              </div>
            </div>

            {/* 変化4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  採用活動での絶大な効果
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">
                    求人応募者<span className="font-bold text-accent">3倍</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span className="text-gray-700">質の高い応募者が増加</span>
                </div>
              </div>
              <div className="bg-gold/10 p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  「本を読んで転職を決意しました」という応募が来る
                </p>
              </div>
            </div>

            {/* 変化5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  社員・パートナーへの浸透
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                理念が明確に言語化され、本を配るだけで理念が伝わる。
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-gold">
                <p className="text-sm font-bold text-primary mb-2">
                  実例：製造業
                </p>
                <p className="text-sm text-gray-700">
                  理念理解度
                  <span className="font-bold text-accent">30% → 90%</span>
                  、内定承諾率
                  <span className="font-bold text-accent">1.5倍</span>
                </p>
              </div>
            </div>

            {/* 変化6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/10 hover:border-gold/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  6
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  業界での認知度急上昇
                </h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span className="text-gray-700">
                    「〇〇さん、本を出したんだって」と噂が広がる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span className="text-gray-700">業界紙に紹介される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span className="text-gray-700">
                    イベントで声をかけられる
                  </span>
                </li>
              </ul>
              <div className="bg-gold/10 p-4 rounded-lg">
                <p className="text-sm font-bold text-primary text-center">
                  気づけば業界内で「著名人」に
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* セクション5: 一生モノの資産 */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              権威性は、一度手に入れたら消えない
            </h2>
            <p className="text-xl text-gray-700">一生モノの資産を手に入れる</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gold">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <FaInfinity className="text-5xl text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  永続的な効果
                </h3>
                <p className="text-gray-700 text-sm">
                  一度出版すれば、その事実は消えない
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <FaBalanceScale className="text-5xl text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  時間経過の影響なし
                </h3>
                <p className="text-gray-700 text-sm">
                  5年前でも10年前でも、あなたは「著者」
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-5xl text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  投資対効果が極めて高い
                </h3>
                <p className="text-gray-700 text-sm">
                  一度の投資で一生使える資産
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                他のマーケティング施策との比較
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left p-3 text-primary">施策</th>
                      <th className="text-left p-3 text-primary">年間コスト</th>
                      <th className="text-left p-3 text-primary">
                        1年後の資産
                      </th>
                      <th className="text-left p-3 text-primary">効果の持続</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 text-gray-700">広告</td>
                      <td className="p-3 text-gray-700">100万円</td>
                      <td className="p-3 text-gray-700">何も残らない</td>
                      <td className="p-3 text-gray-700">
                        お金を払い続ける必要
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 text-gray-700">SNS</td>
                      <td className="p-3 text-gray-700">時間コスト大</td>
                      <td className="p-3 text-gray-700">
                        発信を止めたら消える
                      </td>
                      <td className="p-3 text-gray-700">発信し続ける必要</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-gold/10 to-gold/5">
                      <td className="p-3 font-bold text-primary">本の出版</td>
                      <td className="p-3 font-bold text-accent">5〜13万円</td>
                      <td className="p-3 font-bold text-accent">
                        「著者」という権威性
                      </td>
                      <td className="p-3 font-bold text-accent">永続的</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center">
              <p className="text-2xl font-bold">
                投資対効果で考えれば、これほど優れた施策は他にない
              </p>
            </div>
          </div>
        </div>

        {/* セクション6: クロージング */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-gold">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              あなたが「著者」になる日は、思っているより近い
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              想像してみてください
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💼</div>
                <div>
                  <p className="text-white font-semibold mb-2">
                    名刺に「著書」と印刷されている姿
                  </p>
                  <p className="text-white/80 text-sm">
                    初対面の相手が「本を出されているんですね！」と目を輝かせる
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🤝</div>
                <div>
                  <p className="text-white font-semibold mb-2">
                    商談がスムーズに進む日々
                  </p>
                  <p className="text-white/80 text-sm">
                    「ぜひお願いします」と言われる瞬間
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📺</div>
                <div>
                  <p className="text-white font-semibold mb-2">
                    メディアから取材依頼が来る瞬間
                  </p>
                  <p className="text-white/80 text-sm">
                    「専門家として取材させてください」
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👨‍💼</div>
                <div>
                  <p className="text-white font-semibold mb-2">
                    求職者が本を読んで応募
                  </p>
                  <p className="text-white/80 text-sm">
                    「先生の本を読んで、働きたいと思いました」
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 p-6 md:p-8 rounded-xl backdrop-blur text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              その日は、思っているより近くにあります
            </p>
            <p className="text-xl mb-2">
              最短<span className="text-gold font-bold text-3xl">1ヶ月</span>、
              <span className="text-gold font-bold text-3xl">5万円台</span>
              から出版は可能です
            </p>
            <p className="text-lg text-white/90 mt-6">
              まずは無料相談で、あなたの「著者デビュー」への道を一緒に考えましょう
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuthoritySection;
