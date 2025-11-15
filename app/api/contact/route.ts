import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// イメージカラー
const COLORS = {
  primary: '#065F46',
  gold: '#C4AC6E',
  accent: '#F55600',
};

// 選択肢のラベル変換
const getBudgetLabel = (value: string) => {
  const labels: Record<string, string> = {
    '55000': '5万円台（ライトプラン）',
    '88000': '8万円台（スタンダードプラン）',
    '132000': '13万円台（プレミアムプラン）',
    'custom': '予算は相談したい',
  };
  return labels[value] || value;
};

const getDeadlineLabel = (value: string) => {
  const labels: Record<string, string> = {
    'asap': 'できるだけ早く',
    '1month': '1ヶ月以内',
    '2months': '2ヶ月以内',
    '3months': '3ヶ月以内',
    'flexible': 'まだ決めていない',
  };
  return labels[value] || value;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // メッセージからデータを抽出
    const extractValue = (message: string, label: string) => {
      const regex = new RegExp(`【${label}】\\n([^【]+)`, 's');
      const match = message.match(regex);
      return match ? match[1].trim() : '';
    };

    const bookType = extractValue(message, 'どんな本を作りたいか');
    const purpose = extractValue(message, '出版の目的');
    const phone = extractValue(message, '電話番号');
    const budget = extractValue(message, '予算');
    const deadline = extractValue(message, '希望納期');

    // タイムスタンプを生成（スレッド分離用）
    const timestamp = new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // 管理者への通知メール
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@bookpower.jp',
      to: 'info@bookpower.jp',
      subject: `【著力】新規お問い合わせ - ${name}様 (${timestamp})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif; line-height: 1.8; color: #333; background: #f5f5f5; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, ${COLORS.primary} 0%, #054235 100%); padding: 40px 30px; text-align: center; }
            .header h1 { color: ${COLORS.gold}; font-size: 36px; margin: 0 0 10px 0; font-weight: 900; letter-spacing: 2px; }
            .header .subtitle { color: #ffffff; margin: 0; font-size: 16px; opacity: 0.9; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 20px; color: ${COLORS.primary}; font-weight: bold; margin-bottom: 20px; }
            .message-box { background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid ${COLORS.gold}; padding: 25px; margin: 25px 0; border-radius: 4px; }
            .info-item { margin: 12px 0; }
            .label { color: ${COLORS.primary}; font-weight: bold; font-size: 13px; margin-bottom: 3px; }
            .value { color: #555; font-size: 15px; padding-left: 10px; }
            .highlight-box { background: linear-gradient(135deg, ${COLORS.accent} 0%, #FF6B1A 100%); color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0; }
            .highlight-box h3 { margin: 0 0 10px 0; font-size: 18px; }
            .highlight-box p { margin: 5px 0; font-size: 15px; }
            .footer { background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 3px solid ${COLORS.gold}; }
            .footer-text { color: #666; font-size: 13px; margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>著力</h1>
              <p class="subtitle">新規お問い合わせ通知</p>
            </div>
            <div class="content">
              <div class="greeting">新しいお問い合わせがありました</div>
              <p>以下の内容でお問い合わせを受け付けました。</p>

              <div class="message-box">
                <div class="info-item">
                  <div class="label">お名前</div>
                  <div class="value">${name}</div>
                </div>
                <div class="info-item">
                  <div class="label">メールアドレス</div>
                  <div class="value"><a href="mailto:${email}" style="color: ${COLORS.accent}; text-decoration: none;">${email}</a></div>
                </div>
                ${company ? `
                <div class="info-item">
                  <div class="label">会社名</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                ${phone ? `
                <div class="info-item">
                  <div class="label">電話番号</div>
                  <div class="value"><a href="tel:${phone}" style="color: ${COLORS.accent}; text-decoration: none;">${phone}</a></div>
                </div>
                ` : ''}
                ${bookType ? `
                <div class="info-item">
                  <div class="label">どんな本を作りたいか</div>
                  <div class="value">${bookType}</div>
                </div>
                ` : ''}
                ${purpose ? `
                <div class="info-item">
                  <div class="label">出版の目的</div>
                  <div class="value">${purpose}</div>
                </div>
                ` : ''}
                ${budget ? `
                <div class="info-item">
                  <div class="label">ご予算</div>
                  <div class="value">${getBudgetLabel(budget)}</div>
                </div>
                ` : ''}
                ${deadline ? `
                <div class="info-item">
                  <div class="label">希望納期</div>
                  <div class="value">${getDeadlineLabel(deadline)}</div>
                </div>
                ` : ''}
              </div>

              <div class="highlight-box">
                <h3>2営業日以内にご返信をお願いいたします</h3>
                <p>お客様は返信をお待ちしております</p>
              </div>

              <div style="margin-top: 40px; padding: 30px; background: #f8f9fa; border: 2px dashed ${COLORS.primary}; border-radius: 8px;">
                <h3 style="color: ${COLORS.primary}; font-size: 18px; font-weight: bold; margin: 0 0 20px 0;">📋 返信メールテンプレート（コピー＆ペースト用）</h3>
                <p style="color: #666; font-size: 14px; margin-bottom: 15px;">※Gmailで「書式設定オプション」→「プレーンテキストモード」に切り替えてからコピー＆ペーストしてください</p>
                <div style="background: white; padding: 20px; border-radius: 4px; font-family: monospace; font-size: 13px; line-height: 1.8; white-space: pre-wrap; color: #333;">件名: Re: 【著力】新規お問い合わせ - ${name}様<br/><br/>${name} 様<br/><br/>著力運営チーム、担当の宮川と申します。<br/>どうぞよろしくお願いいたします。<br/><br/>この度は「著力」にお問い合わせいただき、誠にありがとうございます。<br/><br/>お問い合わせ内容を拝見いたしました。<br/>${bookType || '[内容]'}の出版をご検討とのこと、承知いたしました。<br/><br/>つきましては、詳細をお伺いするため、オンライン面談（30分程度）のお時間をいただけますでしょうか。<br/>以下の候補日時とご希望のツールをお知らせください。<br/><br/>【候補日時】<br/>・○月○日（○）10:00-10:30<br/>・○月○日（○）14:00-14:30<br/>・○月○日（○）16:00-16:30<br/><br/>※上記以外でもご調整可能ですので、お気軽にお申し付けください。<br/><br/>【オンライン面談ツール】<br/>以下からご希望のツールをお選びください：<br/>□ Zoom<br/>□ Google Meet<br/>□ その他（ご希望のツールがあればお知らせください）<br/><br/>面談では、以下のような内容をご相談させていただきます：<br/>・出版の目的とゴール設定<br/>・最適なプランのご提案<br/>・制作スケジュールの確認<br/>・ご予算のご相談<br/><br/>日時とツールをご連絡いただきましたら、あらためて面談URLをお送りいたします。<br/><br/>ご不明な点がございましたら、お気軽にお問い合わせください。<br/>${name}様との出版プロジェクトを心よりお待ちしております。<br/><br/>何卒よろしくお願いいたします。<br/><br/>───────────────────────────────<br/>宮川 清実 | Kiyomi Miyagawa<br/>著力運営チーム / 株式会社Senrigan<br/><br/>E info@bookpower.jp<br/>W bookpower.jp<br/>A 広島県広島市安佐南区山本2-3-35<br/>───────────────────────────────<br/>著力 - あなたの名前が、Amazonに載る<br/>───────────────────────────────</div>
              </div>
            </div>
            <div class="footer">
              <p class="footer-text">このメールは 著力 のお問い合わせフォームから自動送信されました。</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // ユーザーへの自動返信メール
    const userEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@bookpower.jp',
      to: email,
      subject: 'お問い合わせありがとうございます - 著力',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif; line-height: 1.8; color: #333; background: #f5f5f5; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, ${COLORS.primary} 0%, #054235 100%); padding: 40px 30px; text-align: center; }
            .header h1 { color: ${COLORS.gold}; font-size: 36px; margin: 0 0 10px 0; font-weight: 900; letter-spacing: 2px; }
            .header .subtitle { color: #ffffff; margin: 0; font-size: 16px; opacity: 0.9; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 20px; color: ${COLORS.primary}; font-weight: bold; margin-bottom: 20px; }
            .message-box { background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid ${COLORS.gold}; padding: 25px; margin: 25px 0; border-radius: 4px; }
            .info-item { margin: 12px 0; }
            .label { color: ${COLORS.primary}; font-weight: bold; font-size: 13px; margin-bottom: 3px; }
            .value { color: #555; font-size: 15px; padding-left: 10px; }
            .highlight-box { background: linear-gradient(135deg, ${COLORS.gold} 0%, #D4BC7E 100%); color: #1C1917; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0; }
            .highlight-box h3 { margin: 0 0 10px 0; font-size: 18px; }
            .highlight-box p { margin: 5px 0; font-size: 15px; }
            .steps { margin: 30px 0; }
            .step { display: flex; align-items: start; margin: 20px 0; }
            .step-number { background: ${COLORS.accent}; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; }
            .step-text { color: #555; flex: 1; padding-top: 4px; }
            .footer { background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 3px solid ${COLORS.gold}; }
            .footer-text { color: #666; font-size: 13px; margin: 5px 0; }
            .signature { color: ${COLORS.primary}; font-weight: bold; font-size: 16px; margin: 20px 0 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>著力</h1>
              <p class="subtitle">あなたの名前が、Amazonに載る</p>
            </div>
            <div class="content">
              <div class="greeting">${name} 様</div>
              <p>この度は <strong style="color: ${COLORS.primary};">著力</strong> にお問い合わせいただき、誠にありがとうございます。</p>
              <p>以下の内容でお問い合わせを受け付けました。</p>

              <div class="message-box">
                <div class="info-item">
                  <div class="label">お名前</div>
                  <div class="value">${name}</div>
                </div>
                <div class="info-item">
                  <div class="label">メールアドレス</div>
                  <div class="value">${email}</div>
                </div>
                ${company ? `
                <div class="info-item">
                  <div class="label">会社名</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                ${bookType ? `
                <div class="info-item">
                  <div class="label">どんな本を作りたいか</div>
                  <div class="value">${bookType}</div>
                </div>
                ` : ''}
                ${purpose ? `
                <div class="info-item">
                  <div class="label">出版の目的</div>
                  <div class="value">${purpose}</div>
                </div>
                ` : ''}
                ${budget ? `
                <div class="info-item">
                  <div class="label">ご予算</div>
                  <div class="value">${getBudgetLabel(budget)}</div>
                </div>
                ` : ''}
                ${deadline ? `
                <div class="info-item">
                  <div class="label">希望納期</div>
                  <div class="value">${getDeadlineLabel(deadline)}</div>
                </div>
                ` : ''}
              </div>

              <div class="highlight-box">
                <h3>2営業日以内にご返信いたします</h3>
                <p>担当者より詳細をご連絡させていただきます</p>
              </div>

              <div class="steps">
                <p style="color: ${COLORS.primary}; font-weight: bold; font-size: 16px; margin-bottom: 20px;">今後の流れ</p>
                <p style="color: #555; line-height: 2; margin: 0;">
                  1. 担当者からメールまたはお電話でご連絡<br>
                  2. オンライン面談の日程調整<br>
                  3. 30分の無料相談で詳細をお伺い<br>
                  4. 最適なプランをご提案
                </p>
              </div>

              <p style="margin-top: 30px; color: #666; font-size: 14px;">
                今しばらくお待ちくださいませ。<br>
                ご不明な点がございましたら、本メールに返信する形でお問い合わせください。
              </p>

              <div class="signature">著力運営チーム</div>
              <p style="color: #999; font-size: 13px;">株式会社Senrigan</p>
            </div>
            <div class="footer">
              <p class="footer-text">このメールは自動送信されています。</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        message: 'メールを送信しました',
        adminEmailId: adminEmail.data?.id,
        userEmailId: userEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
}
