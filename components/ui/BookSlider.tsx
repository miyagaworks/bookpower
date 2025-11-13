'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PUBLISHED_BOOKS } from '@/lib/books';
import Image from 'next/image';

const BookSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // ピクセル/フレーム

    const scroll = () => {
      if (!scrollContainer || isPaused) return;

      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // スクロールが最後まで到達したらリセット
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // 書籍リストを2回繰り返して無限スクロール効果
  const books = [...PUBLISHED_BOOKS, ...PUBLISHED_BOOKS];

  return (
    <div className="relative w-full overflow-hidden bg-white/5 py-8">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {books.map((book, index) => (
          <a
            key={`${book.id}-${index}`}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-40 md:w-48 group"
          >
            <div className="relative aspect-[2/3] bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
                onError={(e) => {
                  // 画像読み込みエラー時のフォールバック
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* フォールバック表示 */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark p-4">
                <p className="text-white text-sm font-bold text-center line-clamp-3">
                  {book.title}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-white font-semibold text-center line-clamp-2 px-2">
              {book.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookSlider;
