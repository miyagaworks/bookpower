import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ブランドカラー
        primary: {
          DEFAULT: '#065F46', // ダークグリーン
          light: '#0D7C59',
          dark: '#054235',
        },
        gold: {
          DEFAULT: '#C4AC6E', // ゴールド
          light: '#D4BC7E',
          dark: '#B49C5E',
        },
        accent: {
          DEFAULT: '#F55600', // オレンジ（強調）
          light: '#FF6B1A',
          dark: '#DB4D00',
        },
        // Kindleカラー
        kindle: {
          orange: '#F55600',
          black: '#1C1917',
        },
        // その他
        success: '#10B981',
        background: '#FAFAF9',
        foreground: '#1C1917',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #065F46, #0D7C59)',
        'gradient-gold': 'linear-gradient(135deg, #C4AC6E, #D4BC7E)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
