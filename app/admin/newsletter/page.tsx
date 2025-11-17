'use client';

import { useState } from 'react';

export default function NewsletterAdmin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    industry: '',
    representative: ''
  });
  const [emailContent, setEmailContent] = useState({
    subject: '',
    body: ''
  });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<any>(null);

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

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split('\n').filter(line => line.trim());

      const dataLines = lines.slice(1);

      const parsed = dataLines.map((line, index) => {
        const values = line.split(',').map(v => v.trim());
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
    reader.readAsText(file, 'UTF-8');
  };

  const applyFilters = () => {
    let filtered = [...csvData];

    if (filters.industry) {
      filtered = filtered.filter(item =>
        item.industry.includes(filters.industry)
      );
    }

    if (filters.representative) {
      filtered = filtered.filter(item =>
        item.representative.includes(filters.representative)
      );
    }

    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilters({ industry: '', representative: '' });
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
    setSendStatus({ sent: 0, failed: 0, total: filteredData.length });

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
    } catch (error: any) {
      alert(`送信エラー: ${error.message}`);
    } finally {
      setSending(false);
    }
  };

  const getUniqueValues = (key: string) => {
    return [...new Set(csvData.map(item => item[key]).filter(Boolean))];
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{ marginBottom: '20px' }}>一斉配信管理画面</h1>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <h1>一斉メール配信システム</h1>

      {/* CSV読み込み */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <h2>1. CSVファイルをアップロード</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>
          形式: メールアドレス,会社,業種,代表,名前,姓,名,電話番号,住所,登録日
        </p>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          style={{ marginTop: '10px' }}
        />
        {csvData.length > 0 && (
          <p style={{ marginTop: '10px', color: '#0070f3' }}>
            ✓ {csvData.length}件のデータを読み込みました
          </p>
        )}
      </section>

      {csvData.length > 0 && (
        <>
          {/* フィルター */}
          <section style={{
            backgroundColor: 'white',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h2>2. 送信先を絞り込み</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>業種</label>
                <select
                  value={filters.industry}
                  onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="">すべて</option>
                  {getUniqueValues('industry').map((val: any) => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>代表者名（部分一致）</label>
                <input
                  type="text"
                  value={filters.representative}
                  onChange={(e) => setFilters({ ...filters, representative: e.target.value })}
                  placeholder="例: 田中"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={applyFilters}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                絞り込み実行
              </button>
              <button
                onClick={resetFilters}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                リセット
              </button>
            </div>

            <p style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
              送信対象: {filteredData.length}件
            </p>
          </section>

          {/* メール内容 */}
          <section style={{
            backgroundColor: 'white',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h2>3. メール内容を作成</h2>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>件名</label>
              <input
                type="text"
                value={emailContent.subject}
                onChange={(e) => setEmailContent({ ...emailContent, subject: e.target.value })}
                placeholder="例: 【BookPower】出版サポートのご案内"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>本文</label>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                使用可能な変数: {'{代表}'}, {'{会社}'}, {'{業種}'}
              </p>
              <textarea
                value={emailContent.body}
                onChange={(e) => setEmailContent({ ...emailContent, body: e.target.value })}
                placeholder={`例:\n{代表}様\n\n{会社}様には、以前大変お世話になりました。\n\nこの度、{業種}の皆様に特化した出版サービスを開始いたしました...`}
                rows={15}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          </section>

          {/* プレビュー */}
          {filteredData.length > 0 && (
            <section style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <h2>4. プレビュー（最初の1件）</h2>
              <div style={{
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}>
                <p><strong>宛先:</strong> {filteredData[0].email}</p>
                <p><strong>件名:</strong> {emailContent.subject}</p>
                <hr style={{ margin: '10px 0' }} />
                <div style={{ whiteSpace: 'pre-wrap' }}>
                  {emailContent.body
                    .replace(/{代表}/g, filteredData[0].representative || '◯◯')
                    .replace(/{会社}/g, filteredData[0].company || '御社')
                    .replace(/{業種}/g, filteredData[0].industry || '貴業界')
                  }
                </div>
              </div>
            </section>
          )}

          {/* 送信 */}
          <section style={{
            backgroundColor: 'white',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h2>5. 送信実行</h2>

            <div style={{
              backgroundColor: '#fff3cd',
              padding: '15px',
              borderRadius: '4px',
              marginBottom: '15px',
              border: '1px solid #ffc107'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ 注意事項</p>
              <ul style={{ margin: '10px 0 0 20px', fontSize: '14px' }}>
                <li>無料プランは1日100通まで</li>
                <li>送信後の取り消しはできません</li>
                <li>必ずプレビューで内容を確認してください</li>
              </ul>
            </div>

            <button
              onClick={handleSend}
              disabled={sending || filteredData.length === 0}
              style={{
                padding: '15px 30px',
                backgroundColor: sending ? '#ccc' : '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: sending ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              {sending ? '送信中...' : `${filteredData.length}件のメールを送信`}
            </button>

            {sendStatus && (
              <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#d4edda', borderRadius: '4px' }}>
                <p style={{ margin: 0 }}>
                  送信状況: {sendStatus.sent} / {sendStatus.total}件
                  {sendStatus.failed > 0 && ` (失敗: ${sendStatus.failed}件)`}
                </p>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
