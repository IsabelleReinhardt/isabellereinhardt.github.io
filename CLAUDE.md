# Portfolio-Website – Projekt-Briefing (Isabelle Reinhardt)

> Diese Datei liegt im Projekt-Hauptordner und dient als Kontext für Claude Code.
> Sie hält alle Entscheidungen fest, die wir gemeinsam getroffen haben. Bitte
> beim Weiterarbeiten befolgen.

## Ziel

Persönliches **Portfolio für Bewerbungen auf ein Praxissemester** im Bereich
Mediendesign / Design / digitale Gestaltung. Es soll modern, individuell und
visuell stark sein – **kein generisches Entwickler-Template**. Langfristiges
Projekt: Es soll über das Semester **mitwachsen** (neue Projekte kommen laufend
dazu, u. a. Grafikdesign ab Oktober).

## Tech-Stack & Rahmenbedingungen

- **Astro** + HTML + CSS, **JavaScript nur wo wirklich nötig**.
- **Keine zusätzlichen Frameworks/Libraries** ohne klaren Vorteil. Falls eine
  Library (z. B. GSAP) sinnvoll erscheint: **erst vorschlagen und begründen**,
  nicht einfach einbauen.
- **Hosting: GitHub Pages** (kostenlos, Deploy über GitHub Actions). Astro-Config,
  `base`/`site`-Pfade und Assets müssen dafür korrekt sein.
- Editor: VS Code. Versionsverwaltung: Git/GitHub.
- Eine leere Seite wurde bereits aufgesetzt und via GitHub Pages veröffentlicht
  (Phase 1). Jetzt: Phase 2/3 – Gestaltung & Aufbau.

## Arbeitsweise (wichtig!)

Isabelle will das Projekt **selbst verstehen und aufbauen**. Also:

1. Nicht sofort eine komplette fertige Website oder riesige Code-Mengen liefern.
2. **Schritt für Schritt** arbeiten, jede Entscheidung kurz begründen.
3. Immer nur die Dateien/Codeabschnitte für den **aktuellen Schritt** erstellen.
4. Genau sagen, **welche Datei** angelegt oder geändert wird.
5. **Bestehenden Code zuerst ansehen**, bevor Änderungen vorgeschlagen werden.
6. Kein unnötiger Code, keine unnötige Komplexität.
7. Bei Fehlern **erst die wahrscheinliche Ursache analysieren**, nicht gleich
   große Teile umschreiben.
8. Nach Code kurz erklären: was er macht, warum er nötig ist, wie er
   zusammenhängt.

## Design-Richtung: „modern & auffällig"

Hoher Kontrast, viel Raum, geometrische Typo. Bold als Akzent, ausbalanciert
durch ruhige Flächen.

### Farben (Design-Tokens – zentrale Stelle, jederzeit änderbar)

| Rolle              | Name    | HEX       |
|--------------------|---------|-----------|
| Grund / Typo       | Schwarz | `#0E0E10` |
| Fläche / Kontrast  | Weiß    | `#FFFFFF` |
| warme Fläche       | Beige   | `#E7D9C9` |
| **Akzent**         | Neon    | `#CBF43C` |

- Neon ist **nur Akzent**, kein Dauerzustand. Große schwarze/beige Flächen geben
  ihm Raum. Neon steht auf Schwarz oder als Fläche mit schwarzem Text – **nie**
  als heller Text auf Beige.
- Beige und Neon stammen aus Isabelles bestehendem Branding; Schwarz/Weiß ist neu
  für den modernen, klaren Auftritt.
- Neon-Ton ist noch feinjustierbar (Alternativen: `#DBFF33` heller, `#AEE617`
  tiefer, `#C6FF57` softer).

### Typografie

- **Geometrische Schrift mit runden i-Punkten** ist ausdrücklich gewünscht.
- Start: **Outfit** (Google Fonts, Display bis Black-Schnitt) für Headlines/Text,
  **Space Mono** für Labels/Meta.
- Alternativen mit rundem Punkt, falls gewünscht: Poppins, Sora, DM Sans.
- **Der runde Punkt ist ein Motiv:** als Neon-Punkt wiederkehrend einsetzen
  (Hover, aktiver Filter, i-Punkt im Logo).

### Logo

- Aktuelles iR-Monogramm soll **moderner & flexibler** werden (Isabelle
  überarbeitet es im Grafik-Kurs). Richtung: **monolinien iR-Monogramm**, dessen
  i-Punkt ein **Neon-Kreis** ist. Eine Strichstärke, skaliert von Favicon bis
  Plakat, als Muster kachelbar.
- **Website logo-agnostisch bauen:** bis das neue Logo fertig ist, trägt ein
  klarer Schrift-Schriftzug die Marke. Nichts soll aufs Logo warten müssen.

### Bewegung

- Wenige, gezielte Momente. Runder Neon-Punkt als roter Faden. Scroll-Reveals,
  Hover-Kontrast (Neon / invertiert).
