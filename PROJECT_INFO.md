# 下剋上キャリア プロジェクト情報

## プロジェクト概要
- **サービス名**: 下剋上キャリア
- **URL**: https://gekokujo-career.vercel.app (予定)
- **GitHubリポジトリ**: https://github.com/Yusuke-1249/gekokujo-career
- **開発環境**: Next.js 15.5.3 + TypeScript + Tailwind CSS v3

## Google Apps Script連携情報

### スプレッドシート設定
- **スプレッドシートID**: `1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g`
- **スプレッドシートURL**: `https://docs.google.com/spreadsheets/d/1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g/edit`

### データマッピング詳細
フォームのデータを以下のようにスプレッドシートに記録する：

| 列 | 項目 | フォームデータ | 備考 |
|---|---|---|---|
| A | 日付 | `new Date().toLocaleDateString('ja-JP')` | 自動生成 |
| B | 時刻 | `new Date().toLocaleTimeString('ja-JP')` | 自動生成 |
| C | 氏名(漢字) | `${formData.lastName} ${formData.firstName}` | スペース区切り |
| D | 氏名(カナ) | `${formData.lastNameKana} ${formData.firstNameKana}` | **ひらがな→カタカナ変換必要** |
| E | 電話番号 | `formData.phone` | そのまま |
| F | メールアドレス | `formData.email` | そのまま |
| G | 性別 | `formData.gender` | "男性" or "女性" |
| H | 年齢 | `formData.age` | 数値 |
| I | 最終学歴 | `formData.education` | 選択肢から |
| J | 勤務地 | `formData.workLocation` | "大阪", "愛知", "東京", "千葉", "神奈川" |
| K | 職種 | `formData.jobType` | 選択肢から |
| L | 開始 | `formData.startPeriod` | "できるだけ早く", "1〜2ヶ月先", "3ヶ月以上先", "未定" |
| M | 現在の形態 | `formData.employmentStatus` | "正社員", "契約社員", "派遣社員", "パート・アルバイト", "無職", "学生" |
| N | 免許 | `formData.drivingLicense` | "はい" or "いいえ" |

### メール設定

#### 送信元アドレス
- **Gmail**: `office.ota@apoial.com`

#### 通知先アドレス（管理者）
1. `office.ota@apoial.com`
2. `office.yamamoto@apoial.com`
3. `office.yanagi@apoial.com`

#### メールテンプレート（決定版）

**応募者向け自動返信メール**
```
件名: 【下剋上キャリア】ご登録ありがとうございます✨

{lastName} {firstName}様

この度は下剋上キャリアにご登録いただき、
誠にありがとうございます！

お送りいただいた情報を確認の上、
数時間以内に担当よりご連絡いたします📞

【ご登録内容】
📍 希望勤務地：{workLocation}
💼 希望職種：{jobType}

あなたの「下剋上」を全力でサポートさせていただきます！
今しばらくお待ちください😊

──────────
下剋上キャリア
office.ota@apoial.com
──────────
```

**管理者向け通知メール**
```
件名: 🆕【新規応募】{lastName}様 - {workLocation}/{jobType}

新規応募がありました！

👤 基本情報
{lastName} {firstName}（{lastNameKana} {firstNameKana}）
{age}歳 / {gender}

📱 連絡先
電話：{phone}
メール：{email}

🎯 希望条件
勤務地：{workLocation}
職種：{jobType}
開始：{startPeriod}

📋 その他
現在：{employmentStatus}
学歴：{education}
免許：{drivingLicense}

⏰ 登録日時：{date} {time}

📊 スプレッドシート：
https://docs.google.com/spreadsheets/d/1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g/edit
```

## Google Apps Script実装計画

### 1. GASファイル構成
```javascript
// Code.gs - メインファイル
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // スプレッドシートに記録
    saveToSheet(data);
    
    // メール送信
    sendEmails(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ひらがな→カタカナ変換
function hiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}
```

### 2. Next.js側の実装
- `components/MultiStepForm.tsx`の`handleSubmit`関数を修正
- 環境変数`.env.local`にGAS_URLを設定
- Vercelにも同じ環境変数を設定

## 現在の実装状況

### ✅ 完了済み
1. プロジェクト基本構成
2. 9ステップフォーム（Framer Motion使用）
3. マスコット表情切り替え機能
4. レスポンシブデザイン（モバイルファースト）
5. 「簡単30秒！無料相談」ボタン化（クリックでフォームにフォーカス）
6. GitHubリポジトリ作成・プッシュ

### 🔄 未実装
1. Google Apps Script作成・デプロイ
2. フォームデータ送信処理
3. メール自動送信機能
4. エラーハンドリング
5. 送信成功/失敗のフィードバック

## 重要な注意点
- 学生を選択した場合はフォーム送信をブロック（既に実装済み）
- ひらがなで入力されるカナをカタカナに変換する必要がある
- 全てのメールアドレスはGmail（Google Workspace）

## デプロイ情報
- **Vercel**: まだデプロイしていない
- **ドメイン**: 未設定（gekokujo-career.vercel.appを使用予定）

## 次回の作業
1. Google Apps Scriptの作成とデプロイ
2. 環境変数の設定
3. フォーム送信処理の実装
4. テスト送信と動作確認
5. Vercelへのデプロイ