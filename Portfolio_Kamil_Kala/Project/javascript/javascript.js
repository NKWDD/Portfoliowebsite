// Auteur Kamil Kala
// Datum 22-01-2024

// Header voor telefoon
// Functie om het mobiele menu weer te geven
function showmenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.style.right = "0";
  }
}

// Functie om het mobiele menu te verbergen
function hidemenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.style.right = "-200px";
  }
}

// Eventlistener toevoegen aan het formulier met het id "verstuurKnop-afspraak"
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("verstuurKnop-afspraak").addEventListener("click", function () {
    alert("Je formulier is gestuurd!");
  });
});

// Schakel naar lichte modus
function switchToLightMode() {
  document.getElementById('stylesheet').href = 'styles/light-theme.css'; // Verander de href van het stylesheet naar het lichte thema
  setupButtons(); // Pas knoppen aan op basis van het huidige thema
}

// Schakel naar donkere modus
function switchToDarkMode() {
  document.getElementById('stylesheet').href = 'styles/dark-theme.css'; // Verander de href van het stylesheet naar het donkere thema
  setupButtons(); // Pas knoppen aan op basis van het huidige thema
}

// Zet de toestand van de knoppen op basis van het huidige thema
function setupButtons() {
  var currentTheme = document.getElementById('stylesheet').href;
  var lightModeBtn = document.getElementById('lightModeBtn');
  var darkModeBtn = document.getElementById('darkModeBtn');

  if (currentTheme.includes('light-theme.css')) {
    // Als het lichte thema actief is
    lightModeBtn.disabled = true; // Schakel de knop voor lichte modus uit
    darkModeBtn.disabled = false; // Schakel de knop voor donkere modus in
    darkModeBtn.style.display = 'inline-block'; // Toon de knop voor donkere modus
    lightModeBtn.style.display = 'none'; // Verberg de knop voor lichte modus
  } else {
    // Als het donkere thema actief is
    darkModeBtn.disabled = true; // Schakel de knop voor donkere modus uit
    lightModeBtn.disabled = false; // Schakel de knop voor lichte modus in
    lightModeBtn.style.display = 'inline-block'; // Toon de knop voor lichte modus
    darkModeBtn.style.display = 'none'; // Verberg de knop voor donkere modus
  }
}

// Voer setupButtons uit bij het laden van de pagina
window.onload = setupButtons;


// Controleer of de huidige pagina de "Resultatenpagina" is
if (document.title === "Resultatenpagina") {
  // Array met technische modules en behaalde cijfers
  const modules = [
    { naam: "Plannen en Ontwerpen", cijfers: [6, 8.3, 7.5] },
    { naam: "Realiseren", cijfers: [2, 9, 7.9] },
    { naam: "Testen en verbeteren", cijfers: [7.5, 6.7, 7] },
    { naam: "Computervaardigheden", cijfers: [7.6, 9.5, 6.7] },
  ];

  // Functie om gemiddeld cijfer te berekenen
  function berekenGemiddelde(moduleNaam) {
    const module = modules.find(m => m.naam === moduleNaam);

    if (module) {
      const gemiddelde = module.cijfers.reduce((acc, cijfer) => acc + cijfer, 0) / module.cijfers.length;
      return gemiddelde.toFixed(1); // Afgerond op één decimaal
    } else {
      return "Module niet gevonden";
    }
  }

  // Functie om resultaten in een tabel te tonen
  function toonResultaten() {
    const table = document.createElement("table");

    // Header rij
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = "Vakken";
    headerRow.insertCell().textContent = "Oefeningen";
    headerRow.insertCell().textContent = "Praktijkopdracht";
    headerRow.insertCell().textContent = "Project";
    headerRow.insertCell().textContent = "Gemiddelde";

    // Gegevens rijen
    modules.forEach(module => {
      const row = table.insertRow();
      row.insertCell().textContent = module.naam;
      module.cijfers.forEach(cijfer => {
        row.insertCell().textContent = cijfer;
      });

      // Voeg gemiddelde toe
      const gemiddelde = berekenGemiddelde(module.naam);
      row.insertCell().textContent = gemiddelde;
    });

    // Zoek het <h1> element op en voeg de tabel erna toe
    const h1Element = document.querySelector('h1');
    if (h1Element) {
      h1Element.parentNode.insertBefore(table, h1Element.nextSibling);
    } else {
      // Voeg de tabel aan het einde van de body toe als <h1> niet wordt gevonden
      document.body.appendChild(table);
    }
  }

  // Roep de functie aan om de resultaten te tonen
  toonResultaten();
}

// resultaten.js
// Nieuwe functie met een parameter voor het instellen van de achtergrondkleur
function setElementBackgroundColor(elementId, color) {
  var targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.style.backgroundColor = color;
  }
}

// Stel de achtergrondkleur in op geel voor het element met id "javascriptcopyright"
setElementBackgroundColor("javascriptcopyright", "rgb(254, 196, 112)");
