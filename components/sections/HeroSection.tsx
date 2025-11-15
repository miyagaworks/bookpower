'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { SITE_INFO, STATS } from '@/lib/constants';
import { PUBLISHED_BOOKS } from '@/lib/books';
import { FaCalendarCheck, FaDownload, FaTrophy, FaUserTie, FaBuilding, FaQuoteLeft } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // スピードを調整
    let animationId: number;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // 最初のセットの幅を取得
      const firstSet = scrollContainer.querySelector('.book-set');
      if (firstSet) {
        const setWidth = (firstSet as HTMLElement).offsetWidth;

        // 1セット分スクロールしたらリセット
        if (scrollPosition >= setWidth) {
          scrollPosition = 0;
        }
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Amazon風の星コンポーネント
  const AmazonStar = ({ fill }: { fill: 'full' | 'half' | 'empty' }) => {
    const orangeColor = 'var(--color-accent)';

    return (
      <svg
        className="w-4 h-4"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        {fill === 'full' && (
          <path
            d="M7 0.5L8.854 5.146L13.5 5.854L10.25 9.146L11.063 13.5L7 11.354L2.937 13.5L3.75 9.146L0.5 5.854L5.146 5.146L7 0.5Z"
            fill={orangeColor}
            stroke={orangeColor}
            strokeWidth="1"
          />
        )}
        {fill === 'half' && (
          <>
            <defs>
              <linearGradient id="half-fill">
                <stop offset="50%" stopColor={orangeColor} />
                <stop offset="50%" stopColor="white" />
              </linearGradient>
            </defs>
            <path
              d="M7 0.5L8.854 5.146L13.5 5.854L10.25 9.146L11.063 13.5L7 11.354L2.937 13.5L3.75 9.146L0.5 5.854L5.146 5.146L7 0.5Z"
              fill="url(#half-fill)"
              stroke={orangeColor}
              strokeWidth="1"
            />
          </>
        )}
        {fill === 'empty' && (
          <path
            d="M7 0.5L8.854 5.146L13.5 5.854L10.25 9.146L11.063 13.5L7 11.354L2.937 13.5L3.75 9.146L0.5 5.854L5.146 5.146L7 0.5Z"
            fill="white"
            stroke={orangeColor}
            strokeWidth="1"
          />
        )}
      </svg>
    );
  };

  // 星評価を生成する関数
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AmazonStar key={`full-${i}`} fill="full" />);
    }

    if (hasHalfStar) {
      stars.push(<AmazonStar key="half" fill="half" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<AmazonStar key={`empty-${i}`} fill="empty" />);
    }

    return stars;
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-primary overflow-hidden pt-15">
      {/* 背景パターン（オプション） */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <div className="relative py-12 md:py-16 lg:py-20">
          {/* 画像（PCのみ表示・最背面） */}
          <div
            className="hidden lg:block absolute left-[20%] -translate-x-1/2 pointer-events-none"
            style={{ zIndex: -1, top: "30px", height: "130%" }}
          >
            <Image
              src="/images/hero/hero_img.png"
              alt="Hero Image"
              width={1000}
              height={1920}
              className="h-full w-auto object-contain object-top"
              priority
            />
          </div>

          {/* テキストコンテンツ */}
          <div className="relative z-10">
            <div className="text-white max-w-4xl mx-auto lg:ml-auto lg:mr-6 lg:w-3/5">
              {/* メインキャッチコピー */}
              <div className="mb-2 md:mb-4 flex items-end gap-2 md:gap-6 lg:gap-6 justify-center">
                <h1
                  className="leading-tight text-7xl md:text-9xl font-black"
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(4.6rem, 16vw, 9rem)",
                  }}
                >
                  著力
                </h1>
                <div className="flex flex-col items-center mb-2 md:mb-3">
                  <span
                    className="text-white text-xl md:text-5xl lg:text-5xl mb-2 md:mb-4 lg:mb-6 opacity-90 font-bold"
                    style={{
                      fontFamily:
                        '"Noto Serif JP", "Shippori Mincho B1", "源ノ明朝", "Source Han Serif", "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN W6", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "HG明朝E", "MS P明朝", "MS 明朝", serif',
                      fontWeight: 600,
                    }}
                  >
                    ちょりょく
                  </span>
                  <span className="inline-flex items-center bg-white px-3 py-2 md:px-8 md:py-4 md:mb-1 rounded-full font-bold text-base md:text-2xl lg:text-3xl whitespace-nowrap">
                    <span className="text-kindle-black">Amazon</span>
                    <span className="text-accent ml-1">Kindle</span>
                    <span className="text-kindle-black ml-1">出版</span>
                  </span>
                </div>
              </div>

              <p
                className="text-gold text-xl md:text-3xl lg:text-5xl mb-6 font-black leading-tight text-center"
                style={{ fontWeight: 900 }}
              >
                {SITE_INFO.subtitle}
              </p>

              <div className="my-6 md:my-8 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-start gap-2 justify-center">
                  <FaQuoteLeft className="text-gold text-2xl shrink-0 mt-1" />
                  <div>
                    <p className="text-xl md:text-3xl lg:text-3xl mb-2 md:mb-4 font-bold leading-relaxed text-justify">
                      「著者」という肩書き。それは、信頼の証。
                    </p>
                    <p
                      className="text-base md:text-xl lg:text-lg opacity-90 leading-relaxed text-justify"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      医者の白衣、弁護士バッジ、一流大学の学位。著者と同じ見えない権威。
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mb-6 md:mb-8 space-y-2 text-center"
                style={{ fontFamily: "sans-serif" }}
              >
                <p className="text-xl md:text-3xl lg:text-2xl leading-relaxed">
                  <strong className="text-gold text-2xl md:text-4xl">
                    最短２週間
                  </strong>
                  、費用は
                  <strong className="text-gold text-2xl md:text-4xl">
                    ５万円
                  </strong>
                  <br className="md:hidden" />
                  <strong className="text-gold text-base md:text-2xl">
                    （税込55,000円）
                  </strong>
                  から
                </p>
                <p className="text-base md:text-xl lg:text-xl opacity-90 leading-relaxed">
                  あなたが思っているよりも、はるかに簡単に「著者」になれる時代
                </p>
              </div>

              {/* インパクトある数字 */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                <div className="text-center py-3 p-2 md:p-4 bg-primary-dark/50 backdrop-blur-sm rounded-lg border border-primary-dark/30">
                  <FaTrophy className="text-gold text-2xl md:text-3xl mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-gold">
                    {STATS.contractRateIncrease}倍
                  </div>
                  <div
                    className="text-xs md:text-sm mt-1"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    契約率
                  </div>
                </div>
                <div className="text-center py-3 p-2 md:p-4 bg-primary-dark/50 backdrop-blur-sm rounded-lg border border-primary-dark/30">
                  <FaUserTie className="text-gold text-2xl md:text-3xl mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-gold">
                    {STATS.recruitmentIncrease}倍
                  </div>
                  <div
                    className="text-xs md:text-sm mt-1"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    採用応募
                  </div>
                </div>
                <div className="text-center py-3 p-2 md:p-4 bg-primary-dark/50 backdrop-blur-sm rounded-lg border border-primary-dark/30">
                  <FaBuilding className="text-gold text-2xl md:text-3xl mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-gold">
                    {STATS.supportedCompanies}+
                  </div>
                  <div
                    className="text-xs md:text-sm mt-1"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    サポート実績
                  </div>
                </div>
              </div>

              {/* CTAボタン */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<FaCalendarCheck />}
                >
                  無料出版相談を申し込む
                </Button>
                <Button
                  href="/downloads/service-guide.pdf"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  icon={<FaDownload />}
                  download="著力_サービス資料.pdf"
                >
                  サービス資料をダウンロード
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* あなたの著書が並ぶ未来セクション */}
      <div className="relative z-10 py-12 md:py-16 bg-primary-dark">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            あなたの著書が並ぶ未来
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto px-4">
            Amazon
            Kindleストアに掲載され、あなたの信頼性を高める強力なツールになります
          </p>
        </div>

        {/* スライダー */}
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-6">
            {/* 書籍を3回繰り返してシームレスな無限スクロール */}
            {[1, 2, 3].map((setIndex) => (
              <div key={setIndex} className="flex gap-6 book-set">
                {PUBLISHED_BOOKS.map((book, index) => (
                  <a
                    key={`${book.id}-${setIndex}-${index}`}
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-48 md:w-56 group"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                      <div className="relative aspect-5/8 bg-gray-100 rounded overflow-hidden mb-3">
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 192px, 224px"
                          priority={setIndex === 1 && index < 6}
                        />
                      </div>
                      <p className="text-sm md:text-base text-gray-900 font-semibold text-center line-clamp-2 mb-2">
                        {book.title}
                      </p>
                      {/* Amazon風の星評価 */}
                      <div className="flex items-center justify-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                          {renderStars(book.rating)}
                        </div>
                        <span className="text-gray-900 text-sm font-medium">
                          {book.rating}
                        </span>
                        <span className="text-gray-600 text-xs">
                          ({book.reviews})
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