- Technik: **erst reines CSS + kleine JS-Beobachter** (IntersectionObserver).
  Library nur mit Begründung.

## Informationsarchitektur

Schlank. Seiten:

- `index.astro` – **Startseite**: Statement-Hero + 4–6 ausgewählte Highlights.
- `work.astro` – **Work**: Projektübersicht, **filterbar** nach Kategorie
  (Alle · Film · 3D · Branding · Grafik · UX · Foto).
- `work/[slug].astro` – **Projekt-Detailseite** (dynamisch, eine Vorlage → viele
  Projekte).
- `about.astro` – **About / Über mich**: wer, Skills, Tools, CV.
- **Kontakt**: Mail, LinkedIn/Insta – evtl. in den Footer integriert.

**Wichtig:** Eine Work-Seite mit Filter (kein separater Ordner pro Kategorie).
Projekte als **Content Collection** – ein Projekt = eine Inhalts-Datei mit
`category`/`tags`. So wächst das Portfolio, ohne Layout/Code umzubauen.

### Angepeilte Ordnerstruktur

```
src/
├─ styles/    tokens.css (Farben & Schriften), global.css (Reset + Basis)
├─ layouts/   Layout.astro (head, Nav, Footer, Slot)
├─ components/ Nav.astro, Footer.astro
├─ content/   config.ts (Schema), projekte/ (Projekt-Dateien)
└─ pages/     index.astro, work.astro, about.astro, work/[slug].astro
public/       Bilder, Videos, Favicon
```

Design und Inhalt bleiben getrennt → Aussehen jederzeit änderbar, ohne
Projekttexte anzufassen (und umgekehrt).

## Projekt-Inventar (Stand jetzt)

Ein Projekt kann mehrere Tags haben. Gruppenarbeiten **ehrlich kennzeichnen**.
Fürs Praxissemester **Branding/Corporate, Film und 3D nach vorne**.

| # | Projekt | Tags |
|---|---------|------|
| 01 | Kurzfilm mit 3D-Visuals (5 min) – Regie, Schnitt, 3D-Integration | Film, 3D |
| 02 | Kurzfilm (5 min) | Film |
| 03 | 3D-Character & Concept Art (Sketch bis Render) | 3D |
| 04 | Game, 3 Level – Character, Animation, Environment (im Team) | 3D, Game |
| 05 | Corporate Identity (selbst) – Logo, Farbwelt, Visitenkarte, CV, Educational Post | Branding, Grafik |
| 06 | Branding für Kund:in – Logo & Basis-Identität | Branding |
| 07 | App-Konzept – Interaction Design (Gruppe) | UX |
| 08 | Website-Design – UX (Gruppe) | UX |
| 09 | Brettspiel-Finder Web-App – Web-Programmierung (zu zweit) | UX, Code |
| 10 | Fotoprojekte – Auswahl Fotografie-Kurs | Foto |
| + | Grafikdesign / Print – ab Oktober, Kategorie existiert, vorerst leer | Grafik (geplant) |

## Rechtliches – VOR der Veröffentlichung erledigen (offen)

Bevor echte Inhalte online gehen und der Link aktiv verschickt wird, müssen zwei
Dinge her (Portfolio gilt in DE i. d. R. als impressumspflichtig):

- **Impressum** (`/impressum`): vollständiger Name, ladungsfähige Anschrift,
  Kontakt (E-Mail). Rechtsgrundlage: § 5 DDG / § 18 MStV.
- **Datenschutzerklärung** (`/datenschutz`): nötig, weil GitHub Pages (GitHub/
  Microsoft, USA) Besucher-IPs in Server-Logs verarbeitet (DSGVO, Drittland USA).
  Für GitHub Pages gibt es geprüfte Muster.
- Beide Seiten in der Astro-Struktur anlegen und **im Footer verlinken**.
- Kein Rechtsrat – im Zweifel seriösen Generator (eRecht24, datenschutz-generator.de)
  oder juristische Prüfung nutzen.

Solange die Seite leer/privat ist und niemand den Link hat, ist das Risiko gering
– aber vor dem aktiven Einsatz erledigen.

## Nächste Schritte (Reihenfolge)

1. Aktuellen Projektstand ansehen (astro.config, src-Struktur, index).
2. `styles/tokens.css` – zentrale Design-Tokens (Farben oben, Schriftvariablen).
3. `styles/global.css` – Reset, Basis, Font-Einbindung.
4. `layouts/Layout.astro` – Seitengerüst.
5. `components/Nav.astro` + `Footer.astro`.
6. `index.astro` auf Layout umstellen (erster Hero).
7. `content/config.ts` + erste Projekt-Datei (Schema mit Titel, Kategorie, Tags).
8. `work.astro` (filterbar) + `work/[slug].astro`.
9. Lokal testen (`npm run dev`), Responsivität & GitHub-Pages-Pfade prüfen.

## Referenz

Visuelles Konzept-Board (v3, alle Design-Entscheidungen visuell):
https://claude.ai/code/artifact/62cfa622-4d22-4691-8e4e-08ee2af6900f
