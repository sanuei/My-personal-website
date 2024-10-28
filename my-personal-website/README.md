# 个人ポートフォリオウェブサイト

## 目次
1. [プロジェクト概要](#プロジェクト概要)
2. [機能一覧](#機能一覧)
3. [技術スタック](#技術スタック)
4. [プロジェクト構造](#プロジェクト構造)
5. [セットアップ手順](#セットアップ手順)
6. [開発ガイドライン](#開発ガイドライン)
7. [デプロイ方法](#デプロイ方法)
8. [今後の開発予定](#今後の開発予定)

## プロジェクト概要
React を使用して作成された個人ポートフォリオウェブサイトです。シンプルでモダンなデザインを採用し、レスポンシブ対応により様々なデバイスでの閲覧が可能です。

## 機能一覧
### 1. 履歴書セクション
- 個人情報の表示
- 学歴情報の表示
- 保有資格の一覧
- 自己PRセクション

### 2. プロジェクト経験セクション
- プロジェクト名と期間
- 使用技術スタック
- 役割と責任
- プロジェクト概要の説明

### 3. 職務経歴セクション
- 会社名と在籍期間
- 職位と担当業務
- 主な成果と実績

### 4. GitHubプロジェクト連携
- GitHub APIを使用したプロジェクト一覧表示
- プロジェクト詳細情報の表示
- ページネーション機能
- プロジェクトへの直接リンク

### 5. お問い合わせフォーム
- 入力フォーム（名前、メール、メッセージ）
- メール送信機能

### 6. SNS連携
- 各種SNSへのリンク
- アイコン表示

## 技術スタック
### フロントエンド
- React 18.2.0
- JavaScript (ES6+)
- CSS3/HTML5

### API連携
- GitHub API v3
- RESTful API

### 開発環境
- Visual Studio Code
- Git/GitHub
- npm

## プロジェクト構造
```
src/
├── components/           # コンポーネントファイル
│   ├── Contact/         # お問い合わせ関連
│   ├── GitHub/          # GitHub連携関連
│   ├── Header/          # ヘッダー関連
│   ├── Resume/          # 履歴書関連
│   └── Shared/          # 共通コンポーネント
├── styles/              # スタイルファイル
├── utils/               # ユーティリティ関数
└── App.js               # メインコンポーネント
```

## セットアップ手順
1. **環境要件**
   - Node.js (v14.0.0以上)
   - npm (v6.0.0以上)

2. **インストール手順**
   ```bash
   # リポジトリのクローン
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website

   # パッケージのインストール
   npm install

   # 開発サーバーの起動
   npm start
   ```

## 開発ガイドライン
### コーディング規約
- コンポーネントは機能単位で分割
- CSS Modulesでスタイリング
- 適切なコメント記述
- エラーハンドリングの実装

### Git運用ルール
- 機能追加は feature/ ブランチで開発
- コミットメッセージは日本語で具体的に
- プルリクエストは必ずレビューを受ける

## デプロイ方法
```bash
# 本番ビルド
npm run build

# GitHub Pagesへデプロイ
npm run deploy
```

## 今後の開発予定
- [ ] 多言語対応（日本語/英語）
- [ ] ダークモード実装
- [ ] パフォーマンス最適化
- [ ] アクセシビリティ対応
- [ ] PWA対応

## ライセンス
MIT License

## 作者
Sonic_yann

## お問い合わせ
問題報告や提案は Issues、または お問い合わせフォーム からお願いします。