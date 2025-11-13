'use client';

import React from 'react';
import Image from 'next/image';
import { PUBLISHED_BOOKS } from '@/lib/books';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const BooksSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.0; // ピクセル/フレーム
    let animationId: number;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // スクロール位置が半分を超えたらリセット
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
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

  // 星評価を生成する関数（常に5つの星を表示）
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // 満点の星
    for (let i = 0; i < fullStars; i++) {
      stars.push(<AmazonStar key={`full-${i}`} fill="full" />);
    }

    // 半分の星
    if (hasHalfStar) {
      stars.push(<AmazonStar key="half" fill="half" />);
    }

    // 空の星（常に5つになるように）
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<AmazonStar key={`empty-${i}`} fill="empty" />);
    }

    return stars;
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-primary-dark to-primary">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">あなたの著書が並ぶ未来</h2>
        <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto px-4">Amazon Kindleストアに掲載され、あなたの信頼性を高める強力なツールになります</p>
      </div>

      {/* スライダー */}
      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex gap-6">
          {/* 書籍を2回繰り返してシームレスな無限スクロール */}
          {[...PUBLISHED_BOOKS, ...PUBLISHED_BOOKS].map((book, index) => (
            <a
              key={`${book.id}-${index}`}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-48 md:w-56 group"
            >
              <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="relative aspect-[5/8] bg-gray-100 rounded overflow-hidden mb-3">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                    priority={index < 6}
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
                  <span className="text-gray-900 text-sm font-medium">{book.rating}</span>
                  <span className="text-gray-600 text-xs">({book.reviews})</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
