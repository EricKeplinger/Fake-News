"use strict";

const app = document.getElementById("app");

let playerName = "";
let activeCaseNumber = 1;

const caseData = {
    1: {
        lead: "Dr. Rumour hat eine Nachricht verbreitet, die im Internet viral geht und schon tausende Likes gesammelt hat. Zwei Beiträge verbreiten sich rasend schnell:",
        posts: [
            {
                title: "Beitrag A",
                text: "Die Stadtbibliothek Lindenstadt lädt Kinder zur Lesenacht am Samstag ein. Auf der offiziellen Webseite findest du weitere Informationen."
            },
            {
                title: "Beitrag B",
                text: "BREAKING: Ab nächstem Monat dürfen alle Schülerinnen und Schüler während des Unterrichts ihre Handys benutzen! Quelle: Insider aus dem Bildungsministerium."
            }
        ],
        infos: [
            {
                title: "Der Mitläufereffekt:",
                text: "Nur weil viele Menschen etwas glauben, teilen oder liken, wird es dadurch nicht automatisch wahr. Manchmal teilen Leute Dinge einfach ungeprüft weiter, weil sie aufgeregt sind."
            },
            {
                title: "Gekaufte Likes & Bots:",
                text: "Wusstest du, dass man Likes und Shares im Internet kaufen kann? Sogenannte „Bots“ (Computerprogramme) können einem Beitrag künstlich tausende Likes geben, um ihn wichtig aussehen zu lassen."
            },
            {
                title: "Der Klick-Köder & offizielle Check:",
                text: "Sensationelle Nachrichten verbreiten sich schneller als langweilige Wahrheiten. Bevor du einer viralen Nachricht glaubst, schau auf der offiziellen Webseite des Herstellers oder in den echten Nachrichten nach. Steht dort nichts davon? Dann ist es ein Fake."
            }
        ],
        quiz: {
            question: "Ein Video auf TikTok zeigt, dass eine Schule angeblich wegen Hitzefrei für den Rest des Jahres schließt. Das Video hat schon 1 Million Aufrufe. Welche der obigen Fallakten-Nachrichten (A oder B) ist wahrscheinlich ebenso ein Fake?",
            optionA: "A – Die Nachricht der Stadtbibliothek",
            optionB: "B – Die Nachricht über die Handy-Erlaubnis",
            correctAnswer: "B"
        }
    },
    2: {
        lead: "Dr. Rumour weiß, dass Menschen bei erschreckenden Nachrichten oft weniger genau hinschauen. Zwei Artikel berichten über das Thema Energy Drinks:",
        posts: [
            {
                title: "Artikel A",
                text: "Eine wissenschaftliche Studie untersucht die Auswirkungen von Energy Drinks auf Jugendliche."
            },
            {
                title: "Artikel B",
                text: "Neue Studie beweist: Energy Drinks machen dich dumm! Teile diese Warnung sofort an 10 Freunde weiter, bevor es zu spät ist und der blaue Grusel-Clown heute Nacht zu dir kommt!"
            }
        ],
        infos: [
            {
                title: "Die Gefühls-Falle:",
                text: "Fake News nutzen oft absichtlich starke Gefühle wie Angst, Wut oder riesige Überraschung. Wenn dich eine Nachricht sofort extrem erschreckt oder wütend macht, sollten deine Detektiv-Alarme schrillen und du solltest misstrauisch werden."
            },
            {
                title: "Der Kettenbrief-Trick:",
                text: "Drohungen wie „Schicke das an 10 Freunde weiter, sonst …“ sind das sicherste Zeichen für einen Fake-Kettenbrief. Sie wollen dich durch Angst dazu bringen, die Lüge ungeprüft weiterzuverbreiten."
            },
            {
                title: "Keine Panik auf Knopfdruck & Angst bannen:",
                text: "Atme tief durch. Fake News wollen, dass du sofort handelst, ohne nachzudenken. Ein echter Detektiv bewahrt einen kühlen Kopf. Wenn eine Nachricht dir Angst macht, behalte sie nicht für dich, sondern sprich sofort mit deinen Eltern oder Lehrern darüber."
            }
        ],
        quiz: {
            question: "Welche Schlagzeile versucht gezielt, die Leser durch Angst und Panik zu manipulieren und ist ein Fake?",
            optionA: "A – Studie über die Auswirkungen von Energy Drinks",
            optionB: "B – „Energy Drinks machen dich dumm! WARNUNG!“",
            correctAnswer: "B"
        }
    },
    3: {
        lead: "Nicht jede Webseite sagt die Wahrheit. Dr. Rumour hofft, dass du das Überprüfen vergisst. Zwei Webseiten berichten über das Thema gesunden Schlaf:",
        posts: [
            {
                title: "Webseite A – Sicher",
                text: "Autor, Datum und Quellen sind klar sichtbar. Die Informationen werden mit echten medizinischen Studien, zum Beispiel der Deutschen Gesellschaft für Schlafforschung und des Robert Koch-Instituts, belegt. Unten stehen Links wie Datenschutz, Kontakt und Impressum."
            },
            {
                title: "Webseite B – Unsicher",
                text: "Was Ärzte über Schlaf verschweigen! Die Seite nennt keine Quellen, verspricht geheimes Wissen, zeigt unten nur „Hier klicken für gratis Gewinne!“ und besitzt kein Impressum."
            }
        ],
        infos: [
            {
                title: "Das Impressum suchen:",
                text: "Jede seriöse Webseite in Deutschland muss ein Impressum haben. Das ist wie der Personalausweis einer Webseite. Du findest es meist ganz unten. Steht dort kein Name und keine Adresse, ist die Quelle nicht vertrauenswürdig."
            },
            {
                title: "Wer steckt dahinter? (URL-Check):",
                text: "Überprüfe die Adresse der Webseite (URL). Manchmal fälschen Betrüger bekannte Seiten, indem sie einen kleinen Buchstaben ändern, zum Beispiel www.toggoi.de statt www.toggo.de."
            },
            {
                title: "Der Autoren- und „Über uns“-Check:",
                text: "Wer hat den Artikel geschrieben? Ist es ein echter Journalist oder Experte? Vertrauenswürdige Seiten erklären offen in einem „Über uns“-Bereich, wer sie sind und was sie tun. Fehlt diese Info, ist es oft eine Quatsch- oder Fake-Seite."
            }
        ],
        quiz: {
            question: "Auf welcher Webseite hat der Detektiv eine sichere und vertrauenswürdige Quelle für seine Recherche gefunden?",
            optionA: "A – Webseite A",
            optionB: "B – Webseite B",
            correctAnswer: "A"
        }
    },
    4: {
        lead: "Dr. Rumour benutzt diesmal künstliche Intelligenz (KI), um Bilder zu fälschen. Vor dir liegen zwei Fotos eines Golden Retrievers im Park. Auf den ersten Blick wirken beide Bilder völlig normal, doch eines wurde mit KI erstellt:",
        posts: [
            {
                title: "Bild A",
                text: "Ein echtes Foto eines Golden Retrievers im Park. Licht, Schatten, Fell, Pfoten und Hintergrund wirken natürlich und passen logisch zusammen."
            },
            {
                title: "Bild B",
                text: "Ein fast echt wirkendes KI-Bild eines Golden Retrievers. Beim genauen Hinsehen fallen unnatürliche Details, Fehler an den Pfoten und unlogische Licht- oder Schattenstellen auf."
            }
        ],
        infos: [
            {
                title: "Das Auge fürs Detail:",
                text: "KI-Bildgeneratoren und Photoshop sind gut, aber nicht perfekt. Detektive zoomen heran: Haben Menschen oder Tiere plötzlich unnatürlich viele Zehen oder Finger? Sind Linien im Hintergrund seltsam verschwommen, matschig oder verbogen?"
            },
            {
                title: "Die Logik des Lichts:",
                text: "Schau dir das Licht und die Schatten ganz genau an. Wenn die Sonne auf dem Bild von links kommt, der Schatten des Hundes oder eines Baumes aber nach links fällt, stimmt etwas mit der Logik nicht."
            },
            {
                title: "Zu perfekt, um wahr zu sein & Rückwärts-Suche:",
                text: "KI-Bilder sehen oft extrem farbenfroh, glänzend, fehlerfrei oder dramatisch aus. Mit einer Bilderrückwärtssuche, zum Beispiel bei Google Bilder, kann man prüfen, woher ein Bild ursprünglich stammt und ob es digital verändert wurde."
            }
        ],
        quiz: {
            question: "Wenn ein Bild – wie das von Dr. Rumours angeblichem lila Riesenkraken im örtlichen Badesee – im Internet auftaucht, worauf achtet ein Detektiv zuerst, um ein KI-Fake-Bild zu entlarven?",
            optionA: "A – Ich glaube dem Bild sofort, weil es scharf aussieht.",
            optionB: "B – Ich zoome heran, suche nach Logikfehlern im Licht und unnatürlichen Details und mache eine Bilderrückwärtssuche.",
            correctAnswer: "B"
        }
    },
    5: {
        lead: "Dr. Rumour liebt Clickbait. Das sind Überschriften, die extra übertreiben, damit möglichst viele Menschen klicken. Zwei Nachrichten berichten über Smartphone-Regeln an Schulen:",
        posts: [
            {
                title: "Artikel A",
                text: "Viele Schulen testen neue Smartphone-Regeln."
            },
            {
                title: "Artikel B",
                text: "HANDYS AN SCHULEN VERBOTEN! KINDER IN GANZ DEUTSCHLAND VÖLLIG AUSGERASTET!!!"
            }
        ],
        infos: [
            {
                title: "Der Clickbait-Trick:",
                text: "Überschriften sind oft wie bunte Köder beim Angeln. Sie sind absichtlich extrem übertrieben oder lassen wichtige Infos komplett weg, damit du neugierig wirst, erschrickst und schnell daraufklickst."
            },
            {
                title: "Ganz lesen statt schnell teilen:",
                text: "Ein Detektiv urteilt nie nach dem Einband eines Buches. Teile eine Nachricht niemals weiter, wenn du nur die Überschrift gelesen hast. Oft klärt sich die Situation im Text komplett harmlos auf."
            },
            {
                title: "Satzzeichen und Kontext:",
                text: "Wenn eine Überschrift viele Ausrufezeichen oder Wörter in GROSSBUCHSTABEN enthält, will sie dich austricksen und Gefühle statt Fakten ansprechen. Frage dich immer: Welche Informationen fehlen hier, um die ganze Geschichte zu verstehen?"
            }
        ],
        quiz: {
            question: "Du liest die Überschrift: „Schülerin bringt Lehrer zum Weinen!“ Was tust du als Detektiv, bevor du es deinen Freunden erzählst?",
            optionA: "A – Ich erzähle allen sofort, dass eine Schülerin total gemein zum Lehrer war.",
            optionB: "B – Ich lese zuerst den ganzen Artikel. Dort steht nämlich, dass der Lehrer vor Freude weinte, weil die Klasse ihm ein tolles Abschiedsgeschenk gemacht hat.",
            correctAnswer: "B"
        }
    },
    6: {
        lead: "Dr. Rumour verbreitet heute ein ungeprüftes Gerücht im Klassenchat, um Streit zu stiften. Dadurch entsteht ein riesiges Missverständnis und Tobi wird im Chat wüst beschimpft:",
        posts: [
            {
                title: "Beitrag A – Das Gerücht",
                text: "Tobi hat gesagt, dass alle, die keine Markenkleidung tragen, uncool sind und nicht mitspielen dürfen! Ein Mitschüler hat das angeblich von Tobias bestem Freund gehört."
            },
            {
                title: "Beitrag B – Was wirklich gesagt wurde",
                text: "In Wahrheit hatte Tobi nur gesagt, dass er seine eigene neue Jacke cool findet. Seine Aussage wurde verändert und ohne Beweis im Klassenchat weiterverbreitet."
            }
        ],
        infos: [
            {
                title: "Stille Post im Internet:",
                text: "Nachrichten verändern sich massiv, wenn sie von Person zu Person weitergegeben werden – genau wie beim Spiel „Stille Post“. Im Internet verbreiten sich solche verfälschten Gerüchte jedoch in Sekundenschnelle an die ganze Klasse."
            },
            {
                title: "Das erfundene Zitat:",
                text: "Nur weil in einer Nachricht steht „Er hat gesagt …“, heißt das noch lange nicht, dass es stimmt. Ohne einen echten Beweis, wie eine Sprachnachricht im richtigen und unveränderten Zusammenhang, sind solche Behauptungen oft frei erfunden."
            },
            {
                title: "Cybermobbing stoppen & direkt nachfragen:",
                text: "Wenn eine Gruppe im Chat auf einer einzelnen Person herumhackt, ist das Cybermobbing. Detektive machen niemals mit! Frag die betroffene Person persönlich oder privat: „Hast du das wirklich so gemeint?“ und hole Hilfe bei einem Erwachsenen."
            }
        ],
        quiz: {
            question: "Im Klassenchat wird ein fieses Gerücht über ein Mädchen verbreitet und alle schicken böse Smileys. Wie reagiert ein echter Detektiv?",
            optionA: "A – Ich schicke auch einen Smiley, um dazuzugehören, oder erfinde ein neues Gerücht, damit es spannend bleibt.",
            optionB: "B – Ich schreibe im Chat: „Hört auf damit, wir wissen gar nicht, ob das stimmt!“ und melde den Vorfall sofort einem Lehrer oder meinen Eltern.",
            correctAnswer: "B"
        }
    }
};

