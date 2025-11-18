'use client';

import { useState } from 'react';
import { FaFileUpload, FaFilter, FaEnvelope, FaEye, FaPaperPlane, FaLock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

interface RecipientData {
  id: number;
  email: string;
  company: string;
  industry: string;
  representative: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  address: string;
  registeredDate: string;
}

interface SendStatus {
  sent: number;
  failed: number;
  skipped: number;
  total: number;
  completed?: boolean;
  errors?: Array<{ email: string; error: string }>;
}

export default function NewsletterAdmin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [csvData, setCsvData] = useState<RecipientData[]>([]);
  const [filteredData, setFilteredData] = useState<RecipientData[]>([]);
  const [filters, setFilters] = useState({
    industry: '',
    isRepresentative: false
  });
  const [emailContent, setEmailContent] = useState({
    subject: '',
    body: ''
  });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<SendStatus | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_NEWSLETTER_PASSWORD || password === 'admin') {
      setAuthenticated(true);
    } else {
      alert('パスワードが違います');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // まずUTF-8で読み込んでみて、文字化けしていたらShift-JISで再読み込み
    const reader = new FileReader();

    const parseCSV = (text: string) => {
      const lines = text.split('\n').filter(line => line.trim());
      const dataLines = lines.slice(1);

      const parsed = dataLines.map((line, index) => {
        const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, '')); // ダブルクォートを削除
        return {
          id: index,
          email: values[0] || '',
          company: values[1] || '',
          industry: values[2] || '',
          representative: values[3] || '',
          firstName: values[4] || '',
          lastName: values[5] || '',
          fullName: values[6] || '',
          phone: values[7] || '',
          address: values[8] || '',
          registeredDate: values[9] || ''
        };
      }).filter(item => item.email);

      setCsvData(parsed);
      setFilteredData(parsed);
    };

    reader.onload = (event) => {
      const text = event.target?.result as string;

      // 文字化けチェック: 日本語の文字コード範囲に含まれるか確認
      const hasValidJapanese = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);

      if (hasValidJapanese) {
        // UTF-8で正常に読めた
        parseCSV(text);
      } else {
        // 文字化けしているので、Shift-JISで再読み込み
        const readerShiftJIS = new FileReader();
        readerShiftJIS.onload = (e) => {
          const textShiftJIS = e.target?.result as string;
          parseCSV(textShiftJIS);
        };
        readerShiftJIS.readAsText(file, 'Shift-JIS');
      }
    };

    // 最初はUTF-8で読み込み
    reader.readAsText(file, 'UTF-8');
  };

  const applyFilters = () => {
    let filtered = [...csvData];

    // 業種で絞り込み
    if (filters.industry) {
      filtered = filtered.filter(item =>
        item.industry.includes(filters.industry)
      );
    }

    // 代表者で絞り込み（「代表」という文字列が入っている人）
    if (filters.isRepresentative) {
      filtered = filtered.filter(item =>
        item.representative === '代表' || item.representative.includes('代表')
      );
    }

    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilters({ industry: '', isRepresentative: false });
    setFilteredData(csvData);
  };

  const handleSend = async () => {
    if (!emailContent.subject || !emailContent.body) {
      alert('件名と本文を入力してください');
      return;
    }

    if (filteredData.length === 0) {
      alert('送信先がありません');
      return;
    }

    if (!confirm(`${filteredData.length}件のメールを送信します。よろしいですか？`)) {
      return;
    }

    setSending(true);
    setSendStatus({ sent: 0, failed: 0, skipped: 0, total: filteredData.length });

    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipients: filteredData,
          subject: emailContent.subject,
          body: emailContent.body
        })
      });

      const result = await response.json();

      if (result.success) {
        alert(`送信完了: ${result.sent}件`);
        setSendStatus({ ...result, completed: true });
      } else {
        alert(`エラー: ${result.error}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '不明なエラー';
      alert(`送信エラー: ${errorMessage}`);
    } finally {
      setSending(false);
    }
  };

  const getUniqueValues = (key: keyof RecipientData): string[] => {
    return [...new Set(csvData.map(item => String(item[key])).filter(Boolean))];
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
              <FaLock className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            一斉配信管理画面
          </h1>
          <p className="text-center text-gray-500 mb-8">Newsletter Administration</p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力"
              className="w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            一斉メール配信システム
          </h1>
          <p className="text-gray-600">CSV-based Newsletter Campaign Manager</p>
        </div>

        {/* CSV読み込み */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
              <FaFileUpload className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                CSVファイルをアップロード
              </h2>
              <p className="text-sm text-gray-500">
                メールアドレス,会社,業種,代表,名前,姓,名,電話番号,住所,登録日
              </p>
            </div>
          </div>
          <div className="mt-6">
            <label className="relative inline-block">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-md">
                <FaFileUpload />
                ファイルを選択
              </span>
            </label>
            {csvData.length > 0 && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                <FaCheckCircle className="text-green-600" />
                <span className="text-green-700 font-semibold">
                  {csvData.length}件のデータを読み込みました
                </span>
              </div>
            )}
          </div>
        </section>

        {csvData.length > 0 && (
          <>
            {/* フィルター */}
            <section className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                  <FaFilter className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  送信先を絞り込み
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    業種
                  </label>
                  <select
                    value={filters.industry}
                    onChange={(e) =>
                      setFilters({ ...filters, industry: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">すべて</option>
                    {getUniqueValues("industry").map((val: string) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    代表者のみ
                  </label>
                  <div className="flex items-center h-full">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.isRepresentative}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            isRepresentative: e.target.checked,
                          })
                        }
                        className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium">
                        代表者のみを表示
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={applyFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-md"
                >
                  <FaFilter />
                  絞り込み実行
                </button>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  リセット
                </button>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                <p className="text-lg font-bold text-gray-800">
                  送信対象:{" "}
                  <span className="text-purple-600 text-2xl">
                    {filteredData.length}
                  </span>
                  件
                </p>
              </div>
            </section>

            {/* メール内容 */}
            <section className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  メール内容を作成
                </h2>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  件名
                </label>
                <input
                  type="text"
                  value={emailContent.subject}
                  onChange={(e) =>
                    setEmailContent({
                      ...emailContent,
                      subject: e.target.value,
                    })
                  }
                  placeholder="例: 【著力】出版サポートのご案内"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  本文
                </label>
                <div className="mb-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    💡 使用可能な変数:{" "}
                    <code className="bg-white px-2 py-1 rounded text-blue-800 font-mono">
                      {"{代表}"}
                    </code>
                    ,{" "}
                    <code className="bg-white px-2 py-1 rounded text-blue-800 font-mono">
                      {"{会社}"}
                    </code>
                    ,{" "}
                    <code className="bg-white px-2 py-1 rounded text-blue-800 font-mono">
                      {"{業種}"}
                    </code>
                    ,{" "}
                    <code className="bg-white px-2 py-1 rounded text-blue-800 font-mono">
                      {"{姓}"}
                    </code>
                    ,{" "}
                    <code className="bg-white px-2 py-1 rounded text-blue-800 font-mono">
                      {"{名}"}
                    </code>
                  </p>
                </div>
                <textarea
                  value={emailContent.body}
                  onChange={(e) =>
                    setEmailContent({ ...emailContent, body: e.target.value })
                  }
                  placeholder={`例:\n{会社}\n{姓} 様\n\nこの度、{業種}の皆様に特化した出版サービスを開始いたしました...`}
                  rows={15}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors font-mono text-sm"
                />
              </div>
            </section>

            {/* プレビュー */}
            {filteredData.length > 0 && (
              <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                    <FaEye className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    プレビュー（最初の1件）
                  </h2>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">宛先</p>
                    <p className="font-semibold text-gray-800">
                      {filteredData[0].email}
                    </p>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">件名</p>
                    <p className="font-semibold text-gray-800">
                      {emailContent.subject || "（件名未入力）"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">本文</p>
                    <div
                      className="whitespace-pre-wrap text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: emailContent.body
                          ? emailContent.body
                              .replace(
                                /{代表}/g,
                                filteredData[0].representative || "◯◯"
                              )
                              .replace(
                                /{会社}/g,
                                filteredData[0].company || "御社"
                              )
                              .replace(
                                /{業種}/g,
                                filteredData[0].industry || "貴業界"
                              )
                              .replace(/{姓}/g, filteredData[0].lastName || "◯◯")
                              .replace(/{名}/g, filteredData[0].firstName || "◯◯")
                              .replace(/[─━―−‐]{5,}/g, "━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
                              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          : "（本文未入力）"
                      }}
                    />
                    <div className="text-gray-600 leading-relaxed mt-10">
                      <p style={{ margin: 0 }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                      <p style={{ margin: '8px 0 5px 0' }} className="font-semibold text-gray-800">宮川 清実 | Kiyomi Miyagawa</p>
                      <p style={{ margin: '5px 0' }}>著力運営チーム / 株式会社Senrigan</p>
                      <p style={{ margin: '8px 0 0 0' }}>E info@bookpower.jp</p>
                      <p style={{ margin: '3px 0' }}>W https://bookpower.jp（出版代行）</p>
                      <p style={{ margin: '3px 0' }}>W https://senrigan.systems（システム開発）</p>
                      <p style={{ margin: '3px 0' }}>W https://www.sns-share.com（デジタル名刺）</p>
                      <p style={{ margin: '3px 0' }}>W https://kigasuru.com（ゴルフアプリ）</p>
                      <p style={{ margin: '8px 0 0 0' }}>A 広島県広島市安佐南区山本2-3-35</p>
                      <p style={{ margin: '10px 0' }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                      <p style={{ margin: '8px 0' }} className="font-semibold text-gray-800">著力 - あなたの名前が、Amazonに載る</p>
                      <p style={{ margin: '10px 0' }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                      <p style={{ margin: '20px 0 5px 0' }}>
                        <a href={`https://bookpower.jp/unsubscribe?email=${encodeURIComponent(filteredData[0].email)}`} className="text-blue-600 hover:underline">
                          配信停止はこちら
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 送信 */}
            <section className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-lg">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">送信実行</h2>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6 border-2 border-yellow-300">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-yellow-800 mb-2 text-lg">
                      注意事項
                    </p>
                    <ul className="space-y-1 text-yellow-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        無料プランは1日100通まで
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        送信後の取り消しはできません
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        必ずプレビューで内容を確認してください
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSend}
                disabled={sending || filteredData.length === 0}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform ${
                  sending || filteredData.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 hover:scale-[1.02]"
                }`}
              >
                <FaPaperPlane className={sending ? "animate-pulse" : ""} />
                {sending
                  ? "送信中..."
                  : `${filteredData.length}件のメールを送信`}
              </button>

              {sendStatus && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 text-2xl" />
                    <div>
                      <p className="font-bold text-green-800 text-lg">
                        送信状況: {sendStatus.sent} / {sendStatus.total}件
                      </p>
                      {sendStatus.skipped > 0 && (
                        <p className="text-orange-600 font-semibold mt-1">
                          スキップ: {sendStatus.skipped}件（配信停止済み）
                        </p>
                      )}
                      {sendStatus.failed > 0 && (
                        <p className="text-red-600 font-semibold mt-1">
                          失敗: {sendStatus.failed}件
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
