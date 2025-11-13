import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaHospital, FaLaptopCode, FaUserTie, FaIndustry, FaArrowRight, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      icon: <FaHospital className="text-5xl text-gold" />,
      title: '小規模整体院',
      subtitle: 'スタッフ1人、地方都市で経営',
      investment: '88,000円×3冊（税込264,000円）',
      image: '/images/cases/case1.png',
      before: {
        title: '出版前',
        items: ['月商200万円', '地域密着型のみ', 'リピート率25%', '価格競争に悩む']
      },
      after: {
        title: '出版後（1年で）',
        items: [
          { text: 'リピート率65%（2.6倍！）', highlight: true },
          { text: '月商750万円（3.8倍！）', highlight: true },
          '施術料5,000円→8,000円に値上げ成功',
          '店内ポスターで「著書3冊の先生」として認知',
          '「この本にも書いているのですが…」が説得力に'
        ]
      },
      quote: '本を出版したことで、人生が変わりました。収入が増えたのはもちろんですが、それ以上に「先生」と呼ばれることの喜びを知りました'
    },
    {
      icon: <FaLaptopCode className="text-5xl text-gold" />,
      title: 'IT企業',
      subtitle: '従業員20名、離職率に悩む',
      investment: '88,000円（税込）',
      image: '/images/cases/case2.png',
      before: {
        title: '出版前',
        items: ['応募が少ない', '離職率30%', '社員を「作業する人」として見ていた']
      },
      after: {
        title: '出版後',
        items: [
          { text: '応募者10倍増', highlight: true },
          { text: '離職率30%→5%に激減', highlight: true },
          '内定承諾率90%超',
          '本を書く過程で会社が変わった',
          '「本を読んで応募しました」が続出'
        ]
      },
      quote: '本を書きながら、社員一人ひとりと真剣に向き合うようになり、それぞれの得意なことを活かせるようにした。すると、離職率が下がったんです'
    },
    {
      icon: <FaUserTie className="text-5xl text-gold" />,
      title: '経営コンサルタント',
      subtitle: '独立5年目、「怪しい」との戦い',
      investment: '55,000円×3冊（税込165,000円）',
      image: '/images/cases/case3.png',
      before: {
        title: '出版前',
        items: ['契約率わずか2%', '「コンサルタント=怪しい」', '50人会って1人契約', '初対面で警戒される']
      },
      after: {
        title: '3冊出版後',
        items: [
          { text: '契約率12%（6倍！）', highlight: true },
          '名刺裏に本3冊の表紙を印刷',
          '社交辞令から「相談」に会話が変化',
          '本を読んでいなくても権威が完成',
          '月収30万円→100万円に'
        ]
      },
      quote: '3冊出版した今、もう「怪しい」とは思われません。名刺の裏に本の表紙が並んでいるだけで、「この人なら信頼できる」と思ってもらえるんです'
    },
    {
      icon: <FaIndustry className="text-5xl text-gold" />,
      title: '製造業（町工場）',
      subtitle: '従業員10名、金属加工業',
      investment: '88,000円（税込）',
      image: '/images/cases/case4.png',
      before: {
        title: '出版前',
        items: ['地元中小企業との取引のみ', '大手企業との縁なし', '技術力はあるが知名度なし']
      },
      after: {
        title: '出版後',
        items: [
          '同窓会で本を見せたら紹介してもらえた',
          { text: '受注金額が従来の10倍', highlight: true },
          '大手企業の専務が本を読んで面談',
          '売上の60%が大手企業との取引に',
          '継続的な発注が実現'
        ]
      },
      quote: '本を出版していなければ、大手企業との取引は一生実現しなかったと思います。同窓会での何気ない会話が、すべてを変えました'
    }
  ];

  return (
    <section id="cases" className="py-16 md:py-24 bg-gradient-to-b from-white via-background to-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            圧倒的な成功事例
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            本を出版した経営者たちの驚きの変化
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-gradient-to-br from-background to-white rounded-2xl shadow-xl overflow-hidden border border-primary/10">
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
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white/20 p-4 rounded-full">
                      {caseStudy.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{caseStudy.title}</h3>
                      {caseStudy.subtitle && <p className="text-base md:text-lg opacity-90">{caseStudy.subtitle}</p>}
                    </div>
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    投資額：<span className="text-gold font-bold text-lg">{caseStudy.investment}</span>
                  </div>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* 出版前 */}
                  {caseStudy.before && (
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-bold mb-4 text-gray-700 flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        {caseStudy.before.title}
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.before.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-gray-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 出版後 */}
                  <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold/30">
                    <h4 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                      <FaArrowRight className="text-gold" />
                      {caseStudy.after.title}
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.after.items.map((item, i) => {
                        const isHighlight = typeof item === 'object' && item.highlight;
                        const text = typeof item === 'string' ? item : item.text;
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-accent mt-1 text-xl shrink-0" />
                            <span className={`${isHighlight ? 'text-accent font-bold text-xl' : 'text-gray-700'}`}>
                              {text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* 画像 */}
                  {caseStudy.image && (
                    <div>
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 引用 */}
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-gold">
                  <div className="flex items-start gap-3">
                    <FaQuoteLeft className="text-gold text-2xl mt-1 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-primary font-semibold italic text-justify">
                      {caseStudy.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;
