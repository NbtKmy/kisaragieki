---
marp: true
theme: default
header: "Der Schrecken hinter dem Bildschirm — Kisaragi-eki (きさらぎ駅)"
paginate: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Share+Tech+Mono&family=Cinzel:wght@400;700&display=swap');

/* ── Basis ─────────────────────────────────────────────── */
section {
  background-color: #08090e;
  color: #a8b8c4;
  font-family: 'Share Tech Mono', 'Courier New', monospace;
  padding: 60px 80px;
  position: relative;
  overflow: hidden;
}

/* Scanline-Overlay */
section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.10) 3px,
    rgba(0, 0, 0, 0.10) 4px
  );
  pointer-events: none;
  z-index: 100;
}

/* Seitenzahl */
section::after {
  color: #2a2e3a;
  font-size: 0.65em;
  font-family: 'Share Tech Mono', monospace;
}

/* ── Typografie ─────────────────────────────────────────── */
h1 {
  font-family: 'Cinzel', serif;
  color: #e8dfd0;
  font-size: 2.2em;
  border-bottom: 1px solid #6b1414;
  padding-bottom: 0.35em;
  margin-bottom: 0.6em;
  text-shadow:
    0 0 30px rgba(180, 50, 50, 0.45),
    0 0 60px rgba(140, 30, 30, 0.2);
  letter-spacing: 0.06em;
}

h2 {
  font-family: 'Cinzel', serif;
  color: #c0b8aa;
  font-size: 1.35em;
  letter-spacing: 0.1em;
  margin-bottom: 0.8em;
}

h3 {
  color: #7a9090;
  font-size: 1em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

p {
  line-height: 1.8;
  font-size: 0.92em;
}

strong {
  color: #c04848;
  font-weight: normal;
}

em {
  color: #7a9aa8;
  font-style: normal;
  letter-spacing: 0.05em;
}

/* ── Header ─────────────────────────────────────────────── */
header {
  color: #282e3a;
  font-size: 0.6em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-bottom: 1px solid #161820;
  padding-bottom: 4px;
}

/* ── Zitate / Posts ─────────────────────────────────────── */
blockquote {
  border-left: 3px solid #3a3e50;
  background: rgba(255, 255, 255, 0.025);
  margin: 0.6em 0;
  padding: 0.7em 1.2em;
  color: #7a8898;
  font-size: 0.88em;
  line-height: 1.7;
}

blockquote p { margin: 0; }

blockquote strong {
  color: #c89040;
}

/* ── Tabellen ────────────────────────────────────────────── */
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.85em;
}
th {
  background: #12141a;
  color: #7a9090;
  border: 1px solid #1e2230;
  padding: 8px 14px;
  letter-spacing: 0.08em;
}
td {
  border: 1px solid #1a1c28;
  padding: 7px 14px;
  color: #8898a8;
}
tr:nth-child(even) td { background: rgba(255,255,255,0.02); }

