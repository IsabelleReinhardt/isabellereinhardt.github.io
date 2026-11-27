// Zentrale Projektdaten für die Detailseiten (Grundbaustein für alle Projektseiten).
// Neues Projekt = neuen Eintrag ergänzen + Dateien unter public/projects/<slug>/ ablegen.

export interface Project {
  hidden?: boolean;    // true = vorerst nicht online (keine Seite, nicht in NEXT PROJECT)
  slug: string;        // URL + Ordnername unter public/projects/<slug>/  → Seite liegt unter /work/<slug>
  title: string;       // großer, geblurrter Projekttitel oben
  category: string;    // z. B. "Corporate\nDocumentary" (Spalte 1; \n = Zeilenumbruch in der Metazeile)
  date: string;        // z. B. "mar – jun 2026"
  type: string;        // z. B. "semester project"
  role: string;        // z. B. "solo work"
  tools: string;       // z. B. "DaVinci Resolve · Blender · Sony A7iii"
  credits: string;     // z. B. "baubuero zam’"
  cover: string;       // Cover fürs Work-Raster + die NEXT-PROJECT-Leiste
  coverPos?: string;   // Bildausschnitt des Covers im NEXT-PROJECT-Fächer (object-position, wie Figma 174-4)
  hero: {
    // Galerie statt Einzel-Video (z. B. Branding): Bilder/Videos nebeneinander in einer Leiste.
    // Wächst beim Scrollen auf 3 Rasterzeilen, danach scrollt man durch die Leiste.
    // ar = Seitenverhältnis (Breite / Höhe), poster = Standbild für Videos (optional).
    gallery?: { src: string; type: 'image' | 'video' | 'stack'; ar: number; poster?: string; imgStyle?: string; alt?: string;
                // type 'stack': zwei Bilder übereinander in einer Spalte (oben/unten, je halbe Höhe)
                stack?: { src: string; alt?: string; imgStyle?: string }[] }[];
    galleryCenter?: number;  // Galerie zentriert um dieses Element (z. B. 3 Porträts), ohne Mausrad-Leiste
    galleryRows?: number;    // Höhe der großen Galerie in Rasterzeilen (Standard 3)
    galleryFill?: boolean;   // Desktop: alle Galerie-Bilder teilen sich die volle Breite (angeschnitten)
    endCols?: number;        // Breite im Endzustand in Spalten (Standard: volle Breite)
    lightboxExtra?: string[]; // zusätzliche Bilder nur für die Vollbild-Ansicht
    poster: string;    // Cover im Querformat (16:9) – Desktop + großes Bild
    posterPortrait?: string; // optional: Cover im Hochformat (z. B. 4:5) für den Start auf dem Handy
    mediaPos?: string; // optional: Bildausschnitt von Cover + Video (object-position), z. B. '50% 5%' = weiter oben
    video?: string;    // optionaler Clip (.mp4, max. 100 MB – GitHub-Limit): startet beim ersten
                       // Scrollen stumm in Schleife. Ohne fullFilm spielt Play ihn mit Ton ab.
    fullFilm?: string; // optional: Link zum ganzen Film (z. B. YouTube), öffnet in neuem Tab.
                       // Ohne `video` öffnet auch der Play-Knopf diesen Link.
    filmBy?: string;   // "A FILM BY …" (optional)
    names?: string[];  // Namen oben im Video (optional)
  };
  impressions?: string[]; // Bilder fürs IMPRESSION-Karussell (optional, beliebig viele, Querformat ideal)
  body: string[];      // Textblöcke ENGLISCH (1. = Intro links, 2.+3. = rechts)
  bodyDe?: string[];   // dieselben Textblöcke auf Deutsch (EN/DE-Schalter unten rechts; fehlt er → Englisch)
}

// Ordner der Branding-Dateien (mit Leerzeichen + Apostroph im Namen → als Konstante, damit die
// Anführungszeichen in den Pfaden unten nicht durcheinanderkommen)
const BZ = "/projects/branding zam'";
const OR = "/projects/orbit musikvideo";
const PT = '/projects/foto portraits';
const P21 = '/projects/21';
const D3 = '/projects/3d character';
const LA = '/projects/logo animation';