function showStartScreen() {
    app.innerHTML = `
        <section class="start-screen">
            <div class="start-overlay">
                <div class="login-card">
                    <div class="profile-icon" aria-hidden="true">👤</div>

                    <h1>
                        WILLKOMMEN,<br>
                        <span>HILFSDETEKTIV!</span>
                    </h1>

                    <p>
                        Bist du bereit, die Tricks von<br>
                        Dr. Rumour zu entlarven?
                    </p>

                    <input id="nameInput" type="text" placeholder="Dein Name" aria-label="Dein Name">
                    <p id="errorMessage" class="error-message" aria-live="polite"></p>

                    <button class="start-button" type="button" onclick="saveName()" aria-label="Anmeldung fortsetzen">
                        ➜
                    </button>
                </div>

                <img class="start-detective-img" src="../img/Detektiv_Boy.png" alt="Detektiv">
            </div>
        </section>
    `;

    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            saveName();
        }
    });
}

function saveName() {
    const nameInput = document.getElementById("nameInput");
    const errorMessage = document.getElementById("errorMessage");
    const name = nameInput.value.trim();

    if (name === "") {
        errorMessage.textContent = "Bitte gib zuerst deinen Namen ein.";
        return;
    }

    playerName = name;
    showIntro();
}

function showIntro() {
    app.innerHTML = `
        <section class="intro-screen">
            <div class="intro-layout-new">
                <div class="intro-person-box">
                    <img class="intro-person intro-chief" src="../img/Frau_Chief.png" alt="Frau Chief">
                </div>

                <div class="intro-card-new">
                    <h1>HALLO ${escapeHtml(playerName).toUpperCase()}!</h1>
                    <h2>WILLKOMMEN IM<br>FAKE-NEWS-HAUPTQUARTIER</h2>

                    <p>Frau Chief braucht deine Hilfe! Dr. Rumour verbreitet überall falsche Nachrichten.</p>
                    <p>Deine Aufgabe ist es, in 6 spannenden Fällen herauszufinden, welche Informationen echt sind und welche Fake News sind.</p>
                    <p>Wenn du gute Arbeit leistest, bekommst du am Ende eine besondere Detektiv-Urkunde.</p>

                    <button class="start-button" type="button" onclick="showSafetyIntro()" aria-label="Zur Einführung">
                        ➜
                    </button>
                </div>

                <div class="intro-person-box">
                    <img class="intro-person intro-rumour" src="../img/Dr._Rumour.png" alt="Dr. Rumour">
                </div>
            </div>
        </section>
    `;
}

