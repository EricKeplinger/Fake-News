# Kinderdetektiv – Dr. Rumour und die Fake News

Eine interaktive Lern-Webseite für Kinder zu den Themen **Fake News** und **Cybermobbing**. Als Hilfsdetektiv lösen die Kinder sechs Fälle für Frau Chief und entlarven dabei die Tricks des Bösewichts Dr. Rumour. Am Ende gibt es eine Detektiv-Urkunde.

Umgesetzt mit HTML, CSS und JavaScript, ohne Frameworks oder Build-Schritt.

## Die Geschichte

Dr. Rumour verbreitet überall im Internet falsche Nachrichten. Frau Chief, die Leiterin des Fake-News-Hauptquartiers, braucht Unterstützung. Die Kinder treten als Hilfsdetektive bei und lernen in jedem Fall einen neuen Trick kennen, mit dem Fake News arbeiten, und wie man ihn durchschaut.

## Ablauf

1. **Anmeldung:** Das Kind gibt seinen Namen ein. Ohne Namen geht es nicht weiter.
2. **Begrüßung:** Frau Chief und Dr. Rumour werden vorgestellt, die Mission wird erklärt.
3. **Detektiv-Regeln:** Zwei kurze Erklärungen, was Fake News und Cybermobbing sind, jeweils mit einer einfachen Verhaltensregel.
4. **Sechs Fälle:** Jeder Fall besteht aus zwei Teilen:
   - einer **Fallakte** mit zwei gegensätzlichen Beiträgen (einer echt, einer gefälscht) und drei Infokarten, die den Trick dahinter erklären
   - einer **Quizfrage** mit zwei Antworten und sofortigem Feedback. Bei einer falschen Antwort wird die richtige markiert.
5. **Urkunde:** Nach dem letzten Fall erhält das Kind seine Detektiv-Urkunde.

## Die Fälle

| Fall | Thema | Was die Kinder lernen |
|------|-------|-----------------------|
| 1 | Virale Nachrichten | Viele Likes machen etwas nicht wahr. Likes können gekauft sein, und Bots verbreiten Beiträge künstlich. |
| 2 | Angst und Panik | Fake News arbeiten mit starken Gefühlen. Kettenbriefe („Schick das an 10 Freunde …“) sind ein Warnsignal. |
| 3 | Vertrauenswürdige Webseiten | Impressum, Autor und Quellen prüfen. Auf gefälschte Adressen achten. |
| 4 | KI-Bilder | Auf unnatürliche Details sowie Licht und Schatten achten, Bilderrückwärtssuche verwenden. |
| 5 | Clickbait | Übertriebene Überschriften erkennen und den ganzen Artikel lesen, bevor man etwas teilt. |
| 6 | Gerüchte und Cybermobbing | Aussagen verändern sich wie bei „Stille Post“. Beim Mobben nicht mitmachen, nachfragen und Hilfe holen. |

## Figuren

- **Hilfsdetektiv** – die Spielfigur, mit der sich das Kind identifiziert
- **Frau Chief** – Leiterin des Fake-News-Hauptquartiers und Auftraggeberin
- **Dr. Rumour** – der Bösewicht, der die Fake News verbreitet

## Technische Umsetzung

Die ganze Anwendung ist eine einzige Seite (`index.html`). `js/main.js` tauscht den Inhalt des `<main>`-Elements je nach Schritt aus: Anmeldung, Begrüßung, Regeln, Fallakte, Quiz und Urkunde.

- **Inhalte getrennt von der Logik:** Alle sechs Fälle stehen als Daten im Objekt `caseData`. Für jeden Fall sind dort Einleitung, Beiträge, Infokarten und Quizfrage samt richtiger Antwort hinterlegt. Ein neuer Fall braucht deshalb nur einen neuen Eintrag, keinen neuen Code.
- **Sicherheit:** Der eingegebene Name wird mit `escapeHtml()` maskiert, bevor er auf der Seite erscheint. So kann über das Namensfeld kein HTML oder Script eingeschleust werden.
- **Barrierefreiheit:** Fehlermeldungen und Quiz-Feedback werden über `aria-live` auch Screenreadern angesagt, Bilder haben Alternativtexte.
- **Responsive:** Das Layout passt sich über Media Queries an Tablets und Smartphones an.

## Projektstruktur

```
Fake-News/
├── index.html      Einstiegsseite
├── style.css       Gestaltung und responsives Layout
├── js/
│   └── main.js     Ablauf, Fall-Daten und Quiz-Logik
└── img/            Figuren und Urkunde
```

## Starten

Die Seite muss über einen lokalen Webserver geöffnet werden, weil die Bilder über `../img/` eingebunden sind. Zum Beispiel:

- **WebStorm / IntelliJ IDEA:** `index.html` öffnen und rechts oben auf das Browser-Symbol klicken.
- **VS Code:** mit der Erweiterung *Live Server* auf „Go Live“ klicken.
- **Kommandozeile** (im Projektordner):
  ```bash
  npx serve .
  # oder
  python -m http.server 8000
  ```
  Danach im Browser `http://localhost:8000` öffnen (bzw. die Adresse, die `npx serve` anzeigt).

## Team

Entstanden als Abgabe für Agiles Projektmanagement an der FH Hagenberg, SS 2026.

- Eric Keplinger

## Bildquellen

| Datei | Verwendung | Quelle |
|-------|------------|--------|
| `img/Detektiv_Boy.png` | Hilfsdetektiv | *bitte ergänzen* |
| `img/Frau_Chief.png` | Frau Chief | *bitte ergänzen* |
| `img/Dr._Rumour.png` | Dr. Rumour | *bitte ergänzen* |
| `img/Urkunde.png` | Detektiv-Urkunde | *bitte ergänzen* |
