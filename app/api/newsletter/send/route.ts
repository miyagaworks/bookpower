import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

// 配信停止リストを取得
async function getUnsubscribedList(): Promise<string[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'unsubscribed.json');
    if (!existsSync(filePath)) {
      return [];
    }
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('配信停止リスト読み込みエラー:', error);
    return [];
  }
}

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
    let skipped = 0;
    const errors: any[] = [];

    // 配信停止リストを取得
    const unsubscribedList = await getUnsubscribedList();

    for (const recipient of recipients) {
      // 配信停止リストにある場合はスキップ
      if (unsubscribedList.includes(recipient.email)) {
        skipped++;
        console.log(`スキップ: ${recipient.email} (配信停止済み)`);
        continue;
      }
      try {
        // 本文の変数を置換
        const standardBorder = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━'; // 28文字の太い線（署名と同じ）
        const personalizedBody = emailBody
          .replace(/{代表}/g, recipient.representative || '◯◯')
          .replace(/{会社}/g, recipient.company || '御社')
          .replace(/{業種}/g, recipient.industry || '貴業界')
          .replace(/{姓}/g, recipient.lastName || '◯◯')
          .replace(/{名}/g, recipient.firstName || '◯◯')
          .replace(/[─━―−‐]{5,}/g, standardBorder) // 5文字以上の区切り線を統一
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); // **太字** を <strong> に変換

        const html = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: sans-serif; line-height: 1.8; color: #333; font-size: 16px;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="white-space: pre-wrap; font-size: 16px;">${personalizedBody}</div>

              <div style="color: #666; line-height: 1.8; margin-top: 40px; font-size: 14px;">
                <p style="margin: 0; font-size: 14px;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p style="margin: 8px 0 5px 0; font-size: 14px;"><strong>宮川 清実 | Kiyomi Miyagawa</strong></p>
                <p style="margin: 5px 0; font-size: 14px;">著力運営チーム / 株式会社Senrigan</p>
                <p style="margin: 8px 0 0 0; font-size: 14px;"><strong style="color: #000;">E</strong> info@bookpower.jp</p>
                <p style="margin: 3px 0 0 0; font-size: 14px;"><strong style="color: #000;">M</strong> 090-1686-8728</p>
                <p style="margin: 8px 0 0 0; font-size: 14px;"><strong style="color: #000;">W</strong> https://bookpower.jp（出版代行）</p>
                <p style="margin: 3px 0; font-size: 14px;"><strong style="color: #000;">W</strong> https://senrigan.systems（システム開発）</p>
                <p style="margin: 3px 0; font-size: 14px;"><strong style="color: #000;">W</strong> https://www.sns-share.com（デジタル名刺）</p>
                <p style="margin: 3px 0; font-size: 14px;"><strong style="color: #000;">W</strong> https://kigasuru.com（ゴルフアプリ）</p>
                <p style="margin: 8px 0 0 0; font-size: 14px;"><strong style="color: #000;">A</strong> 広島県広島市安佐南区山本2-3-35</p>
                <p style="margin: 10px 0; font-size: 14px;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p style="margin: 8px 0; font-weight: bold; color: #333; font-size: 14px;">著力 - あなたの名前が、Amazonに載る</p>
                <p style="margin: 10px 0; font-size: 14px;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p style="margin: 20px 0 5px 0;">
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
          from: '「著力」出版サポート <newsletter@bookpower.jp>',
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
      skipped,
      total: recipients.length,
      errors: failed > 0 ? errors : undefined
    });

  } catch (error: any) {
    console.error('メール送信エラー:', error);
    return NextResponse.json({ error: 'メールの送信に失敗しました' }, { status: 500 });
  }
}