export const projects: Project[] = [
  {
    slug: 'imagefilm',
    title: 'Baubuero Zam’',
    category: 'Corporate\nDocumentary',
    date: 'mar – jun\n2026',
    type: 'semester\nproject',
    role: 'solo\nwork',
    tools: 'DaVinci Resolve\nBlender\nSONY A7iii',
    credits: 'baubuero zam’',
    cover: '/projects/imagefilm/ImagefilmCoverQuerformat.jpg',   // Querformat-Cover (Work-Seite + NEXT PROJECT)
    hero: {
      // Cover = verkleinerte JPG-Fassungen deiner PNGs (gleicher Name, .jpg statt .png)
      poster: '/projects/imagefilm/ImagefilmCoverQuerformat.jpg',
      posterPortrait: '/projects/imagefilm/ImagefilmCoverHochformat2.jpg',   // 9:16-Version passt besser aufs Handy
      // Clip (Anfang des Films): H.264-MP4 mit Ton, aus ImagefilmKurz.mov umgewandelt (17,4 MB)
      video: '/projects/imagefilm/ImagefilmKurz.mp4',
      // Ganzer Film ist größer als 100 MB → läuft auf YouTube (Play-Knopf + „full film ↗")
      fullFilm: 'https://youtu.be/ONAtB10waUw',
      // „A FILM BY …" und die Namen stecken schon im Cover-Bild → hier keine Overlay-Texte
    },
    // Reihenfolge = Reihenfolge im Karussell (Impression1 = .jpg-Fassung deiner PNG)
    impressions: [1, 2, 3, 4, 5, 6, 7].map((n) => `/projects/imagefilm/Impression${n}.jpg`),
    body: [
      "On my own initiative, I created this documentary image film to introduce the young start-up “baubuero zam’”. Using a real project, the film explains their approach to straw-bale construction – but above all, it portrays the three founders as likeable and approachable people.",
      "After initial discussions about the concept, I conducted a focused interview that served as the common thread of the storyline. Based on this, I created the rough cut and planned the B-roll footage.",
      "The project was completed with colour grading, sound design and the final polish. Taking a project of this size entirely on my own, from the first idea to the finished film that found its place on the website <a href=\"https://www.baubuerozam.de\" target=\"_blank\" rel=\"noopener\">www.baubuerozam.de</a>, was a great experience.",
    ],
    bodyDe: [
      "Aus eigener Initiative ist dieser dokumentarische Imagefilm entstanden, um das junge Start-up „baubuero zam’“ vorzustellen. Anhand eines echten Projekts sollte ihr Ansatz des Strohbaus anschaulich erklärt werden – vor allem aber ging es darum, die drei Gründer sympathisch und nahbar zu porträtieren.",
      "Nach ersten Absprachen zum Konzept habe ich ein gezieltes Interview geführt, das als roter Faden für die Storyline diente. Auf dieser Basis entstanden der Grobschnitt und die Planung des B-Roll-Materials.",
      "Den Abschluss bildeten das Color Grading, das Sounddesign und der letzte Feinschliff. Ein Projekt dieser Größe komplett eigenverantwortlich von der ersten Idee bis zum fertigen Film, der seinen Platz auf der Website <a href=\"https://www.baubuerozam.de\" target=\"_blank\" rel=\"noopener\">www.baubuerozam.de</a> gefunden hat, zu durchlaufen, war eine tolle Erfahrung.",
    ],
  },
  {
    slug: 'branding-zam',
    title: 'Baubuero Zam’',
    category: 'Corporate\nDesign',
    date: 'aug\n2026',
    type: 'free\nwork',
    role: 'solo\nwork',
    tools: 'Adobe Illustrator\nAdobe InDesign\nAdobe Photoshop',
    credits: 'baubuero zam’',
    cover: `${BZ}/BrandingCover.png`,
    hero: {
      poster: `${BZ}/BrandingCover.png`,
      // Dateien liegen in deinem Ordner "branding zam'": .jpg/-web.mp4 = verkleinerte Web-Fassungen
      // deiner Originale (PNG/MP4 bleiben unangetastet). BrandingCover = Standbild vor dem Video.
      // Reihenfolge = Reihenfolge in der Leiste (1. Video startet nach 2 s bzw. beim Scrollen)
      gallery: [
        { src: `${BZ}/LogoSchnittMotionKlein.mp4`, type: 'video', ar: 16 / 9, poster: `${BZ}/BrandingCover.png` },
        { src: `${BZ}/MockupVK1.jpg`,         type: 'image', ar: 4 / 3, alt: 'Business cards for baubuero zam’ on a green cutting mat' },
        { src: `${BZ}/LogoColorMotion-web.mp4`,   type: 'video', ar: 1, poster: `${BZ}/LogoColorMotion-poster.jpg` },
        { src: `${BZ}/MockupInsta1.jpg`,      type: 'image', ar: 3 / 2, alt: 'Instagram post for baubuero zam’ shown on a smartphone' },
        // ehemals IMPRESSION-Leiste → jetzt Teil der großen Leiste
        { src: `${BZ}/Impression1.jpg`,       type: 'image', ar: 1920 / 1440, alt: 'Round black coasters with the baubuero zam’ logo' },
        { src: `${BZ}/Impression5.jpg`,       type: 'image', ar: 1920 / 1056, alt: 'Brand guidelines: primary logo, favicon and secondary logo' },
        { src: `${BZ}/Impression6.jpg`,       type: 'image', ar: 1920 / 994, alt: 'Brand guidelines: the typefaces Giano and Apercu Mono Pro' },
        { src: `${BZ}/Impression4.jpg`,       type: 'image', ar: 1920 / 1280, alt: 'Instagram templates for baubuero zam’ on three smartphones' },
        { src: `${BZ}/Impression7-2.jpg`,     type: 'image', ar: 2480 / 1518, alt: 'Brand guidelines: the colour palette from sawdust beige to white' },
      ],
    },
    body: [
      "As a direct extension of the preceding image film, I developed a corporate design for <a href=\"https://www.baubuerozam.de\" target=\"_blank\" rel=\"noopener\">www.baubuerozam.de</a> that laid the foundation for the start-up’s long-term brand presence – both for a website and for the Instagram channel @baubuerozam.",
      "In close consultation, I analysed the desired external image: despite the focus on sustainable straw-bale construction, the design was meant to feel deliberately modern and minimal rather than overtly “eco”. I developed logo variations using the letters zam, with a grid derived from the stroke width of the letters themselves, and defined binding colour palettes and typography rules.",
      "As the process went on, I extended the identity with matching social media templates. Working directly with real clients showed me how valuable close communication is and how to translate wishes, step by step, into a coherent design.",
    ],
    bodyDe: [
      "Als direkte Erweiterung des vorausgegangenen Imagefilms habe ich ein Corporate Design für <a href=\"https://www.baubuerozam.de\" target=\"_blank\" rel=\"noopener\">www.baubuerozam.de</a> entwickelt, das den Grundbaustein für den langfristigen Markenauftritt des Start-ups bildete – sowohl für eine Website als auch für den Instagram-Kanal @baubuerozam.",
      "In intensiven Abstimmungen analysierte ich die gewünschte Außenwirkung: Trotz des Schwerpunkts auf dem nachhaltigen Strohbau sollte das Design bewusst modern und schlicht statt plakativ „öko“ wirken. Ich entwickelte Logovarianten mit den Buchstaben zam, deren Raster sich aus der Strichstärke der Buchstaben selbst ableitet, und definierte verbindliche Farbpaletten sowie Typografie-Regeln.",
      "Im laufenden Prozess ergänzte ich den Auftritt um passende Social-Media-Templates. Die direkte Zusammenarbeit mit echten Kunden hat mir gezeigt, wie wertvoll eine enge Absprache ist und wie man Wünsche Schritt für Schritt in ein stimmiges Design übersetzt.",
    ],
  },
  {
    slug: 'orbit',
    title: 'Orbit',
    category: 'Music\nVideo',
    date: 'jun\n2025',
    type: 'course\nproject',
    role: 'solo\nwork',
    tools: 'frame by frame\nAfter Effects',
    credits: '–',
    cover: `${OR}/Coverbild.jpg`,
    hero: {
      poster: `${OR}/Coverbild.jpg`,
      // ganzes Musikvideo (1:40) als MP4 aus OrbitMusikvideo.mov → läuft direkt auf der Seite
      video: `${OR}/OrbitMusikvideo.mp4`,
    },
    impressions: [1, 2, 3, 4, 5, 6].map((n) => `${OR}/Impression${n}.jpg`),
    body: [
      "As a freely chosen final project in the motion design course, I decided to make a music video – translating a song by the artist Orbit, which I was listening to a lot at the time, into a visual language of my own.",
      "I wanted to combine different graphic styles: on the one hand, I was fascinated by collaged motion graphics; on the other, I really enjoyed drawing elements traditionally, frame by frame. Step by step, these different animation techniques grew together.",
      "The project was a great opportunity to dive deep into these techniques and to see how well music and imagery can be synchronised. In the end, bringing the song to life visually in this way was simply a lot of fun.",
    ],
    bodyDe: [
      "Im Rahmen einer freien Abschlussarbeit im Kurs Motion Design habe ich mich für ein Musikvideo entschieden, um einen Song des Künstlers Orbit, den ich zu dieser Zeit intensiv gehört habe, in eine eigene visuelle Handschrift zu übersetzen.",
      "Ich wollte verschiedene grafische Stilmittel kombinieren: Einerseits faszinierten mich collagierte Motion Graphics, andererseits hatte ich großen Spaß daran, Elemente im Frame-by-Frame-Verfahren traditionell zu zeichnen. So wuchsen unterschiedliche Animationstechniken Schritt für Schritt zusammen.",
      "Das Projekt war eine super Gelegenheit, mich intensiv in diese Techniken reinzufuchsen und zu sehen, wie gut man Musik und Bildwelten miteinander synchronisieren kann. Am Ende hat es mir einfach riesigen Spaß gemacht, den Song auf diese Weise visuell zum Leben zu erwecken.",
    ],
  },
  {
    slug: 'logo-animation',
    title: 'Armed Angels',
    category: 'Logo\nAnimation',
    date: 'mar\n2025',
    type: 'course\nproject',
    role: 'solo\nwork',
    tools: 'After Effects',
    credits: '–',
    cover: `${LA}/Coverbild.jpg`,
    hero: {
      poster: `${LA}/Coverbild.jpg`,
      video: `${LA}/LogoAnimationVideo.mp4`,
    },
    impressions: [1, 2, 3, 4, 5].map((n) => `${LA}/Impression${n}.jpg`),
    body: [
      "The goal of this first assignment in the motion design course was to get into animation in a playful, hands-on way and to develop a feel for graphic timing. The task was to create a logo animation for a logo of my choice.",
      "As I had no prior experience with the animation software After Effects, I started with extensive tutorials to explore its technical basics and possibilities. I deliberately chose the logo of Armed Angels, as the brand’s concept appeals to me, and came up with matching motion scenarios.",
      "In the end, the project was the perfect starting point to dive into the world of animation and motion graphics and to gain my first hands-on experience with a new piece of software.",
    ],
    bodyDe: [
      "Ziel dieser ersten Aufgabe im Kurs Motion Design war es, sich spielerisch und praxisnah in die Animation einzuarbeiten und ein Gefühl für grafisches Timing zu bekommen. Hier sollte ich eine Logo-Animation für ein frei ausgewähltes Logo erstellen.",
      "Da ich zu Beginn noch keinerlei Berührungspunkte mit der Animationssoftware After Effects hatte, startete ich mit umfassenden Tutorials, um die technischen Grundlagen und Möglichkeiten zu ertasten. Ich wählte bewusst das Logo von Armed Angels, da mich das Konzept der Marke anspricht, und überlegte mir dazu passende Bewegungsszenarien.",
      "Das Projekt war schlussendlich der perfekte Einstieg, um in die Welt der Animation und Motion Graphics einzutauchen und erste Erfahrungen mit einer neuen Software zu sammeln.",
    ],
  },
  {
    slug: 'ayra',
    title: 'Ayra',
    category: '3D\nCharacter',
    date: 'oct to feb\n2025/26',
    type: 'course\nproject',
    role: 'solo\nwork',
    tools: 'Blender\nSubstance Painter 3D',
    credits: '–',
    cover: `${D3}/0001.jpg`,
    coverPos: '50% 98%',
    hero: {
      poster: `${D3}/0001.jpg`,
      mediaPos: '50% 5%',   // Ausschnitt weiter oben → Ayras Kopf ist im Video ganz zu sehen
      // 4K-Original (188 MB, über dem GitHub-Limit) → Full-HD-Fassung
      video: `${D3}/3dCharacterVideo-web.mp4`,
    },
    impressions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => `${D3}/Impression${n}.jpg`),
    body: [
      "This semester project centred on the independent concept and creation of a 3D character, including a matching story.",
      "Based on my own character drawings, I developed the concept art for “Ayra” – a girl who survives in a post-apocalyptic world and helps the people around her with self-made mechanical inventions. Guided by weekly steps, I went through the entire 3D process, from the basics to the final render.",
      "The finished model combines narrative depth with technical craft and strengthened my understanding of the entire creation process of a 3D character, from the first sketch to the final look. I decorated the turntable using Blender assets.",
    ],
    bodyDe: [
      "Im Mittelpunkt dieser Semesterarbeit stand die eigenständige Konzeption und Erstellung eines 3D-Charakters inklusive passendem Storytelling.",
      "Ausgehend von eigenen Charakterzeichnungen entwickelte ich die Concept Art für „Ayra“ – ein Mädchen, das in einer postapokalyptischen Welt überlebt und ihren Mitmenschen durch selbstgebastelte mechanische Erfindungen hilft. Begleitet von wöchentlichen Schritten durchlief ich den gesamten 3D-Prozess von den Grundlagen bis zum finalen Render.",
      "Das fertige Modell verbindet erzählerische Tiefe mit technischem Handwerk und hat mein Verständnis für den gesamten Entstehungsprozess einer 3D-Figur, von der ersten Skizze bis zum finalen Look, gefestigt. Den Turntable habe ich mithilfe von Blender-Assets dekoriert.",
    ],
  },
  {
    slug: 'modern-elvis',
    title: 'Modern Elvis',
    category: 'Photo\ngraphy',
    date: 'nov\n2024',
    type: 'course\nproject',
    role: 'solo\nwork',
    tools: 'Photoshop\nLightroom\nSONY 6600',
    credits: 'Simon Bodemer',
    cover: `${PT}/Coverbild-web.jpg`,
    coverPos: '50% 34.5%',
    hero: {
      poster: `${PT}/Coverbild-web.jpg`,
      // drei Porträts nebeneinander (wie Figma): Mitte = Coverbild, startet als Ausschnitt im kleinen Feld
      gallery: [
        { src: `${PT}/Bild2-web.jpg`,     type: 'image', ar: 2 / 3, alt: 'Black-and-white portrait of a young man in a black T-shirt sitting on the studio floor' },
        { src: `${PT}/Coverbild-web.jpg`, type: 'image', ar: 2 / 3, imgStyle: 'object-position: 50% 34.5%', alt: 'Black-and-white portrait of a young man in a leather jacket sitting on the floor' },
        { src: `${PT}/Bild3-web.jpg`,     type: 'image', ar: 2 / 3, alt: 'Black-and-white profile portrait of a young man with a cigarette' },
      ],
      galleryCenter: 1,
      galleryRows: 3,     // 3 Zeilen hoch wie Branding
      galleryFill: true,  // Desktop: die drei Bilder füllen zusammen die volle Breite; mobil wischen
    },
    body: [
      "The goal of this assignment in the photography course was to deepen my understanding of lighting and of handling the camera deliberately, in the context of portrait photography.",
      "Inspired by the iconic portraits of Elvis Presley, I wanted to translate that characteristic vibe into a modern visual language. To do this, I looked for a suitable model type and used the studio setting to experiment with light, shadow and expression.",
      "The project helped me develop a feel for studio lighting and for directing people in front of the camera.",
    ],
    bodyDe: [
      "Das Ziel dieser Aufgabe im Kurs Fotografie war es, im Rahmen der Porträtfotografie die Lichtsetzung und den gezielten Umgang mit der Kamera zu vertiefen.",
      "Inspiriert von den ikonischen Porträts von Elvis Presley, wollte ich diesen charakteristischen Vibe in eine moderne Bildsprache übertragen. Dazu suchte ich einen passenden Model-Typus und nutzte das Studio-Setting für Experimente mit Licht, Schatten und Ausdruck.",
      "Das Projekt half mir dabei, ein Gespür für Studiobeleuchtung und die direkte Regiearbeit mit Menschen vor der Kamera zu entwickeln.",
    ],
  },
  {
    slug: '21-1',
    title: '21/1',
    category: 'Exhibition/\nMerch Design',
    date: 'oct to nov\n2026',
    type: 'free\nwork',
    role: 'group\nwork',
    tools: 'Adobe Illustrator\nAdobe InDesign\nAdobe Photoshop',
    credits: 'Tamara Bock',
    cover: `${P21}/CoverLP2-web.jpg`,
    hero: {
      poster: `${P21}/CoverLP2-web.jpg`,
      // Leiste wie im Figma-Frame: Ausstellung · [Shirt-Detail / Sticker] · Rücken · Shirt vorne ·
      // [Shirt-Detail / Text 21/1] · Sticker an der Laterne. Start = das Shirt-Detail (CoverLP2) in der
      // 2. Spalte – beim Wachsen schiebt sich darunter das Sticker-Bild hinein, links erscheint die Ausstellung.
      gallery: [
        { src: `${P21}/CoverLP1-web.jpg`, type: 'image', ar: 2 / 3, imgStyle: 'object-position: 50% 40%', alt: 'Exhibition wall with two printed shirts, photos and stickers; a woman pins up a picture' },
        { src: `${P21}/CoverLP2-web.jpg`, type: 'stack', ar: 0.75, stack: [
          { src: `${P21}/CoverLP2-web.jpg`, alt: 'Close-up of a black shirt with a small square hand motif', imgStyle: 'object-position: 50% 52%' },
          { src: `${P21}/Bild1-web.jpg`, alt: 'Pink stickers with the 21/1 motifs on crumpled foil' },
        ] },
        { src: `${P21}/Bild2-web.jpg`, type: 'image', ar: 2 / 3, imgStyle: 'object-position: 50% 45%', alt: 'Back view of a woman wearing the black 21/1 shirt with the hand motif' },
        { src: `${P21}/Bild3-web.jpg`, type: 'image', ar: 2 / 3, imgStyle: 'object-position: 50% 40%', alt: 'White 21/1 shirt with the mdma print on a hanger' },
        { src: `${P21}/Bild4-web.jpg`, type: 'stack', ar: 0.75, stack: [
          { src: `${P21}/Bild4-web.jpg`, alt: 'Detail of a white shirt with a small printed line of text', imgStyle: 'object-position: 50% 0%; transform: scale(1.6); transform-origin: 50% 53%' },
          { src: `${P21}/Bild5-web.jpg`, alt: 'Exhibition text: 21/1 – about a few days in a villa in Tuscany' },
        ] },
        { src: `${P21}/Bild6-web.jpg`, type: 'image', ar: 3 / 4, imgStyle: 'object-position: 50% 45%', alt: '21/1 stickers on a street lamp post' },
      ],
      galleryCenter: 1,   // startet mit dem Shirt-Detail (2. Spalte), die Ausstellung liegt links daneben
    },
    body: [
      "In August 2026, my degree programme went on an excursion to Tuscany. Part of the trip was to design a project that would then be shown at an exhibition opening in November. For this, I teamed up with a friend to create a merch design.",
      "While developing it, we worked closely together on the typography and graphics. The motifs are inspired by our time in Tuscany. I took on the shirt with the hand motif, created the matching sticker design and took care of the photos of the finished prints.",
      "We conceived and designed the exhibition of the shirts for the Tuscany vernissage together. In the end, our exhibition featured two shirts screen-printed in Ravensburg, sticker designs and a photo series documenting the printing process and the finished shirts.",
    ],
    bodyDe: [
      "Im August 2026 hatte mein Studiengang eine Exkursion in die Toskana. Teil dieser Exkursion ist es, ein Projekt zu gestalten, das dann im November in einer Vernissage Platz findet. Hierfür habe ich mich mit einer Freundin zusammengeschlossen, um ein Merch-Design zu machen.",
      "Bei der Ausarbeitung haben wir uns eng abgesprochen, was die Gestaltung durch Schrift und Grafiken angeht. Die Motive sind von der Zeit in der Toskana inspiriert. Ich habe das Shirt mit dem Hand-Motiv übernommen, das zugehörige Sticker-Design gemacht und mich um Fotos der fertig gedruckten Shirts gekümmert.",
      "Die Ausstellung der Shirts für die Toskana-Vernissage haben wir gemeinsam konzipiert und gestaltet. Schlussendlich beinhaltet unsere Ausstellung zwei in Ravensburg siebgedruckte Shirts, Sticker-Designs und eine Fotoreihe, die den Druckprozess sowie die fertigen Shirts festhält.",
    ],
  },
  {
    hidden: true,   // RESET vorerst ausgeblendet (Isabelle ist sich noch nicht sicher)
    slug: 'kurzfilm',
    title: 'Reset',
    category: 'Short\nFilm',
    date: 'mar to apr\n2025',
    type: 'course\nproject',
    role: 'group\nwork',
    tools: 'DaVinci Resolve\nSONY 6600',
    credits: 'Elisa Czogiel',
    cover: '/projects/kurzfilm/Coverbild.jpg',
    hero: {
      poster: '/projects/kurzfilm/Coverbild.jpg',
      // ganzer Film (1:42) als MP4 aus Reset_Film.mov umgewandelt → läuft direkt auf der Seite,
      // kein YouTube nötig. Startet stumm als Vorschau, Play spielt mit Ton, Vollbild-Knopf unten rechts.
      video: '/projects/kurzfilm/Reset_Film.mp4',
    },
    impressions: [1, 2, 3, 4, 5].map((n) => `/projects/kurzfilm/Impression${n}.jpg`),
    body: [
      "At the heart of this short film, made as part of the film module, is a time loop – especially the psychological dynamics and emotional chaos of one character.",
      "As this was my very first practical experience with film, we used the project as a group to learn the craft of filmmaking from the ground up. We deliberately wanted to go through every role in the production process and took turns during the concept, the development of the storyline and the shooting days. After the work in front of and behind the camera, we moved on to post-production together.",
      "Here, my main focus was the film edit. Through close and continuous coordination within the team, we experienced first-hand how important structured communication and collaborative work are in film.",
    ],
    bodyDe: [
      "Im Zentrum dieses Kurzfilms, der innerhalb des Moduls Film entstand, steht eine Zeitschleife – insbesondere die psychologische Dynamik und das Gefühlschaos eines Charakters.",
      "Da es sich um meine allererste praktische Erfahrung mit Film überhaupt handelte, nutzten wir das Projekt als Gruppe, um das filmische Handwerk von Grund auf zu erlernen. Wir wollten gezielt jede Rolle im Entstehungsprozess durchlaufen und wechselten uns während der Konzeption, der Storyline-Entwicklung und der Drehtage entsprechend ab. Nach der Umsetzung vor der Kamera ging es gemeinsam in die Postproduktion.",
      "Hier übernahm ich schwerpunktmäßig den Filmschnitt. Durch die enge und kontinuierliche Abstimmung im Team lernten wir hautnah, wie wichtig strukturierte Kommunikation und kollaboratives Arbeiten beim Film sind.",
    ],
  },
];

// Bildbeschreibungen (Alternativtexte, englisch) der Titelbilder – für Screenreader und falls ein
// Bild nicht lädt. Genutzt auf Startseite, Work-Seite und oben auf der Projektseite.
export const COVER_ALT: Record<string, string> = {
  'branding-zam':   'The baubuero zam’ logo in white on a dark green background',
  'imagefilm':      'The three founders of baubuero zam’ laughing together on a leather sofa in front of a straw wall',
  'orbit':          'Collage from the Orbit music video: a desk lamp lights up a cut-out of old city buildings on black',
  'logo-animation': 'Still from the Armed Angels logo animation: a yellow line drawing of jeans next to a hand in a back pocket',
  'ayra':           'The 3D character Ayra standing in a T-pose on a round platform with a stool and a small workbench',
  'modern-elvis':   'Black-and-white studio portrait of a young man in a leather jacket sitting on the floor',
  '21-1':           'Close-up of a black shirt with a small square hand motif from the 21/1 merch design',
  'kurzfilm':       'Still from the short film Reset',
};
