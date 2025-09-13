import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // リクエストボディを取得
    const formData = await request.json();
    
    // 電話番号をハイフン付きにフォーマット
    const formatPhoneNumber = (phone: string): string => {
      const numbers = phone.replace(/[^\d]/g, '');
      if (numbers.length <= 3) return numbers;
      if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    };
    
    // 電話番号をフォーマットしてから'を追加
    const modifiedFormData = {
      ...formData,
      phone: formData.phone ? `'${formatPhoneNumber(formData.phone)}` : formData.phone
    };
    
    console.log('APIルート受信データ:', modifiedFormData);
    
    // GASエンドポイントに転送
    const gasUrl = process.env.GAS_URL || process.env.NEXT_PUBLIC_GAS_URL;
    
    if (!gasUrl) {
      throw new Error('GAS URLが設定されていません');
    }
    
    const gasResponse = await fetch(gasUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedFormData),
    });
    
    // GASからのレスポンステキストを取得
    const responseText = await gasResponse.text();
    console.log('GASレスポンス:', responseText);
    
    // レスポンスをパースしてみる
    let gasResult;
    try {
      gasResult = JSON.parse(responseText);
    } catch (e) {
      // JSONでない場合はそのまま成功とみなす
      gasResult = { success: true, message: 'データを送信しました' };
    }
    
    // クライアントに結果を返す
    if (gasResult.success) {
      return NextResponse.json({
        success: true,
        message: gasResult.message || '応募を受け付けました',
      });
    } else {
      throw new Error(gasResult.error || '送信に失敗しました');
    }
    
  } catch (error) {
    console.error('APIルートエラー:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '送信中にエラーが発生しました',
      },
      { status: 500 }
    );
  }
}