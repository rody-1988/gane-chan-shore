# ガネーちゃんのおみくじ — 使い方ガイド（初心者向け）

このフォルダは、**HTML・CSS・JavaScript** だけで動くシンプルなおみくじページです。  
ブラウザで開いて表示し、コードを編集して内容やデザインを変えられます。

---

## 1. フォルダの中身（全体の流れ）

src/scss/
├── foundation/
│   ├── _variables.scss  (色・フォント・サイズ変数)
│   ├── _reset.scss      (ブラウザ差異を消す)
│   └── _base.scss       (body, 共通レイアウト)
├── components/
│   ├── _glass.scss      (グラスモーフィズム共通設定)
│   ├── _buttons.scss    (共通ボタン)
│   └── _animations.scss (浮遊アニメーション等)
├── layouts/
│   ├── _header.scss     (ヘッダー)
│   ├── _footer.scss     (フッター)
│   └── _section.scss    (共通の余白設定など)
├── pages/
│   └── _omikuji-hero.scss (今回のおみくじメイン部分)
└── main.scss            (これら全てを @use で読み込む)

**大まかな流れ**

1. `scss/` のファイルを編集する  
2. **Live Sass Compiler** が `scss/main.scss` から `css/style.css` を自動更新する（設定済みなら）  
3. ブラウザでページを開き直す（またはリロード）して確認する  

おみくじの**文言**を変えるときは **`js/main.js`** を編集します。

---

## 2. ページを表示する（確認の方法）

1. **Cursor / VS Code** でこのフォルダを開く  
2. `index.html` を右クリック → **「Open with Live Server」**（拡張機能を入れている場合）  
   - または **Go Live** ボタンで同様にローカルサーバーが立ち上がります  
3. ブラウザにページが表示されます  

> **注意:** `index.html` をダブルクリックだけで開く（`file://`）でも動きますが、**JavaScript** を厳しく制限する環境では、拡張のサーバー経由の方が安全です。

---

## 3. Live Sass Compiler と SCSS の関係

このプロジェクトでは **SCSS（Sass）** でスタイルを書き、**CSS** に変換してブラウザに渡します。

- **編集するのは** `scss/` 内のファイル（特に `main.scss` や `_variables.scss` など）  
- **直接編集しない方がよい**（自動生成されるため）: `css/style.css` は Live Sass Compiler が上書きします  

### 拡張の出力先（例）

次のように合わせると、`index.html` の `<link href="css/style.css">` と一致します。

- **入力（エントリ）:** `scss/main.scss`  
- **出力:** `css/style.css`  

設定は VS Code の拡張の説明に従い、**「Save でコンパイル」** などをオンにすると保存のたびに自動で反映されます。

---

## 4. おみくじのメッセージを追加する

編集するファイル: **`js/main.js`**

### 4.1 `FORTUNES` に1件足す

ファイルの先頭付近にある **`FORTUNES`** という配列の中に、次の形のオブジェクトを1つ追加します。

```json
{
  "title": "大吉",
  "message": "ここに今日のメッセージを書く。絵文字もOK。☕️",
  "weight": 5
}
```

| 項目 | 意味 |
|------|------|
| `title` | 表示する運勢名（「大吉」「中吉」など） |
| `message` | 本文。長いときは `"..."` を複数行に分けてもよいです |
| `weight` | **出やすさ**の重み。数字が大きいほど選ばれやすい（同じ数字のときは出る確率が同じイメージ） |

**例:** 最後の `}` の直前にカンマを付けて、新しい `{ ... }` を足します。

```text
    },
    {
      title: "吉",
      message: "新しく追加したメッセージ。🌿",
      weight: 5,
    },
  ];
```

- カンマの位置に注意（**直前の項目の後ろにカンマ**、最後の項目の後ろは配列の `]` まで）  
- 文字列は**必ず** `"` または `'` で囲む  

### 4.2 「大吉」のときだけ光の色を変えたいとき

`main.js` の末尾付近に、次のような1行があります。

```javascript
picked.title === "大吉" ? "#ffd194" : "#e2d1c3"
```

- `title` が **`"大吉"`** のときだけ、カードの背景の光が `#ffd194` になります  
- 別の運勢名でも色を分けたい場合は、この行を **条件を増やす** などして書き換えます（少し JavaScript の知識が必要です）

---

## 5. セクション（ブロック）を増やす

「ヘッダーとメインの間に説明文を足したい」などは、**HTML にブロックを追加**し、**SCSS で見た目を足す**流れになります。

### 5.1 HTML（`index.html`）

例: `<header>` の直後に、説明用の `<section>` を追加する。

```html
      <header class="page__header">
        ...
      </header>

      <section class="intro" aria-label="説明">
        <p class="intro__text">ここに説明文を書きます。</p>
      </section>

      <main class="main">
```

- `class` は**自分で決めた名前**でよいです（英数字と `-` が無難）  
- このプロジェクトでは、ブロック名は `intro`、中身は `intro__text` のように **`ブロック__要素`** という名前にしています（BEM に近い付け方）  

### 5.2 スタイル（SCSS）

新しいファイルを作らずに済むなら、**`scss/_base.scss`** か **`scss/_components.scss`** の末尾に追加してもよいです。

ファイルを分けたい場合の例:

1. `scss/_intro.scss` を新規作成  
2. `scss/main.scss` に次の1行を追加（他の `@use` と同じように）  

