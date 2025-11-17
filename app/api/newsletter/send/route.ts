import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { recipients, subject, body: emailBody } = body;

    if (!recipients || recipients.length === 0) {
      return NextResponse.json({ error: '送信先がありません' }, { status: 400 });
    }

    if (!subject || !emailBody) {
      return NextResponse.json({ error: '件名と本文は必須です' }, { status: 400 });
    }

    // 1日の送信制限チェック（100通）
    if (recipients.length > 100) {
      return NextResponse.json({
        error: '1日の送信制限（100通）を超えています。複数回に分けて送信してください。'
      }, { status: 400 });
    }

    let sent = 0;
    let failed = 0;
    const errors: any[] = [];

    for (const recipient of recipients) {
      try {
        // 本文の変数を置換
        const personalizedBody = emailBody
          .replace(/{代表}/g, recipient.representative || '◯◯')
          .replace(/{会社}/g, recipient.company || '御社')
          .replace(/{業種}/g, recipient.industry || '貴業界');

        const html = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: sans-serif; line-height: 1.8; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="white-space: pre-wrap;">${personalizedBody}</div>

              <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">

              <div style="font-size: 13px; color: #666;">
                <p style="margin: 5px 0;"><strong>BookPower 出版代行サービス</strong></p>
                <p style="margin: 5px 0;">〒731-0137 広島県広島市安佐南区山本2-3-35</p>
                <p style="margin: 5px 0;">TEL: 082-209-0181</p>
                <p style="margin: 5px 0;">担当：宮川</p>
                <p style="margin: 15px 0 5px 0; font-size: 12px;">
                  このメールは、以前お取引のあったお客様へお送りしております。
                </p>
                <p style="margin: 5px 0;">
                  <a href="https://bookpower.jp/unsubscribe?email=${encodeURIComponent(recipient.email)}"
                     style="color: #0070f3; text-decoration: none;">
                    配信停止はこちら
                  </a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `;

        await resend.emails.send({
          from: 'BookPower出版サポート <newsletter@bookpower.jp>',
          to: recipient.email,
          subject: subject,
          html: html,
          headers: {
            'List-Unsubscribe': `<https://bookpower.jp/unsubscribe?email=${encodeURIComponent(recipient.email)}>`
          }
        });

        sent++;

        // レート制限対策（1秒あたり1通）
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error: any) {
        failed++;
        errors.push({
          email: recipient.email,
          error: error.message
        });
        console.error(`送信失敗 (${recipient.email}):`, error);
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      failed,
      total: recipients.length,
      errors: failed > 0 ? errors : undefined
    });

  } catch (error: any) {
    console.error('メール送信エラー:', error);
    return NextResponse.json({ error: 'メールの送信に失敗しました' }, { status: 500 });
  }
}
