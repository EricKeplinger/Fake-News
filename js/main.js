"use strict";

const app = document.getElementById("app");

let playerName = "";

function showStartScreen() {
    app.innerHTML = `
        <section class="start-screen">
            <div class="start-overlay">

                <div class="login-card">
                    <div class="profile-icon">👤</div>

                    <h1>
                        WILLKOMMEN,<br>
                        <span>HILFSDETEKTIV!</span>
                    </h1>

                    <p>
                        Bist du bereit, die Tricks von<br>
                        Dr. Rumour zu entlarven?
                    </p>

                    <input 
                        id="nameInput" 
                        type="text" 
                        placeholder="Dein Name"
                    >

                    <p id="errorMessage" class="error-message"></p>

                    <button class="start-button" onclick="saveName()">
                        ➜
                    </button>
                </div>

                <img 
                    class="start-detective-img" 
                    src="../img/Detektiv_Boy.png" 
                    alt="Detektiv"
                >

            </div>
        </section>
    `;

    const nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("keydown", function(event) {
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
                    <img 
                        class="intro-person intro-chief" 
                        src="../img/Frau_Chief.png" 
                        alt="Frau Chief"
                    >
                </div>

                <div class="intro-card-new">
                    <h1>HALLO ${playerName.toUpperCase()}!</h1>

                    <h2>
                        WILLKOMMEN IM<br>
                        FAKE-NEWS-HAUPTQUARTIER
                    </h2>

                    <p>
                        Frau Chief braucht deine Hilfe! Dr. Rumour verbreitet überall
                        falsche Nachrichten.
                    </p>

                    <p>
                        Deine Aufgabe ist es, in 6 spannenden Fällen herauszufinden,
                        welche Informationen echt sind und welche Fake News sind.
                    </p>

                    <p>
                        Wenn du gute Arbeit leistest, bekommst du am Ende eine
                        besondere Detektiv-Urkunde.
                    </p>

                    <button class="start-button" onclick="showSafetyIntro()">
    ➜
                    </button>
                </div>

                <div class="intro-person-box">
                    <img 
                        class="intro-person intro-rumour" 
                        src="../img/Dr._Rumour.png" 
                        alt="Dr. Rumour"
                    >
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

                    <p class="safety-intro">
                        Keine Sorge, mit diesen zwei goldenen Regeln wirst du im Netz unschlagbar!
                    </p>

                    <div class="tip-grid">
                        <div class="tip-box">
                            <h2>❌ Fake News</h2>
                            <h3>Lass dich nicht austricksen!</h3>

                            <p>
                                <strong>Was ist das?</strong><br>
                                Fake News sind gefälschte Nachrichten. Das sind Lügen,
                                erfundene Geschichten oder manipulierte Bilder im Internet.
                            </p>

                            <p>
                                Sie werden oft extra spannend oder gruselig gemacht,
                                damit viele Menschen darauf klicken und sie teilen.
                            </p>

                            <div class="detective-rule">
                                🕵️‍♂️ <strong>Die Detektiv-Regel:</strong><br>
                                Glaub nicht alles, nur weil es cool aussieht oder viele Likes hat!
                                Wenn dir eine Nachricht komisch vorkommt, mach den Check:
                                Frag deine Eltern, Lehrer oder schau auf offiziellen
                                Kinder-Nachrichtenseiten nach.
                            </div>
                        </div>

                        <div class="tip-box">
                            <h2>🛑 Cybermobbing</h2>
                            <h3>Gemeinsam stark gegen fiese Chats!</h3>

                            <p>
                                <strong>Was ist das?</strong><br>
                                Cybermobbing bedeutet, dass jemand im Internet absichtlich
                                und immer wieder gemein behandelt, beleidigt oder durch Gerüchte
                                ausgeschlossen wird.
                            </p>

                            <p>
                                Das kann zum Beispiel in WhatsApp-Klassenchats, beim Online-Gaming
                                oder auf TikTok passieren. Das tut richtig weh, auch wenn es
                                „nur“ auf dem Bildschirm passiert.
                            </p>

                            <div class="detective-rule">
                                🕵️‍♀️ <strong>Die Detektiv-Regel:</strong><br>
                                Ein echter Detektiv macht niemals mit, wenn über andere gelästert wird!
                                Wenn du siehst, dass jemand gemobbt wird, schreib:
                                „Hört auf damit!“ und hol dir sofort Hilfe von einem Erwachsenen.
                            </div>
                        </div>
                    </div>

                    <button class="start-button safety-button" onclick="showCaseIntro(1)">
                        Mission starten ➜
                    </button>
                </div>

            </div>
        </section>
    `;
}

function showCaseIntro(caseNumber) {
    app.innerHTML = `
        <section class="case-page">
            <h1>Fall ${caseNumber}</h1>
            <p>Hier beginnt später der erste Fall.</p>

            <button class="next-button" onclick="showStartScreen()">
                zurück
            </button>
        </section>
    `;
}

showStartScreen();