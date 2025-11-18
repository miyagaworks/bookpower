'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleUnsubscribe = async () => {
    if (!email) {
      setStatus('error');
      setMessage('メールアドレスが指定されていません');
      return;
    }

    setStatus('processing');

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('配信停止を受け付けました。今後メールが配信されることはありません。');
      } else {
        setStatus('error');
        setMessage(result.error || '配信停止の処理に失敗しました');
      }
    } catch (error) {
      setStatus('error');
      setMessage('配信停止の処理中にエラーが発生しました');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 border border-gray-100">
        {status === 'idle' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-full">
                <FaExclamationTriangle className="text-white text-4xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
              メール配信停止
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Newsletter Unsubscribe
            </p>

            {email ? (
              <>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <p className="text-gray-700 mb-2">
                    以下のメールアドレス宛の配信を停止します：
                  </p>
                  <p className="text-lg font-semibold text-gray-800 break-all">
                    {email}
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <p className="text-sm text-yellow-800">
                    <strong>ご注意：</strong>配信停止を実行すると、今後「著力」からのメールマガジンやお知らせが届かなくなります。
                  </p>
                </div>

                <button
                  onClick={handleUnsubscribe}
                  className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-[1.02] shadow-lg text-lg"
                >
                  配信を停止する
                </button>
              </>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-700">
                  メールアドレスが指定されていません。<br />
                  配信停止リンクが正しくありません。
                </p>
              </div>
            )}
          </>
        )}

        {status === 'processing' && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-6"></div>
            <p className="text-xl text-gray-700">処理中...</p>
          </div>
        )}

        {status === 'success' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full">
                <FaCheckCircle className="text-white text-4xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
              配信停止完了
            </h1>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 text-center">
                {message}
              </p>
              <p className="text-sm text-gray-600 text-center mt-4">
                メールアドレス: <span className="font-semibold break-all">{email}</span>
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://bookpower.jp"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                トップページへ戻る
              </a>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-full">
                <FaExclamationTriangle className="text-white text-4xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
              エラー
            </h1>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 text-center">
                {message}
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => setStatus('idle')}
                className="inline-block px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all"
              >
                戻る
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}
