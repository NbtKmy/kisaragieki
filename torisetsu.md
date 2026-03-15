# presentation.md デザイン取説

## スライドの種類

スライドの先頭に `<!-- _class: クラス名 -->` を書くと、そのスライドだけレイアウトが変わる。

### 通常スライド（クラスなし）

```markdown
---

## 見出し

本文テキスト。`**太字**` は赤、`*斜体*` は青灰色になる。

---
```

### タイトルスライド `title`

中央揃え、背景が暗い放射状グラデーション、見出しに赤いグロー。

```markdown
---
<!-- _class: title -->

# メインタイトル

<div class="subtitle-ja">日本語サブタイトル</div>

## サブタイトル（ラテン文字）

<div class="date-line">補足テキスト &nbsp;·&nbsp; 右側に続く</div>

---
```

### 章区切りスライド `divider`

左寄せ、背景が暗い赤みのグラデーション。大きな章番号を右下に置ける。

```markdown
---
<!-- _class: divider -->

# 章タイトル

<div class="chapter-num">III</div>

*キャプション的な一文*

---
```

### 投稿スライド `post`

背景がさらに暗い。掲示板の投稿を並べるスライド用。

```markdown
---
<!-- _class: post -->

### HH:MM Uhr — 小見出し

<!-- はすみ以外の投稿（グレー） -->
<div class="post-entry">
  <div class="meta">No.99 &nbsp;/&nbsp; 04/01/08 23:16</div>
  <div class="text-de">ドイツ語テキスト</div>
  <div class="text-ja">日本語原文（省略可）</div>
</div>

<!-- はすみの投稿（琥珀色） -->
<div class="post-entry hasumi">
  <div class="meta">No.101 &nbsp;/&nbsp; はすみ ◆KkRQjKFCDs &nbsp;/&nbsp; 04/01/08 23:18</div>
  <div class="text-de">ドイツ語テキスト</div>
  <div class="text-ja">日本語原文（省略可）</div>
</div>

---
```

## 背景画像

Marp 標準の `bg` 記法を使う。

```markdown
![bg left:45% brightness:0.35 saturate:0.3](assets/kisaragieki_bahnhof.png)
```

| オプション | 効果 |
|---|---|
| `left:45%` | 画像を左側 45% に配置、残りにテキスト |
| `right:50%` | 右側に配置 |
| `brightness:0.35` | 暗くする（0〜1） |
| `saturate:0.3` | 彩度を下げる（0〜1） |
| `sepia:0.5` | セピア調にする（0〜1） |

## テキスト装飾

| 書き方 | 見た目 |
|---|---|
| `**テキスト**` | 赤（強調） |
| `*テキスト*` | 青灰色（注釈的な強調） |
| `> 引用文` | 左に赤ボーダーのブロック引用 |

## フォント

Google Fonts から自動ロード（オフライン時は sans-serif にフォールバック）。

| フォント | 用途 |
|---|---|
| `Cinzel` | 見出し（h1, h2）— 古典的なセリフ体 |
| `Share Tech Mono` | 本文・投稿テキスト — モノスペース |
| `Noto Serif JP` | `.text-ja` クラスの日本語テキスト |

## カラーパレット

| 用途 | カラーコード |
|---|---|
| 背景 | `#08090e` |
| 本文 | `#a8b8c4` |
| 見出し | `#e8dfd0` |
| 赤アクセント（強調・ボーダー） | `#6b1414` / `#c04848` |
| はすみ投稿のボーダー | `#7a5020` |
| 日本語テキスト | `#2e3a48` |
| ミュート（メタ情報など） | `#2e3848` |
