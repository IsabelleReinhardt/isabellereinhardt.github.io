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
| Fläche / Kontrast  | Weiß    | `#F9F9F9` (Token `--color-off`, seit 11.11.; vorher `#FEFEFE`) |
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

- **Neues Logo seit 09.11.2026:** flächiges R-Monogramm mit Kreis (Isabelles Entwurf).
  Dateien (transparent, aus der schwarzen Vorlage freigestellt):
  `public/logo/Logo-white.png` (Schablone für die Navigation) und `public/logo/Logo-neon.png`
  (Footer, Contact-Mitte). Seitenverhältnis 1223 : 1516.
- Navigation: `.logo-mark` in `global.css` nutzt Logo-white.png als Maske → Farbe per CSS
  (weiß/schwarz, Hover neongrün). Logo austauschen = nur die PNG-Dateien ersetzen
  (+ `aspect-ratio` in `.logo-mark` anpassen, falls sich das Format ändert).
- Favicon/Apple-Touch-Icon/Teilen-Vorschau sind aus Logo-neon.png erzeugt (neongrün auf Schwarz,
  seit 13.11. randlos schwarz + größeres Logo); Favicon-Links tragen `?v=4` → bei neuem Favicon die Zahl erhöhen.
- Alte Monogramm-Dateien `NeonLogo-white.png`, `NeonLogo-footer.png` werden nicht mehr genutzt
  (vor dem Löschen Isabelle fragen). Eine Logo-Animation ist geplant (Ort/Stil: Isabelle erklärt noch).

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

### Ordnerstruktur (tatsächlicher Stand 09.11.2026)

```
src/
├─ data/
│  ├─ site.ts        Seitentitel, Beschreibung, URL, E-Mail, LinkedIn, Navigation – EINE Stelle
│  └─ projects.ts    alle Projekte (Texte EN/DE, Medien, Galerien, Alt-Texte), COVER_ALT
├─ components/
│  ├─ SiteHeader.astro   Desktop-Header (Work, About, Contact, Projektseiten) – Präfix-Prop p
│  ├─ SiteFooter.astro   Footer, der am Seitenende hochfährt (Work, About, Projektseiten)
│  ├─ MobileHeader.astro Mobile-Header (alle Seiten)
│  └─ LangToggle.astro   EN/DE-Schalter (About, Projektseiten, Rechtstexte)
├─ layouts/  Layout.astro (head: Titel, Beschreibung, Favicon, Teilen-Vorschau), Legal.astro
├─ styles/   global.css (Tokens + Basis)
└─ pages/    index, work, work/[slug], about, contact, impressum, datenschutz, 404
public/      nur Dateien, die die Seite wirklich nutzt (Web-Fassungen), favicon.*, og-image.jpg
```

**Header/Footer ändern:** Links/Beschriftungen in `src/data/site.ts` bzw. im Baustein
(`SiteHeader`/`SiteFooter`). Aussehen/Position steuert jede Seite über ihr Klassen-Präfix
(`wp-` Work, `ab-` About, `pd-` Projektseite, `ct-` Contact), z. B. `.wp-home`,
`.wp-nav`, `.wp-work`, `.wp-footer-bar`. Startseite, 404 und Rechtstexte haben eigene Kopfzeilen
(anderer Aufbau), nutzen aber dieselben Daten.

**Seitentitel/Beschreibung** sind auf allen Seiten gleich („Isabelle Reinhardt - Portfolio",
englisch) → nur in `src/data/site.ts` ändern. Teilen-Vorschau = `public/og-image.jpg` (1200×630,
nur das Monogramm im Raster). **404-Seite** (`src/pages/404.astro`) = Maskenraster wie die Startseite
(pulsierende Linien), Ziffern in Zeile 3 / Spalte 3–5, neigen sich zum Cursor.
**Projekt-Hero:** `hero.mediaPos` in projects.ts verschiebt den Ausschnitt von Cover + Video (Ayra: '50% 5%').
**Screenreader-Texte** (aria-label, alt) sind englisch; Bildbeschreibungen der Titelbilder in
`COVER_ALT` (projects.ts), Galeriebilder über `alt` am Galerie-Eintrag.

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

## ✅ Checkliste vor dem Online-Gang (Isabelle daran erinnern!)

Stand 09.11.2026. **Bevor die Seite veröffentlicht wird, Isabelle aktiv an jeden offenen Punkt erinnern:**

- [x] Adresse in Impressum + Datenschutz: Waldseerstraße 23, 88250 Weingarten (09.11.)
- [x] `lang="en"` im Layout, Seitentitel/Beschreibung fest, Teilen-Vorschau, Favicon (Monogramm), 404-Seite (09.11.)
      Favicon-Links tragen `?v=2` (Browser-Cache) – bei neuem Favicon die Zahl erhöhen.
- [x] Screenreader-Texte englisch, Alt-Texte für die wichtigsten Bilder (09.11. – Isabelle prüft die Texte)
- [x] Die 5 großen Startseiten-/About-Bilder als `-web.jpg` verkleinert (09.11.)
- [x] **Kontaktformular entfernt** (09.11.): Contact-Seite öffnet per Klick/Antippen direkt eine
      E-Mail (mailto). Formspree-Abschnitt aus der Datenschutzerklärung entfernt → kein AV-Vertrag nötig.
      Isabelle löscht ihr Formspree-Konto selbst (Account → Delete account).
- [ ] **Datenschutzerklärung prüfen lassen** und „Last updated" aktualisieren.
      eRecht24-Fehler beachten: dort stand GitHub als verantwortliche Stelle.
- [x] **RESET (kurzfilm)** bleibt ausgeblendet (Entscheidung Isabelle, 12.11.). Ist ausgeblendet (`hidden: true` in projects.ts, Zeile in work.astro auskommentiert).
      Seine Dateien wurden am 09.11. gelöscht – zum Wiedereinblenden müssen Film/Bilder neu in
      `public/projects/kurzfilm/` gelegt werden (Webfassungen, Namen wie in projects.ts).
- [x] **LinkedIn-URL** in `src/data/site.ts` (`LINKEDIN`) eingetragen (10.11.) – gilt für Footer + Contact.
      (Seit 09.11. LinkedIn statt Instagram in Footer + Contact.)
- [x] **Ungenutzte Dateien + Seitenkopien gelöscht** (09.11., von Isabelle bestätigt): 120 Dateien
      (≈ 959 MB, inkl. aller Originale) und about-1/-2, work-1/-2.astro. `public/` = 74 Dateien, 66 MB,
      keine Datei über 50 MB. **Regel ab jetzt:** in `public/` nur Webfassungen ablegen, die die Seite
      wirklich nutzt; Originale außerhalb des Projekts aufbewahren.
- [ ] **Build testen:** `npm run build` (läuft im Cloud-Workspace fehlerfrei; lokal auf dem
      Mac noch klären) + Deploy über GitHub Actions.

## Referenz

Visuelles Konzept-Board (v3, alle Design-Entscheidungen visuell):
https://claude.ai/code/artifact/62cfa622-4d22-4691-8e4e-08ee2af6900f