/* ── Listen ─────────────────────────────────────────────── */
ul, ol {
  font-size: 0.9em;
  line-height: 2;
  padding-left: 1.5em;
}
li::marker { color: #6b1414; }

/* ══════════════════════════════════════════════════════════
   TITELFOLIE
══════════════════════════════════════════════════════════ */
section.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  background:
    radial-gradient(ellipse at 50% 60%, #150a0a 0%, #050508 70%);
}

section.title::after { display: none; }
section.title header { display: none; }

section.title h1 {
  font-size: 3.4em;
  border: none;
  color: #f0e8d8;
  text-shadow:
    0 0 40px rgba(220, 80, 80, 0.55),
    0 0 100px rgba(160, 40, 40, 0.3),
    0 0 200px rgba(120, 20, 20, 0.15);
  letter-spacing: 0.08em;
  margin-bottom: 0.2em;
}

section.title .subtitle-ja {
  font-family: 'Noto Serif JP', serif;
  color: #4a5a6a;
  font-size: 1.1em;
  letter-spacing: 0.4em;
  margin-bottom: 1.6em;
}

section.title h2 {
  color: #50606e;
  font-size: 0.9em;
  letter-spacing: 0.25em;
  font-family: 'Share Tech Mono', monospace;
  border: none;
}

section.title .date-line {
  color: #2a3040;
  font-size: 0.75em;
  letter-spacing: 0.3em;
  margin-top: 0.8em;
}

/* ══════════════════════════════════════════════════════════
   ABSCHNITT-TRENNFOLIE
══════════════════════════════════════════════════════════ */
section.divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background:
    linear-gradient(135deg, #0d0508 0%, #08090e 60%);
}

section.divider h1 {
  font-size: 2.8em;
  color: #f0e8d8;
  border-color: #6b1414;
}

section.divider .chapter-num {
  color: #3a1010;
  font-size: 5em;
  font-family: 'Cinzel', serif;
  position: absolute;
  right: 60px;
  bottom: 40px;
  opacity: 0.4;
  letter-spacing: -0.05em;
}

/* ══════════════════════════════════════════════════════════
   POST-FOLIE
══════════════════════════════════════════════════════════ */
section.post {
  background: #06070c;
}

.post-entry {
  border-left: 3px solid #1e2230;
  margin: 0.4em 0;
  padding: 0.6em 1.2em;
  background: rgba(255,255,255,0.018);
  font-size: 0.88em;
  line-height: 1.75;
}

.post-entry.hasumi {
  border-left-color: #7a5020;
  background: rgba(120, 80, 20, 0.06);
}

.post-entry .meta {
  color: #2e3848;
  font-size: 0.78em;
  letter-spacing: 0.1em;
  margin-bottom: 0.3em;
}

.post-entry.hasumi .meta {
  color: #6a4820;
}

.post-entry .text-de {
  color: #90a0ac;
}

.post-entry.hasumi .text-de {
  color: #c8b890;
}

.post-entry .text-ja {
  color: #2e3a48;
  font-family: 'Noto Serif JP', serif;
  font-size: 0.82em;
  margin-top: 0.2em;
}

/* ══════════════════════════════════════════════════════════
   BILD-FOLIE
══════════════════════════════════════════════════════════ */
section.image-slide {
  padding: 0;
  display: flex;
  align-items: stretch;
}

section.image-slide .image-half {
  flex: 1;
  background-size: cover;
  background-position: center;
  filter: brightness(0.45) saturate(0.4) sepia(0.3);
}

section.image-slide .text-half {
  flex: 1;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<!-- ══════════════════════════════════════════════════════
     FOLIE 1 — TITEL
══════════════════════════════════════════════════════════ -->
<!-- _class: title -->

# Kisaragi-eki

<div class="subtitle-ja">きさらぎ駅</div>

## Japanische Internet-Horror-Folklore

<div class="date-line">04/01/09 &nbsp;·&nbsp; 2ch.net &nbsp;·&nbsp; Jetzt auf Deutsch</div>

---

<!-- ══════════════════════════════════════════════════════
     FOLIE 2 — KONTEXT
══════════════════════════════════════════════════════════ -->

## Was ist *Netto Kaidan*?

**Netto Kaidan** (ネット怪談) — Internet-Horrorgeschichten, die auf japanischen Imageboards entstanden sind.

| Merkmal | Beschreibung |
|---|---|
| Medium | Anonyme Foren (2ch, etc.) |
| Format | Livebericht, Screenshot-Threads |
| Besonderheit | Mehrstimmig — Poster reagieren in Echtzeit |
| Wirkung | Grenze zwischen Fiktion und Realität verschwimmt |

> Bekannte Beispiele: *Toire no Hanako*, *Hitori Kakurenbo*, **Kisaragi-eki**

---

<!-- ══════════════════════════════════════════════════════
     FOLIE 3 — HINTERGRUND
══════════════════════════════════════════════════════════ -->
<!-- _class: divider -->

# Nacht des 8. Januar 2004

<div class="chapter-num">I</div>

Thread: 「身の回りで変なことが起こったら実況するスレ 26」
*„Live-Bericht-Thread, wenn seltsame Dinge passieren, Teil 26"*

---

<!-- ══════════════════════════════════════════════════════
     FOLIE 4 — ERSTE POSTS
══════════════════════════════════════════════════════════ -->
<!-- _class: post -->

### 23:14 Uhr — Die Nachricht beginnt

<div class="post-entry hasumi">
  <div class="meta">No.98 &nbsp;/&nbsp; はすみ &nbsp;/&nbsp; 04/01/08 23:14</div>
  <div class="text-de">„Es mag Einbildung sein, aber darf ich etwas fragen?"</div>
  <div class="text-ja">気のせいかも知れませんがよろしいですか？</div>
</div>

<div class="post-entry">
  <div class="meta">No.99 &nbsp;/&nbsp; 04/01/08 23:16</div>
  <div class="text-de">„Nur zu."</div>
</div>

<div class="post-entry hasumi">
  <div class="meta">No.101 &nbsp;/&nbsp; はすみ &nbsp;/&nbsp; 04/01/08 23:18</div>
  <div class="text-de">„Ich bin in einer Privatbahn, aber es ist seltsam."</div>
  <div class="text-ja">先程から某私鉄に乗車しているのですが、様子がおかしいのです。</div>
</div>

<div class="post-entry hasumi">
  <div class="meta">No.107 &nbsp;/&nbsp; はすみ &nbsp;/&nbsp; 04/01/08 23:23</div>
  <div class="text-de">„Der Zug hält seit 20 Minuten nicht. Normalerweise alle 5–8 Minuten. Fünf andere Fahrgäste schlafen."</div>
</div>

---

<!-- ══════════════════════════════════════════════════════
     FOLIE 5 — DER BAHNHOF ERSCHEINT
══════════════════════════════════════════════════════════ -->
<!-- _class: divider -->

# »Kisaragi«

<div class="chapter-num">II</div>

*Ein Bahnhof, den es nicht geben sollte.*

