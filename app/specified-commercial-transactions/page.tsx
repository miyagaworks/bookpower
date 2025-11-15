import React from 'react';
import Container from '@/components/ui/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '特定商取引法に基づく表記 | 著力',
  description: '株式会社Senriganの特定商取引法に基づく表記',
};

export default function SpecifiedCommercialTransactionsPage() {
  return (
    <main>
      <Header />
      <div className="pt-24"></div>
      <Container className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              特定商取引法に基づき、以下の通り表示いたします。
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                販売業者
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-lg font-bold">
                  株式会社Senrigan
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                運営統括責任者
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-lg">代表取締役 宮川 清実</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                所在地
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-lg">〒731-0137</p>
                <p className="text-gray-800 text-lg">
                  広島県広島市安佐南区山本2-3-35
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                連絡先
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-lg mb-2">
                  電話番号：082-209-0181
                </p>
                <p className="text-gray-600 text-sm text-justify mt-2 mb-6">
                  受付時間：平日 10:00〜17:00
                </p>
                <p className="text-gray-800 text-lg mb-2">
                  メールアドレス：info[at]bookpower[dot]jp
                </p>
                <p className="text-gray-600 text-sm text-justify mt-2">
                  ※ [at]を@に、[dot]を.に置き換えてください
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                販売価格
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-gray-800 text-lg font-bold mb-2">
                      ライトプラン
                    </p>
                    <p className="text-gray-600 text-sm text-justify mb-3">
                      とにかく出版したい方向け
                    </p>
                    <p className="text-gray-800 mb-3">
                      <span className="text-2xl font-bold text-gold-dark">
                        55,000
                      </span>
                      <span className="text-lg font-bold text-gold">円</span>
                      <span className="text-xs text-gray-600">（税込）</span>
                    </p>
                    <p className="text-gray-700 mb-2">
                      50〜80ページ / 納期：最短2週間
                    </p>
                    <p className="text-gray-700 font-semibold mb-2">
                      サポート内容：
                    </p>
                    <ul className="space-y-1 text-gray-800">
                      <li>・基本的な企画立案サポート</li>
                      <li>・取材1回（1時間）</li>
                      <li>・ライティング（1.5〜3万文字）</li>
                      <li>・基本的な表紙デザイン</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-gray-800 text-lg font-bold mb-2">
                      スタンダードプラン
                    </p>
                    <p className="text-gray-600 text-sm text-justify mb-3">
                      内容を充実させたい方向け
                    </p>
                    <p className="text-gray-800 mb-3">
                      <span className="text-2xl font-bold text-gold-dark">
                        88,000
                      </span>
                      <span className="text-lg font-bold text-gold">円</span>
                      <span className="text-xs text-gray-600">（税込）</span>
                    </p>
                    <p className="text-gray-700 mb-2">
                      100〜150ページ / 納期：3〜4週間
                    </p>
                    <p className="text-gray-700 font-semibold mb-2">
                      サポート内容：
                    </p>
                    <ul className="space-y-1 text-gray-800">
                      <li>・詳細な企画立案サポート</li>
                      <li>・取材2回（各2時間）</li>
                      <li>・ライティング（3〜6万文字）</li>
                      <li>・オリジナル表紙デザイン</li>
                      <li>・編集・校正</li>
                    </ul>
                  </div>
                  <div className="pb-4">
                    <p className="text-gray-800 text-lg font-bold mb-2">
                      プレミアムプラン
                    </p>
                    <p className="text-gray-600 text-sm text-justify mb-3">
                      最高品質を求める方向け
                    </p>
                    <p className="text-gray-800 mb-3">
                      <span className="text-2xl font-bold text-gold-dark">
                        132,000
                      </span>
                      <span className="text-lg font-bold text-gold">円</span>
                      <span className="text-xs text-gray-600">（税込）</span>
                    </p>
                    <p className="text-gray-700 mb-2">
                      150ページ〜 / 納期：1ヶ月〜
                    </p>
                    <p className="text-gray-700 font-semibold mb-2">
                      サポート内容：
                    </p>
                    <ul className="space-y-1 text-gray-800">
                      <li>・完全カスタマイズ企画立案</li>
                      <li>・取材3回以上（各2時間）</li>
                      <li>・ライティング（6〜9万文字）</li>
                      <li>・プロフェッショナル表紙デザイン</li>
                      <li>・徹底的な編集・校正</li>
                      <li>・図表・イラスト作成</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 text-sm text-justify mt-4 text-justify">
                    ※Amazon
                    Kindleストアへの出版代行をご希望の場合は、別途5,500円（税込）で承ります。
                  </p>
                  <p className="text-gray-600 text-sm text-justify mt-2 text-justify">
                    ※価格は予告なく変更される場合がございます。最新の価格は本ウェブサイトをご確認ください。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                商品代金以外の必要料金
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <ul className="space-y-2 text-gray-800">
                  <li>・消費税：商品代金に含まれます</li>
                  <li>・振込手数料：お客様のご負担となります</li>
                  <li>
                    ・通信料：インターネット接続に必要な通信料はお客様のご負担となります
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                お支払い方法
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <ul className="space-y-2 text-gray-800">
                  <li>・銀行振込（前払い）</li>
                  <li>・クレジットカード決済</li>
                </ul>
                <p className="text-gray-600 text-sm text-justify mt-4">
                  ※銀行振込の場合、ご入金確認後にサービスを開始いたします。
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                お支払い期限
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-justify">
                  お申し込み後、7日以内にお支払いください。
                  <br />
                  クレジットカード決済の場合は、各カード会社の規約に基づきます。
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                商品・サービスの提供時期
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 mb-4 text-justify">
                  ご入金確認後、初回オンライン相談の日程調整を行います。
                  <br />
                  サービス開始から最短1ヶ月〜2ヶ月で電子書籍を出版いたします。
                </p>
                <p className="text-gray-600 text-sm text-justify">
                  ※プランや内容により提供時期は変動する場合がございます。
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                返品・キャンセルについて
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-bold mb-2">
                      ■ サービス開始前のキャンセル
                    </p>
                    <p>
                      お申し込み後、初回オンライン相談実施前であれば、全額返金いたします。
                      <br />
                      ただし、振込手数料はお客様のご負担となります。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">
                      ■ サービス開始後のキャンセル
                    </p>
                    <p>
                      初回オンライン相談実施後は、サービスの性質上、お客様都合によるキャンセル・返金はお受けできません。
                      <br />
                      ただし、当社の責に帰すべき事由がある場合はこの限りではありません。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">■ クーリング・オフについて</p>
                    <p>
                      本サービスは、特定商取引法に定める通信販売に該当するため、クーリング・オフの適用はございません。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                不良品・誤納品について
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-justify">
                  万が一、提供したサービスに瑕疵がある場合は、速やかに修正対応いたします。
                  <br />
                  お気づきの点がございましたら、お問い合わせ窓口までご連絡ください。
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                引渡し時期
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-justify">
                  最終成果物（電子書籍）は、サービス開始から最短2週間〜2ヶ月で納品いたします。
                  <br />
                  Amazon
                  Kindleストアへの公開は、お客様ご自身で行っていただくか、代行（有料）することも可能です。
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                動作環境
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 mb-4 font-bold">
                  本サービスをご利用いただくには、以下の環境が必要です。
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li>・インターネット接続環境</li>
                  <li>
                    ・Zoom等のビデオ会議ツールが利用可能なPC・スマートフォン・タブレット
                  </li>
                  <li>・メールアドレス</li>
                  <li>
                    ・推奨ブラウザ：Google Chrome、Safari、Microsoft
                    Edge、Firefox（最新版）
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-4 border-gold pb-2">
                表現、及び商品に関する注意書き
              </h2>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-gray-800 text-justify">
                  本サービスで制作した電子書籍の販売実績や印税収入は、お客様の書籍内容、プロモーション活動、市場環境等により大きく異なります。
                  <br />
                  当社は、販売部数や印税収入を保証するものではありません。
                  <br />
                  また、本サービスは電子書籍の制作・出版代行サービスであり、出版後の販売促進活動は基本的にお客様ご自身で行っていただく必要があります。
                </p>
              </div>
            </section>

            <div className="text-right text-gray-600 mt-12">
              <p>制定日：2025年11月1日</p>
              <p>最終改定日：2025年11月1日</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
