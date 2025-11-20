// カラー定義
export const COLORS = {
  primary: {
    DEFAULT: '#065F46',
    light: '#0D7C59',
    dark: '#054235',
  },
  gold: {
    DEFAULT: '#C4AC6E',
    light: '#D4BC7E',
    dark: '#B49C5E',
  },
  accent: {
    DEFAULT: '#F55600',
    light: '#FF6B1A',
    dark: '#DB4D00',
  },
  kindle: {
    orange: '#F55600',
    black: '#1C1917',
  },
  success: '#10B981',
  background: '#FAFAF9',
  foreground: '#1C1917',
} as const;

// サイト情報
export const SITE_INFO = {
  title: '著力',
  subtitle: 'あなたの名前が、Amazonに載る',
  description: '最短2週間、55,000円（税込）から。経営者専門の出版サポートサービス。契約率2.3倍、採用応募10倍の実績。',
  url: 'https://bookpower.jp',
  companyName: '株式会社Senrigan',
  companyAddress: '広島県広島市安佐南区山本2-3-35',
  companyPhone: '082-209-0181',
  social: {
    x: 'https://x.com/BookPowerJp',
    note: 'https://note.com/bookpower',
  },
} as const;

// 料金プラン
export const PRICING_PLANS = [
  {
    id: 'light',
    name: 'ライトプラン',
    price: 55000,
    priceText: '55,000円（税込）',
    popular: false,
    description: 'とにかく出版したい方向け',
    features: [
      '基本的な企画立案サポート',
      '取材1回（1時間）',
      'ライティング（1.5〜3万文字）',
      '基本的な表紙デザイン',
    ],
    pages: '50〜80ページ',
    delivery: '最短2週間',
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: 88000,
    priceText: '88,000円（税込）',
    popular: true,
    description: '内容を充実させたい方向け',
    features: [
      '詳細な企画立案サポート',
      '取材2回（各2時間）',
      'ライティング（3〜6万文字）',
      'オリジナル表紙デザイン',
      '編集・校正',
    ],
    pages: '100〜150ページ',
    delivery: '3〜4週間',
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    price: 132000,
    priceText: '132,000円（税込）',
    popular: false,
    description: '最高品質を求める方向け',
    features: [
      '完全カスタマイズ企画立案',
      '取材3回以上（各2時間）',
      'ライティング（6〜9万文字）',
      'プロフェッショナル表紙デザイン',
      '徹底的な編集・校正',
      '図表・イラスト作成',
    ],
    pages: '150ページ〜',
    delivery: '1ヶ月〜',
  },
] as const;

// 統計データ
export const STATS = {
  contractRateIncrease: 2.3,
  recruitmentIncrease: 10,
  supportedCompanies: 2000,
  averageROI: 450,
} as const;

// ナビゲーションメニュー
export const NAV_ITEMS = [
  { label: '著力とは', href: '#about' },
  { label: '成功事例', href: '#cases' },
  { label: '料金プラン', href: '#pricing' },
  { label: '出版の流れ', href: '#process' },
  { label: 'よくある質問', href: '#faq' },
  { label: 'お問い合わせ', href: '#contact' },
] as const;
