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

                    <button class="start-button" onclick="showCaseIntro(1)">
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