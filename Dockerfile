# ベースイメージ：軽量な Node.js (alpine版)
FROM node:18-alpine

# 作業ディレクトリの設定
WORKDIR /app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package.json package-lock.json ./
RUN npm ci

# アプリケーションコード全体をコピー
COPY . .

# Remixアプリケーションのビルド
RUN npm run build

# 必要なポート（Remix:3000, Socket.IO:4000）の公開
EXPOSE 3000 4000

# デフォルトのコマンド（docker-compose.yml で上書きされる前提）
CMD ["npm", "run", "start"]
