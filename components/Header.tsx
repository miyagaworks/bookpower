'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/Container';
import Button from './ui/Button';
import { NAV_ITEMS, SITE_INFO } from '@/lib/constants';
import { FaCalendarCheck } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <Container size="full">
          <div className="flex items-center justify-between h-20">
            {/* ロゴ */}
            <Link
              href="/"
              className="flex items-center space-x-2 lg:space-x-3 shrink-0"
            >
              <Image
                src="/logo.svg"
                alt={SITE_INFO.title}
                width={300}
                height={110}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center">
              {NAV_ITEMS.map((item, index) => (
                <React.Fragment key={item.href}>
                  <a
                    href={item.href}
                    className="relative text-gray-800 hover:text-primary transition-all text-sm xl:text-base whitespace-nowrap px-3 xl:px-4 py-2 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-white via-primary-light to-white group-hover:w-3/4 transition-all duration-300"></span>
                  </a>
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="h-4 w-px bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                icon={<FaCalendarCheck />}
              >
                無料相談
              </Button>
            </div>

            {/* モバイルメニューボタン */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニュー"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* モバイルメニュー - ヘッダーの外に分離 */}
      {isMobileMenuOpen && (
        <div
          className="fixed left-0 right-0 z-40 lg:hidden border-t"
          style={{
            top: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.92)"
          }}
        >
          <div className="relative">
            {/* 背景画像 */}
            <div
              className="absolute left-0 w-full pointer-events-none"
              style={{ top: "10px", bottom: 0, zIndex: 1 }}
            >
              <Image
                src="/images/hero/menu_img.png"
                alt="Menu Background"
                width={415}
                height={800}
                className="absolute bottom-0 left-0 w-auto"
                style={{
                  height: "calc(100% - 10px)",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
                priority
              />
            </div>
            {/* メニューコンテンツ */}
            <Container size="full">
              <nav
                className="flex flex-col space-y-4 relative py-4"
                style={{ zIndex: 2 }}
              >
                <div className="ml-auto max-w-[60%] space-y-4">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-gray-900 text-lg hover:text-primary transition-colors py-2 text-right"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <Button
                  href="#contact"
                  variant="primary"
                  fullWidth
                  icon={<FaCalendarCheck />}
                >
                  無料相談を申し込む
                </Button>
              </nav>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