function showSafetyIntro() {
    app.innerHTML = `
        <section class="safety-screen">
            <div class="safety-layout">
                <div class="safety-card">
                    <h1>BEVOR DIE MISSION STARTET</h1>

                    <p class="safety-intro">
                        Bevor du dich auf deine erste Mission stürzt, gibt es zwei wichtige Dinge,
                        die jeder Meisterdetektiv im Internet kennen muss:
                        <strong>Fake News</strong> und <strong>Cybermobbing</strong>.
                    </p>

                    <p class="safety-intro">Keine Sorge, mit diesen zwei goldenen Regeln wirst du im Netz unschlagbar!</p>

                    <div class="tip-grid">
                        <article class="tip-box">
                            <h2>❌ Fake News</h2>
                            <h3>Lass dich nicht austricksen!</h3>
                            <p><strong>Was ist das?</strong><br>Fake News sind gefälschte Nachrichten. Das sind Lügen, erfundene Geschichten oder manipulierte Bilder im Internet.</p>
                            <p>Sie werden oft extra spannend oder gruselig gemacht, damit viele Menschen darauf klicken und sie teilen.</p>
                            <div class="detective-rule">🕵️‍♂️ <strong>Die Detektiv-Regel:</strong><br>Glaub nicht alles, nur weil es cool aussieht oder viele Likes hat! Wenn dir eine Nachricht komisch vorkommt, mach den Check: Frag deine Eltern, Lehrer oder schau auf offiziellen Kinder-Nachrichtenseiten nach.</div>
                        </article>

                        <article class="tip-box">
                            <h2>🛑 Cybermobbing</h2>
                            <h3>Gemeinsam stark gegen fiese Chats!</h3>
                            <p><strong>Was ist das?</strong><br>Cybermobbing bedeutet, dass jemand im Internet absichtlich und immer wieder gemein behandelt, beleidigt oder durch Gerüchte ausgeschlossen wird.</p>
                            <p>Das kann zum Beispiel in WhatsApp-Klassenchats, beim Online-Gaming oder auf TikTok passieren. Das tut richtig weh, auch wenn es „nur“ auf dem Bildschirm passiert.</p>
                            <div class="detective-rule">🕵️‍♀️ <strong>Die Detektiv-Regel:</strong><br>Ein echter Detektiv macht niemals mit, wenn über andere gelästert wird! Wenn du siehst, dass jemand gemobbt wird, schreib: „Hört auf damit!“ und hol dir sofort Hilfe von einem Erwachsenen.</div>
                        </article>
                    </div>

                    <button class="start-button safety-button" type="button" onclick="showCaseIntro(1)">
                        Mission starten ➜
                    </button>
                </div>
            </div>
        </section>
    `;
}

