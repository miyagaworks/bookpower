import React from 'react';
import Container from '../ui/Container';
import { FaCrown, FaUserGraduate, FaBullhorn, FaBook } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white via-background to-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            あなたは「<ruby>著力<rt style={{ fontSize: '0.4em', fontWeight: 600, marginBottom: '0.2em' }}>ちょりょく</rt></ruby>」を知っていますか？
          </h2>
          <div className="bg-primary text-white py-6 px-8 rounded-2xl max-w-4xl mx-auto shadow-2xl">
            <p className="text-2xl md:text-5xl font-bold text-justify leading-relaxed">
              <ruby>著力<rt style={{ fontSize: '0.4em', fontWeight: 600, marginBottom: '0.3em' }}>ちょりょく</rt></ruby>とは、著書を持つことで得られる<span className="text-gold text-4xl md:text-7xl">大きな影響力</span>のこと
            </p>
          </div>
        </div>

        {/* 著力の3つの要素 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-xl border-4 border-gold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaCrown className="text-5xl md:text-6xl text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-primary">権威性</h3>
            <p className="text-gray-800 text-lg leading-relaxed text-justify font-medium">
              「本を出版できる人 = 実力がある人」という無意識の評価。<br />
              著者というだけで、あなたへの信頼と尊敬が生まれます。
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border-4 border-gold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-5xl md:text-6xl text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-primary">専門性</h3>
            <p className="text-gray-800 text-lg leading-relaxed text-justify font-medium">
              「この分野の専門家」という認識。<br />
              本を書けるということは、その分野に精通している証拠だと受け取られます。
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border-4 border-gold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-5xl md:text-6xl text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-primary">説得力</h3>
            <p className="text-gray-800 text-lg leading-relaxed text-justify font-medium">
              言葉に重みが増し、相手を動かす力。<br />
              「著者が言うこと」は信じられ、受け入れられやすくなります。
            </p>
          </div>
        </div>

        {/* 今、著力が注目される理由 */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-gold">
          <div className="flex items-center gap-3 mb-8">
            <FaBook className="text-4xl md:text-5xl text-gold" />
            <h3 className="text-3xl md:text-4xl font-bold" style={{ marginTop: '-0.7em' }}>なぜ今、<ruby>著力<rt style={{ fontSize: '0.4em', fontWeight: 600, marginBottom: '0.3em' }}>ちょりょく</rt></ruby>が必要なのか</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-justify">
                SNSだけでは信頼が得られない時代。情報が溢れる中、本という「形に残るもの」の価値が再評価されています。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-justify">
                デジタル広告の費用対効果が年々低下。本を出版すれば、一度の投資で長期的な資産を手に入れられます。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-justify">
                「著者」という肩書きの価値は不変。時代が変わっても、本を出版した実績は色褪せません。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-justify">
                本を出版している経営者は<span className="text-accent text-2xl font-bold">人口の1%未満</span>。今すぐ始めれば、競合との決定的な差別化が可能です。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
