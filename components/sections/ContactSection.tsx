'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import {
  FaEnvelope,
  FaUser,
  FaPhoneAlt,
  FaBuilding,
  FaPaperPlane,
  FaCheckCircle,
  FaCalendarCheck,
  FaBook,
  FaBullseye,
  FaYenSign,
  FaClock,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    bookType: '',
    purpose: '',
    budget: '',
    deadline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // URLパラメータから予算を取得してプリセット
  useEffect(() => {
    const updateBudgetFromURL = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.split('?')[1] || '');
      const planParam = params.get('plan');

      if (planParam) {
        let budgetValue = '';
        switch (planParam) {
          case 'light':
            budgetValue = '55000';
            break;
          case 'standard':
            budgetValue = '88000';
            break;
          case 'premium':
            budgetValue = '132000';
            break;
        }

        if (budgetValue) {
          setFormData(prev => ({ ...prev, budget: budgetValue }));
        }
      }
    };

    // 初期ロード時
    updateBudgetFromURL();

    // hashchangeイベントを監視
    window.addEventListener('hashchange', updateBudgetFromURL);

    return () => {
      window.removeEventListener('hashchange', updateBudgetFromURL);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    // メールアドレスは半角英数字と記号のみ許可
    if (name === 'email') {
      processedValue = value.replace(/[^a-zA-Z0-9@._+\-]/g, '');
    }

    // 電話番号は数字のみ許可
    if (name === 'phone') {
      processedValue = value.replace(/[^0-9]/g, '');
    }

    setFormData({
      ...formData,
      [name]: processedValue
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // フォームデータを整形
      const message = `
【どんな本を作りたいか】
${formData.bookType}

【出版の目的】
${formData.purpose}

${formData.phone ? `【電話番号】\n${formData.phone}\n\n` : ''}${formData.budget ? `【予算】\n${formData.budget}\n\n` : ''}${formData.deadline ? `【希望納期】\n${formData.deadline}` : ''}
      `.trim();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: message
        }),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      setIsSubmitted(true);

      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        bookType: '',
        purpose: '',
        budget: '',
        deadline: ''
      });
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-2xl border-4 border-gold">
            <FaCheckCircle className="text-7xl text-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              送信完了しました
            </h2>
            <p className="text-xl text-gray-800 mb-4 font-semibold">
              お問い合わせありがとうございます
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              2営業日以内にご返信させていただきます。<br />
              しばらくお待ちください。
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              新しいお問い合わせ
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            無料相談・お問い合わせ
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-semibold max-w-3xl mx-auto mb-6">
            まずはお気軽にご相談ください
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border-2 border-gold">
            <FaCalendarCheck className="text-gold text-2xl" />
            <span className="text-white font-bold text-lg">
              相談は完全無料・秘密厳守
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* 左側：フォーム */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-gold">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              お問い合わせフォーム
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaUser className="text-gold-dark" />
                  お名前 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaEnvelope className="text-gold-dark" />
                  メールアドレス <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  inputMode="email"
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaPhoneAlt className="text-gold-dark" />
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                  placeholder="09012345678"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaBuilding className="text-gold-dark" />
                  会社名・屋号
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label
                  htmlFor="bookType"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaBook className="text-gold-dark" />
                  どんな本を作りたいか <span className="text-accent">*</span>
                </label>
                <textarea
                  id="bookType"
                  name="bookType"
                  value={formData.bookType}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none text-gray-800 font-medium"
                  placeholder="例：IT業界向けのビジネス書、整体院経営のノウハウを伝える本など"
                />
              </div>

              <div>
                <label
                  htmlFor="purpose"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaBullseye className="text-gold-dark" />
                  どんな目的で出版したいか{" "}
                  <span className="text-accent">*</span>
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none text-gray-800 font-medium"
                  placeholder="例：ブランディング向上、新規顧客獲得、採用強化など"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaYenSign className="text-gold-dark" />
                  予算はどれくらいか
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                >
                  <option value="">選択してください</option>
                  <option value="55000">5万円台（ライトプラン）</option>
                  <option value="88000">8万円台（スタンダードプラン）</option>
                  <option value="132000">13万円台（プレミアムプラン）</option>
                  <option value="custom">予算は相談したい</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="flex items-center gap-2 text-primary font-bold mb-2"
                >
                  <FaClock className="text-gold-dark" />
                  いつまでに出版したいか
                </label>
                <select
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-gray-800 font-medium"
                >
                  <option value="">選択してください</option>
                  <option value="asap">できるだけ早く</option>
                  <option value="1month">1ヶ月以内</option>
                  <option value="2months">2ヶ月以内</option>
                  <option value="3months">3ヶ月以内</option>
                  <option value="flexible">まだ決めていない</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                icon={<FaPaperPlane />}
              >
                {isSubmitting ? "送信中..." : "無料相談を申し込む"}
              </Button>

              <p className="text-sm text-gray-600 text-center">
                2営業日以内にご返信させていただきます
              </p>
            </form>
          </div>

          {/* 右側：情報 */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                こんな方はぜひご相談ください
              </h3>
              <ul className="space-y-3">
                {[
                  "本を出版して権威性を高めたい",
                  "忙しくて時間がないが出版したい",
                  "文章を書くのが苦手だが著者になりたい",
                  "ビジネスを次のステージに進めたい",
                  "競合との差別化を図りたい",
                  "採用や営業に効果的なツールが欲しい",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gold text-xl mt-1 shrink-0" />
                    <span className="text-white font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-kindle-black">
                無料相談の流れ
              </h3>
              <div className="space-y-3 text-kindle-black">
                <div className="flex items-start gap-3">
                  <div className="bg-white text-gold-dark rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <p className="font-semibold">フォームからお申し込み</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white text-gold-dark rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <p className="font-semibold">2営業日以内にメールでご返信</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white text-gold-dark rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <p className="font-semibold">オンライン面談の日程調整</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white text-gold-dark rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <p className="font-semibold">30分の無料相談スタート</p>
                </div>
              </div>
            </div>

            {/* 代表者プロフィール */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                代表者プロフィール
              </h3>
              <div className="mb-4">
                <div className="relative w-full h-48 md:h-56 lg:w-64 lg:h-64 lg:float-left lg:mr-4 mb-3 lg:mx-0">
                  <Image
                    src="/images/contact/miyagawa.png"
                    alt="代表者"
                    fill
                    className="object-cover rounded-2xl shadow-lg border-2 border-gold"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
                <div className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  <p className="text-justify mb-3">
                    1969年、島根県益田市生まれ。5人兄弟の末っ子として、山や川に囲まれた大自然の中で育つ。幼い頃に父を亡くし、母親と歳の離れた兄姉に育てられる。
                  </p>
                  <p className="text-justify mb-3">
                    高校卒業後、海上自衛隊に4年間勤務。剣道選手に選ばれるも、アキレス腱断裂により選手生命を断たれる。除隊後は焼肉屋、居酒屋、スナック店長として飲食業界で修行を積む中、パソコンと出会い、デザインとITの世界に魅了される。
                  </p>
                  <p className="text-justify mb-3">
                    2009年、40歳で独立。広告デザインとウェブサイト運営に携わり、印刷通販サイト「カードの達人」を12年間運営。多くのユーザーに支持されるサイトへと成長させた後、売却。
                  </p>
                  <p className="text-justify">
                    現在は、異色の経歴で培った実践的な知識と経験を活かし、ビジネスパーソンの「著力」を引き出す出版サポート事業を展開中。一人ひとりのストーリーを丁寧に聞き取り、その人らしい本づくりをサポートしています。
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-4 border-l-4 border-gold-dark">
                <p className="text-primary font-bold text-lg text-center leading-relaxed">
                  小さな疑問から本格的な相談まで、お気軽にどうぞ！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 追加の安心メッセージ */}
        <div className="bg-white/10 rounded-2xl p-8 md:p-10 text-center border-2 border-gold">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            お約束いたします
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            無理な営業は一切いたしません。あなたのビジネスに本当に必要かどうか、一緒に考えさせていただきます。まずはお気軽にご相談ください。
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
