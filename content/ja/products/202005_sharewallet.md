---
category: '作ったもの'
title: 'ShareWallet'
position: 99
---

![](/images/products/202005_sharewallet/index.jpg)

友人と金銭の貸し借りの記録をつけられるWebアプリを作成しました。複数人数での使用に対応しており、スマホからの操作も簡単に行えます。

ソースコード: https://github.com/ozelotjp/ShareWallet

## 作ったもの

友達と食べ物を買ってきてもらう／買ってくるときに、毎回財布をポケットから出して現金の受け渡しを行うのが煩わしいと感じていました。
それに毎回小銭を用意しなければならないし、すでに支払った／受け取ったかどうかが分からなくなることがあったため、記録できるものが必要でした。

そこで、金銭の貸し借りを記録するために「ShareWallet」というWebアプリを作りました。
これはマテリアルデザインを用いてスマホからの操作も簡単に行うことができ、
管理者／読み書き／閲覧のみの権限をユーザごとに付与してアクセス管理も行うことができます。

## 技術的な話

下記の技術を使用しました。

### フロントエンド

- HTML, CSS, JavaScript, TypeScript
- Vue.js, Nuxt.js, Firebase, Vuetify

今回はTypeScriptを用いて開発することに挑戦をしました。Nuxt.jsをTypeScriptにするにはいくつか方法があるのですが、
今回はVue 3からの導入が予定されているComposition APIを採用しました。

このComposition APIは執筆時点（６月４日）でもv0.5.0なせいかドキュメントがあまり整備されておらず、
どのようにコーディングしたら良いかの試行錯誤が多かったため、製作期間が想像以上に長引いてしまいました。

特にref/emitをComposition APIを用いて使う方法が分からず、
最初は１つのファイルに複数のロジックを集約していたため見通しの悪いファイルになってしまいました。
現在は [検証用レポジトリ](https://github.com/ozelotjp/RefEmitWithCompositionAPI) で使い方を学習したので、
ダイアログなどもコンポーネントに分離することができたので見やすいソースコードになっていると思います。

### 開発環境

- Docker, VSCode (Remote Development), Git, GitHub

今までもバージョン管理にGitを使っていたのですが、コミットメッセージはいつも適当に済ませていました。
今回はcommitizenを用いて分かりやすいコミットログになったと思います。

## 結果・感想

完成して終わりではなく今後もこのWebアプリを改善していきたいと思っています。
実際に使っている友達にフィードバックをしてもらおうと考えています。
