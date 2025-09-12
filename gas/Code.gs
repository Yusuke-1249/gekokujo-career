// Google Apps Script - 下剋上キャリア フォーム処理

// 設定
const SPREADSHEET_ID = '1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g';
const SENDER_EMAIL = 'office.ota@apoial.com';  // 送信元アドレス
const ADMIN_EMAILS = [
  'office.ota@apoial.com',
  'office.yamamoto@apoial.com',
  'office.yanagi@apoial.com'
];

// メインのPOSTハンドラー
function doPost(e) {
  try {
    // リクエストデータをパース
    const data = JSON.parse(e.postData.contents);
    console.log('受信データ:', data);
    
    // スプレッドシートに保存
    const rowNumber = saveToSheet(data);
    
    // メール送信
    sendEmails(data);
    
    // 成功レスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '応募を受け付けました',
        rowNumber: rowNumber
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    console.error('エラー発生:', error);
    
    // エラーレスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// スプレッドシートに保存
function saveToSheet(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  
  // 現在の日時を取得
  const now = new Date();
  const date = now.toLocaleDateString('ja-JP');
  const time = now.toLocaleTimeString('ja-JP');
  
  // データを配列に整形
  const row = [
    date,                                                    // A: 日付
    time,                                                    // B: 時刻
    `${data.lastName} ${data.firstName}`,                   // C: 氏名(漢字)
    `${hiraganaToKatakana(data.lastNameKana)} ${hiraganaToKatakana(data.firstNameKana)}`, // D: 氏名(カナ)
    data.phone,                                              // E: 電話番号
    data.email,                                              // F: メールアドレス
    data.gender,                                             // G: 性別
    data.age,                                                // H: 年齢
    data.education,                                          // I: 最終学歴
    data.workLocation,                                       // J: 勤務地
    data.jobType,                                            // K: 職種
    data.startPeriod,                                        // L: 開始
    data.employmentStatus,                                   // M: 現在の形態
    data.drivingLicense                                      // N: 免許
  ];
  
  // 最終行に追加
  sheet.appendRow(row);
  
  // 追加した行番号を返す
  return sheet.getLastRow();
}

// ひらがな→カタカナ変換
function hiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

// メール送信
function sendEmails(data) {
  // 応募者への自動返信
  sendApplicantEmail(data);
  
  // 管理者への通知
  sendAdminNotification(data);
}

// 応募者への自動返信メール
function sendApplicantEmail(data) {
  const subject = '【下剋上キャリア】ご登録ありがとうございます';
  
  const body = `${data.lastName} ${data.firstName}様

この度は下剋上キャリアにご登録いただき、
誠にありがとうございます！

お送りいただいた情報を確認の上、
数時間以内に担当よりご連絡いたします。

【ご登録内容】
・希望勤務地：${data.workLocation}
・希望職種：${data.jobType}

あなたの「下剋上」を全力でサポートさせていただきます！
今しばらくお待ちください。

──────────
下剋上キャリア
office.ota@apoial.com
──────────`;
  
  // メール送信
  GmailApp.sendEmail(
    data.email,
    subject,
    body,
    {
      name: '下剋上キャリア',
      from: SENDER_EMAIL,
      noReply: false
    }
  );
  
  console.log('応募者への自動返信送信完了:', data.email);
}

// 管理者への通知メール
function sendAdminNotification(data) {
  const subject = `【新規応募】${data.lastName}様 - ${data.workLocation}/${data.jobType}`;
  
  const body = `新規応募がありました！

【基本情報】
${data.lastName} ${data.firstName}（${hiraganaToKatakana(data.lastNameKana)} ${hiraganaToKatakana(data.firstNameKana)}）
${data.age}歳 / ${data.gender}

【連絡先】
電話：${data.phone}
メール：${data.email}

【希望条件】
勤務地：${data.workLocation}
職種：${data.jobType}
開始：${data.startPeriod}

【その他】
現在：${data.employmentStatus}
学歴：${data.education}
免許：${data.drivingLicense}

登録日時：${new Date().toLocaleString('ja-JP')}

スプレッドシート：
https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`;
  
  // 各管理者にメール送信
  ADMIN_EMAILS.forEach(email => {
    GmailApp.sendEmail(
      email,
      subject,
      body,
      {
        name: '下剋上キャリア 自動通知',
        from: SENDER_EMAIL
      }
    );
  });
  
  console.log('管理者への通知送信完了');
}

// テスト用関数
function testPost() {
  const testData = {
    lastName: 'テスト',
    firstName: '太郎',
    lastNameKana: 'てすと',
    firstNameKana: 'たろう',
    phone: '090-1234-5678',
    email: 'test@example.com',
    gender: '男性',
    age: 30,
    education: '大学卒',
    workLocation: '大阪',
    jobType: '営業',
    startPeriod: 'できるだけ早く',
    employmentStatus: '正社員',
    drivingLicense: 'はい'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  console.log('テスト結果:', result.getContent());
}