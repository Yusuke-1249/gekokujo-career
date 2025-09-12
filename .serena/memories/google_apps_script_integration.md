# Google Apps Script連携情報

## スプレッドシート情報
- **ID**: `1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g`
- **URL**: https://docs.google.com/spreadsheets/d/1vf1RlD1seUyKhNsOAYLuaKhp43mL7QYXpQBsFn8Xv6g/edit

## データマッピング
| 列 | 項目 | フォームデータ | 変換処理 |
|---|---|---|---|
| A | 日付 | 自動生成 | new Date().toLocaleDateString('ja-JP') |
| B | 時刻 | 自動生成 | new Date().toLocaleTimeString('ja-JP') |
| C | 氏名(漢字) | lastName + firstName | スペース区切り |
| D | 氏名(カナ) | lastNameKana + firstNameKana | **ひらがな→カタカナ変換** |
| E | 電話番号 | phone | そのまま |
| F | メールアドレス | email | そのまま |
| G | 性別 | gender | そのまま |
| H | 年齢 | age | そのまま |
| I | 最終学歴 | education | そのまま |
| J | 勤務地 | workLocation | そのまま |
| K | 職種 | jobType | そのまま |
| L | 開始 | startPeriod | そのまま |
| M | 現在の形態 | employmentStatus | そのまま |
| N | 免許 | drivingLicense | そのまま |

## メール設定
### 送信元
- office.ota@apoial.com（Gmail）

### 通知先（管理者）
1. office.ota@apoial.com
2. office.yamamoto@apoial.com
3. office.yanagi@apoial.com

## 実装ステータス
- [ ] Google Apps Script作成
- [ ] Webアプリとしてデプロイ
- [ ] CORS設定
- [ ] 環境変数設定（.env.local）
- [ ] Next.js側の送信処理実装
- [ ] メールテンプレート作成
- [ ] テスト送信確認

## ひらがな→カタカナ変換関数
```javascript
function hiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}
```