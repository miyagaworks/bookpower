import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 管理者への通知メール
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@bookpower.jp',
      to: 'info@bookpower.jp', // 受信用アドレス（Cloudflare Email Routingで設定）
      subject: `【著力】新規お問い合わせ - ${name}様`,
      html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${company ? `<p><strong>会社名:</strong> ${company}</p>` : ''}
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">このメールは 著力 のお問い合わせフォームから送信されました。</p>
      `,
    });

    // ユーザーへの自動返信メール
    const userEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@bookpower.jp',
      to: email,
      subject: 'お問い合わせありがとうございます - 著力',
      html: `
        <h2>${name} 様</h2>
        <p>この度は 「著力」にお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>
        <hr>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${company ? `<p><strong>会社名:</strong> ${company}</p>` : ''}
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>担当者より2営業日以内にご連絡させていただきます。</p>
        <p>今しばらくお待ちくださいませ。</p>
        <br>
        <p>著力運営チーム</p>
        <p style="color: #666; font-size: 12px;">
          このメールは自動送信されています。<br>
          ご不明な点がございましたら、本メールに返信する形でお問い合わせください。
        </p>
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
