import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import {
  FaComments,
  FaPenFancy,
  FaFileAlt,
  FaPalette,
  FaCheckCircle,
  FaRocket,
  FaCalendarCheck,
  FaClock
} from 'react-icons/fa';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: '初回オンライン相談',
      duration: '第1週',
      icon: <FaComments />,
      description: '30分のオンライン面談で、あなたのビジネスや想いをヒアリング。どんな本を出版したいか、一緒に企画を立てます。',
      details: [
        '事業内容・強みの整理',
        '読者ターゲットの明確化',
        '本の方向性・構成の決定',
        'メール・チャットで企画立案'
      ]
    },
    {
      number: 2,
      title: 'オンライン取材',
      duration: '第2週',
      icon: <FaPenFancy />,
      description: '1〜2時間のオンライン取材を実施。あなたの経験や知識を引き出し、本の核となる内容を作り上げます。',
      details: [
        '第1回取材（1〜2時間）',
        '必要に応じて第2回取材',
        'あなたの言葉で語るだけでOK',
        '文章化はプロにお任せ'
      ]
    },
    {
      number: 3,
      title: '原稿作成・確認',
      duration: '第3週',
      icon: <FaFileAlt />,
      description: '取材内容をもとに、プロのライターが原稿を作成。メールでお送りしますので、すきま時間に確認いただけます。',
      details: [
        'プロライターが原稿作成',
        'メールで原稿をお送り',
        'すきま時間で確認可能',
        '修正希望はメール・チャットで'
      ]
    },
    {
      number: 4,
      title: '表紙デザイン・最終確認',
      duration: '第4週',
      icon: <FaPalette />,
      description: 'プロのデザイナーが表紙をデザイン。原稿の最終確認も並行して進めます。全てメールで完結。',
      details: [
        '表紙デザインの作成',
        'メールでデザイン確認',
        '原稿の最終チェック',
        '出版前の最終確認'
      ]
    },
    {
      number: 5,
      title: 'Kindle出版完了',
      duration: '第4週末',
      icon: <FaRocket />,
      description: 'Amazon Kindleで出版！あなたは今日から「著者」です。印税35%〜70%はそのままあなたのものに。',
      details: [
        'Amazon Kindleで出版',
        '世界中で販売開始',
        '印税35%〜70%を受取',
        '著者としての活動スタート'
      ]
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-white via-background to-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            出版までの流れ
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold max-w-3xl mx-auto mb-4">
            最短1ヶ月で出版完了
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/20 to-gold/10 px-6 py-3 rounded-full border-2 border-gold">
            <FaClock className="text-gold-dark text-2xl" />
            <span className="text-primary font-bold text-lg">オンライン面談は合計2〜3時間のみ</span>
          </div>
        </div>

        {/* ステップ */}
        <div className="space-y-8 md:space-y-12 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10 hover:shadow-2xl transition-all duration-300"
            >
              {/* ステップ番号バッジ */}
              <div className="absolute top-0 left-0 bg-gradient-to-br from-gold to-gold-dark text-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold rounded-br-2xl shadow-lg">
                {step.number}
              </div>

              <div className="md:grid md:grid-cols-5 md:gap-6">
                {/* 左側：アイコンと期間 */}
                <div className="md:col-span-2 bg-gradient-to-r from-primary to-primary-light py-8 px-4 md:p-10 flex items-center justify-center">
                  <div className="flex flex-col items-center text-center w-full">
                    {/* 期間バッジ */}
                    <div className="inline-flex items-center gap-2 bg-gold-dark text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base shadow-lg mb-3 md:mb-0 md:hidden">
                      <FaCalendarCheck className="text-sm md:text-base" />
                      <span>{step.duration}</span>
                    </div>

                    {/* アイコンとタイトル（横並び） */}
                    <div className="flex items-center justify-center gap-4 md:flex-col">
                      <div className="text-3xl md:text-[12rem] text-gold drop-shadow-2xl shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold text-white md:hidden">
                        {step.title}
                      </h3>
                    </div>

                    {/* PC用：期間とタイトル */}
                    <div className="hidden md:block md:mb-8">
                      <div className="inline-flex items-center gap-2 bg-gold-dark text-white px-4 py-2 rounded-full font-bold text-base shadow-lg mb-4">
                        <FaCalendarCheck className="text-base" />
                        <span>{step.duration}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 右側：説明 */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <p className="text-lg md:text-xl text-gray-800 font-semibold leading-relaxed mb-6 text-justify">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg border-l-4 border-gold">
                        <FaCheckCircle className="text-accent text-xl flex-shrink-0" />
                        <span className="text-gray-800 font-semibold text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 強調ボックス */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-gold mb-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            忙しいあなたでも大丈夫
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <FaCheckCircle className="text-gold text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-xl mb-2">オンライン面談は合計2〜3時間のみ</p>
                <p className="text-white/90">あとはメール・チャットで完結。移動時間ゼロ。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <FaCheckCircle className="text-gold text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-xl mb-2">すきま時間で確認できる</p>
                <p className="text-white/90">原稿確認もデザイン確認も、好きな時間に。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <FaCheckCircle className="text-gold text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-xl mb-2">文章を書く必要なし</p>
                <p className="text-white/90">話すだけでOK。プロが文章化します。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <FaCheckCircle className="text-gold text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-xl mb-2">最短1ヶ月で著者デビュー</p>
                <p className="text-white/90">スピーディーに出版、すぐに効果を実感。</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
