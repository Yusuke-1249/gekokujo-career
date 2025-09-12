# 推奨コマンド一覧

## 開発コマンド
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プロダクションサーバー起動
npm start

# E2Eテスト実行
npm run test:e2e

# E2EテストUI表示
npm run test:e2e:ui
```

## Git関連コマンド
```bash
# ステータス確認
git status

# 変更をステージング
git add .

# コミット
git commit -m "コミットメッセージ"

# プッシュ
git push

# プル
git pull
```

## ファイル操作（macOS/Darwin）
```bash
# ディレクトリ一覧
ls -la

# ファイル検索
find . -name "*.tsx"

# ファイル内容検索（ripgrep推奨）
rg "検索文字列"

# ディレクトリ移動
cd ディレクトリ名

# ファイル内容表示
cat ファイル名
```

## Next.js関連
```bash
# 型チェック
npx tsc --noEmit

# キャッシュクリア後ビルド
rm -rf .next && npm run build

# 依存関係インストール
npm install

# 依存関係の更新確認
npm outdated
```

## デバッグ・トラブルシューティング
```bash
# Next.jsキャッシュクリア
rm -rf .next

# node_modules再インストール
rm -rf node_modules package-lock.json && npm install

# ポート確認（3000番ポート使用中の場合）
lsof -i :3000

# プロセス終了
kill -9 [PID]
```