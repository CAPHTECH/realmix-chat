# Issue 1: Docker環境とサーバーセットアップ

## 概要

プロジェクトの初期環境として、Dockerを用いてRemixサーバー（HTTPサーバー）とSocket.IOサーバー（リアルタイム通信用バックエンド）のセットアップを行います。  
参加者がハンズオン実施前にすぐに開発環境で作業できるようにします。

## タスクリスト

- [x] Dockerfileの作成と設定
- [x] docker-compose.ymlの作成と設定
- [x] RemixアプリケーションとSocket.IOサーバーの初期設定
- [x] ローカル環境でのビルドと起動確認（例: `docker-compose up --build` の実行）
- [x] 環境変数やポート設定の整備
