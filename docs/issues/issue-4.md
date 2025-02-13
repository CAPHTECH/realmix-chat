# Issue 4: ファイル共有機能の実装（オプションでハンズオン対象）

## 概要

チャットアプリケーションにファイル共有機能を追加し、ユーザーが画像やドキュメントなどのファイルを送受信できるようにします。
Socket.IOを利用してファイルデータを送信し、画像の場合はプレビュー表示も実装します。

## タスクリスト

- [ ] Docker環境の準備
  - [ ] ファイル保存用のボリュームの追加
  - [ ] コンテナ間でのファイル共有設定
  - [ ] ファイルサイズ制限の環境変数設定

- [ ] ファイルアップロード機能の実装
  - [ ] ファイル選択UIの追加
  - [ ] ドラッグ&ドロップによるアップロード対応
  - [ ] 基本的なファイルサイズと形式の制限
  - [ ] アップロード進捗表示の実装

- [ ] サーバーサイドの実装
  - [ ] 共有ボリュームへのファイル保存機能の実装
  - [ ] ファイルメタデータの管理
  - [ ] ファイルダウンロードエンドポイントの実装
  - [ ] メモリ使用量の最適化

- [ ] Socket.IOによるファイル転送
  - [ ] ファイルデータのチャンク分割送信
  - [ ] 転送進捗の表示
  - [ ] 基本的なエラーハンドリング

- [ ] メッセージ表示の拡張
  - [ ] ファイルメッセージのUI実装
  - [ ] 画像プレビューの表示
  - [ ] ファイルタイプに応じたアイコン表示
  - [ ] ダウンロードボタンの実装

- [ ] 動作検証
  - [ ] 画像ファイルの送受信テスト
  - [ ] ドキュメントファイルの送受信テスト
  - [ ] 基本的なエラーケースの確認
  - [ ] コンテナ再起動時のファイル永続化確認
