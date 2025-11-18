import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const UNSUBSCRIBE_FILE = path.join(process.cwd(), 'data', 'unsubscribed.json');

// 配信停止リストを取得
async function getUnsubscribedList(): Promise<string[]> {
  try {
    // dataディレクトリが存在しない場合は作成
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // ファイルが存在しない場合は空配列を返す
    if (!existsSync(UNSUBSCRIBE_FILE)) {
      return [];
    }

    const data = await readFile(UNSUBSCRIBE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('配信停止リスト読み込みエラー:', error);
    return [];
  }
}

// 配信停止リストに追加
async function addToUnsubscribedList(email: string): Promise<void> {
  const list = await getUnsubscribedList();

  if (!list.includes(email)) {
    list.push(email);

    // dataディレクトリが存在しない場合は作成
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    await writeFile(UNSUBSCRIBE_FILE, JSON.stringify(list, null, 2), 'utf-8');
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'メールアドレスが指定されていません' }, { status: 400 });
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '無効なメールアドレスです' }, { status: 400 });
    }

    // 配信停止リストに追加
    await addToUnsubscribedList(email);

    return NextResponse.json({
      success: true,
      message: '配信停止を受け付けました'
    });

  } catch (error: any) {
    console.error('配信停止エラー:', error);
    return NextResponse.json({ error: '配信停止の処理に失敗しました' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'メールアドレスが指定されていません' }, { status: 400 });
    }

    const list = await getUnsubscribedList();
    const isUnsubscribed = list.includes(email);

    return NextResponse.json({
      email,
      isUnsubscribed
    });

  } catch (error: any) {
    console.error('配信停止確認エラー:', error);
    return NextResponse.json({ error: '確認処理に失敗しました' }, { status: 500 });
  }
}