function showCaseIntro(caseNumber) {
    const currentCase = caseData[caseNumber];

    if (!currentCase) {
        return;
    }

    activeCaseNumber = caseNumber;

    app.innerHTML = `
        <section class="case-screen">
            <img class="case-detective-img" src="../img/Detektiv_Boy.png" alt="Detektiv">

            <div class="case-card">
                <h1 class="case-title">
                    <span class="folder-icon" aria-hidden="true">📁</span>
                    Fall ${caseNumber}
                </h1>

                <p class="case-lead">${currentCase.lead}</p>

                <div class="post-grid">
                    <article class="post-card">
                        <h2>${currentCase.posts[0].title}</h2>
                        <p>${currentCase.posts[0].text}</p>
                    </article>

                    <article class="post-card">
                        <h2>${currentCase.posts[1].title}</h2>
                        <p>${currentCase.posts[1].text}</p>
                    </article>
                </div>

                <div class="info-grid">
                    <article class="info-card info-yellow">
                        <h2>${currentCase.infos[0].title}</h2>
                        <p>${currentCase.infos[0].text}</p>
                    </article>

                    <article class="info-card info-green">
                        <h2>${currentCase.infos[1].title}</h2>
                        <p>${currentCase.infos[1].text}</p>
                    </article>

                    <article class="info-card info-blue">
                        <h2>${currentCase.infos[2].title}</h2>
                        <p>${currentCase.infos[2].text}</p>
                    </article>
                </div>

                <div class="case-actions">
                    <button class="start-button case-next-button" type="button" onclick="showCaseMission(${caseNumber})">
                        Weiter ➜
                    </button>
                </div>
            </div>
        </section>
    `;
}