```scss
@use "intro";
```

3. `_intro.scss` の中に例を書く  

```scss
.intro {
  margin-bottom: 3rem;
  text-align: center;
}

.intro__text {
  margin: 0;
  font-size: 0.875rem;
  color: #78716c;
}
```

4. 保存して Live Sass が `css/style.css` を更新したら、ブラウザで確認  

---

## 6. Sass（SCSS）の書き方 — このプロジェクトで使っていること

### 6.1 ファイルは `_` で始まる「部品」＋ `main.scss` でまとめる

- **`_variables.scss`** … 色やグラデーションなどの**変数**をまとめる  
- **`_animations.scss`** … アニメーション（`@keyframes`）  
- **`_base.scss`** … 全体のレイアウト・ヘッダー・フッターなど  
- **`_components.scss`** … カードやボタンなどの部品  
- **`main.scss`** … 上記を `@use` で読み込むだけのファイル  

`_` で始まるファイルは「部品」として扱い、**直接はコンパイルせず**、`main.scss` から読み込む想定です。

### 6.2 変数（`$`）

`_variables.scss` では、例えば次のように書きます。

```scss
$color-gane-dark: #4a423f;
```

- 他のファイルで **`@use "variables" as *;`** と書くと、`$color-gane-dark` のように使えます。

### 6.3 入れ子（ネスト）

`.btn-draw` の中に `&:hover` と書くと、**ホバー時**のスタイルをまとめられます。

```scss
.btn-draw {
  ...

  &:hover {
    transform: scale(1.05);
  }
}
```

### 6.4 `@use` でファイルを読む（このプロジェクトのやり方）

`main.scss` は次のようになっています。

```scss
@use "animations";
@use "base";
@use "components";
```

- ファイル名は **`_` を除いた名前**（`animations` → `_animations.scss`）  
- パーシャルで変数を使うファイルでは、先頭に ` @use "variables" as *;` を書いています  

---

## 7. 困ったときのチェックリスト

| 症状 | 確認すること |
|------|----------------|
| スタイルが変わらない | `scss` を保存したか？ Live Sass が `css/style.css` を更新しているか？ |
| おみくじが増えない | `js/main.js` の `FORTUNES` のカンマ・`{` `}` の対応が正しいか？ |
| ページが真っ白に近い | `index.html` の CSS のパスが `css/style.css` になっているか？ |
| ボタンで何も起きない | `js/main.js` の `id`（`draw-btn` など）と HTML の `id` が一致しているか？ |
| **Go Live では見えるのに GitHub Pages だけおかしい** | 下の「## 8. GitHub Pages」に沿って確認 |

---

## 8. GitHub Pages で CSS が効かないとき

GitHub 上のサイトだけスタイルが当たらない場合、次を順に見てください。

### 8.1 `css/style.css` を Git に含めているか

GitHub は **SCSS を CSS に変換しません。** 公開されるのは **リポジトリに push されたファイルだけ**です。

1. PC で Live Sass Compiler を動かして `css/style.css` が生成されているか確認  
2. その **`css/style.css` をコミットして push** しているか確認（GitHub のウェブで `css/style.css` が見える状態にする）

`scss/` だけ push して `css/` が無いと、本番では CSS が読めず「素の HTML」に見えます。

### 8.2 `.nojekyll` について

リポジトリのルートに **`.nojekyll`**（中身が空でよいファイル）を置いてあります。  
これで GitHub Pages 側の **Jekyll 処理がオフ**になり、`css/` や `js/` がそのまま静的ファイルとして配信されやすくなります。

### 8.3 Pages の「どのフォルダを公開するか」

リポジトリの **Settings → Pages → Build and deployment** で、**ブランチとフォルダ**（例: **`/ (root)`** か **`/docs`**）を選びます。

- **`/ (root)`** にしているなら、**リポジトリの一番上**に `index.html` と `css/`・`js/` がある必要があります  
- **`/docs`** にしているなら、**`docs/` の中**に `index.html` と `css/`・`js/` を置く必要があります（ルートだけだと Pages には出ません）

### 8.4 プロジェクトサイトの URL とパス

通常、リポジトリ名が `my-site` なら公開 URL は次の形です。

`https://（ユーザー名）.github.io/my-site/`

`index.html` では `css/style.css` のように **相対パス**にしているので、**ページの URL が `.../my-site/` で終わっている**と、CSS は `.../my-site/css/style.css` を読みに行きます。

ブラウザで **F12 → ネットワーク（Network）** を開き、**`style.css` が 404 になっていないか**見てください。

- **`https://ユーザー名.github.io/css/style.css`** のように **`リポジトリ名が抜けている**URLを読んでいたら**、どこかでベース URL がずれています。アドレスバーの URL を **`.../リポジトリ名/`**（末尾スラッシュ付き）で開き直して試してください。

### 8.5 大文字・小文字

GitHub のサーバー（Linux）は **フォルダ名の大文字・小文字を区別**します。  
PC（Windows）では `CSS` と `css` が同じ扱いでも、GitHub 上では別のパスになり得ます。  
フォルダは **`css`（小文字）** のままにそろえてください。

---

## 9. ライセンス・クレジット

このプロジェクトの利用・改変は自由です。フッターの表示は必要に応じて `index.html` で変更してください。
