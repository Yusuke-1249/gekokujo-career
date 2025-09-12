# 下剋上キャリア（Gekokujo Career）プロジェクト概要

## プロジェクトの目的
転職支援サービス「下剋上キャリア」のランディングページ（LP）。未経験者向けの転職サポートサービスで、年収アップを目指す求職者をターゲットとしている。

## 技術スタック
- **フレームワーク**: Next.js 15.5.3（App Router使用）
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v3
- **アニメーション**: Framer Motion 12.23.12
- **テスト**: Playwright
- **パッケージマネージャー**: npm

## プロジェクト構造
```
lp_b/
├── app/               # Next.js App Routerのページ
│   ├── page.tsx      # メインページ
│   └── thanks/       # サンクスページ
├── components/       # Reactコンポーネント
│   ├── HeroSection.tsx
│   ├── MultiStepForm.tsx    # 9ステップフォーム（メイン機能）
│   ├── AchievementSection.tsx
│   ├── StrengthSection.tsx
│   ├── ServiceFlowSection.tsx
│   ├── TestimonialSection.tsx
│   ├── FAQSection.tsx
│   ├── DisclaimerSection.tsx
│   ├── Footer.tsx
│   └── FixedCTA.tsx
├── public/images/    # 画像アセット
│   ├── mascot.png   # マスコット（炎の目）
│   ├── mascot-normal.png # マスコット（通常の笑顔）
│   ├── mascot-cry.png    # マスコット（泣き顔）
│   └── mascot-happy.png  # マスコット（大喜び）
└── tests/           # E2Eテスト
```

## 主要機能
1. **9ステップフォーム**: 求職者情報を段階的に収集
2. **マスコット表情切り替え**: フォームの状態に応じて表情が変化
3. **レスポンシブデザイン**: モバイルファースト（max-w-md）
4. **スムーズアニメーション**: Framer Motionによる滑らかな遷移

## デプロイ情報
- **GitHubリポジトリ**: https://github.com/Yusuke-1249/gekokujo-career
- **予定URL**: https://gekokujo-career.vercel.app