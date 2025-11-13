'use client';

import React, { useState, useEffect } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // スクロールが100px以上されたら表示
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-gold text-foreground font-bold py-4 px-6 shadow-2xl hover:bg-gold/90 transition-all duration-300"
      >
        <FaCalendarCheck className="text-xl" />
        <span className="text-base">無料相談を申し込む</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