function showCaseMission(caseNumber) {
    const currentCase = caseData[caseNumber];

    if (!currentCase) {
        return;
    }

    activeCaseNumber = caseNumber;

    app.innerHTML = `
        <section class="case-mission-screen">
            <div class="quiz-card">
                <h1>Quizfrage</h1>

                <p class="quiz-question">${currentCase.quiz.question}</p>

                <div id="quizFeedback" class="quiz-feedback" role="status" aria-live="polite"></div>

                <div class="quiz-options">
                    <button class="quiz-option quiz-option-a" type="button" onclick="selectQuizAnswer('A')">
                        <span>${currentCase.quiz.optionA}</span>
                    </button>

                    <button class="quiz-option quiz-option-b" type="button" onclick="selectQuizAnswer('B')">
                        <span>${currentCase.quiz.optionB}</span>
                    </button>
                </div>

                <div id="quizActions" class="quiz-actions"></div>
            </div>
        </section>
    `;
}

function selectQuizAnswer(answer) {
    const currentCase = caseData[activeCaseNumber];
    const feedback = document.getElementById("quizFeedback");
    const actions = document.getElementById("quizActions");
    const answerButtons = document.querySelectorAll(".quiz-option");

    if (feedback.classList.contains("is-visible")) {
        return;
    }

    answerButtons.forEach(function (button) {
        button.disabled = true;
    });

    feedback.classList.add("is-visible");

    if (answer === currentCase.quiz.correctAnswer) {
        feedback.classList.add("quiz-feedback-correct");
        feedback.textContent = "Toll gemacht! Wenn du so weiter machst haben wir Dr. Rumour bald besiegt!";
        document.querySelector(`.quiz-option-${answer.toLowerCase()}`).classList.add("is-selected-correct");
    } else {
        feedback.classList.add("quiz-feedback-wrong");
        feedback.textContent = "Leider Falsch! Pass bei den nächsten Fällen unbedingt besser auf!";
        document.querySelector(`.quiz-option-${answer.toLowerCase()}`).classList.add("is-selected-wrong");
        document.querySelector(`.quiz-option-${currentCase.quiz.correctAnswer.toLowerCase()}`).classList.add("is-correct-answer");
    }

    actions.innerHTML = `
        <button class="start-button case-next-button" type="button" onclick="showNextCase(${activeCaseNumber + 1})">
            Weiter ➜
        </button>
    `;
}

function showNextCase(caseNumber) {
    if (caseData[caseNumber]) {
        showCaseIntro(caseNumber);
        return;
    }

    app.innerHTML = `
        <section class="case-mission-screen">
            <div class="mission-placeholder">
                <h1>Mission geschafft!</h1>
                <p>Du hast alle sechs Fälle gelöst und Dr. Rumours Tricks entlarvt.</p>
            </div>
        </section>
    `;
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

showStartScreen();
