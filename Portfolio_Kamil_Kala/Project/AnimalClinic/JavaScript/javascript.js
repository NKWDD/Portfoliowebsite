// Voer code uit nadat de pagina is geladen
document.addEventListener("DOMContentLoaded", function() {
// Controleer of de huidige pagina de startpagina ("index.html") is
if (window.location.pathname.endsWith("index.html")) {
  // Vraag de gebruiker om zijn/haar naam met behulp van een pop-up prompt-venster
  var naam = prompt("Wat is jouw naam?");
  // Controleer of de gebruiker een naam heeft ingevoerd
  if (naam !== null && naam !== "") {
    // Zoek het HTML-element met het id "gebruikersnaam" en pas de tekst aan om de ingevoerde naam weer te geven
    var gebruikersnaamElement = document.getElementById("gebruikersnaam");
    if (gebruikersnaamElement) {
      gebruikersnaamElement.innerHTML = "Hallo, " + naam;
    }
  } else {
    // Geef een begroeting weer als er geen naam is ingevoerd
    var begroetingElement = document.getElementById("begroeting");
    if (begroetingElement) {
      begroetingElement.innerHTML = "Welkom, gast!";
    }
  }
}
});

//Scroll naar beneden button in INDEX file//
// Functie om naar een specifieke sectie op de pagina te scrollen
function scrollToSection() {
// Zoek het doel (de sectie) waar je naartoe wilt scrollen met behulp van het id "scrollTarget"
const targetSection = document.getElementById('scrollTarget');
if (targetSection) {
  // Voer een soepele scrollbeweging uit naar het doel
  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
}
}

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

//Voor Afspraak maken String Number Boolean x2
// Voeg een eventlistener toe aan het formulier met het id "verstuurKnop-afspraak"
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("verstuurKnop-afspraak").addEventListener("click", function() {
      alert("Je formulier is gestuurd!");
  });
});
// Voeg een eventlistener toe aan het formulier met het id "appointmentForm-afspraak"
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("appointmentForm-afspraak").addEventListener("submit", function(event) {
// Voorkom standaardformulierverzending om aangepast gedrag mogelijk te maken
event.preventDefault();

  // Haal de ingevoerde gegevens uit het formulier
  const petName = document.getElementById("petName").value;
  const age = parseInt(document.getElementById("age").value);
  const hasVaccinations = document.getElementById("hasVaccinations").checked;
  const appointmentDate = document.getElementById("appointmentDate").value;
  const isEmergency = document.querySelector('input[name="emergency"]:checked').value;

  // Toon de ingevoerde gegevens in de console
  console.log("Naam van het dier: " + petName);
  console.log("Leeftijd van het dier: " + age);
  console.log("Is het dier gevaccineerd? " + hasVaccinations);
  console.log("Afspraakdatum: " + appointmentDate);
  console.log("Is dit een noodgeval? " + (isEmergency === "true"));
});
});


//Voor pagina onze kliniek - Welke Kliniek
function checkLocatie() {
var locatie = document.getElementById("locatieInput").value;

// Hier begint het if-else statement
if (locatie === "Amsterdam") {
    document.getElementById("locatieResultaat").innerHTML = "Je hebt Amsterdam gekozen!";
} else if (locatie === "Den Bosch") {
    document.getElementById("locatieResultaat").innerHTML = "Je hebt Den Bosch gekozen!";
} else if (locatie === "Rotterdam") {
    document.getElementById("locatieResultaat").innerHTML = "Je hebt Rotterdam gekozen!";
} else {
    document.getElementById("locatieResultaat").innerHTML = "Ongeldige locatie, probeer opnieuw.";
}
}

//upperCaseName en lowerCaseEmail voor Contact pagina
function submitForm(event) {
event.preventDefault();

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const outputDiv = document.getElementById('output');

const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;

// Converteer naam naar hoofdletters en e-mail naar kleine letters
const upperCaseName = name.toUpperCase();
const lowerCaseEmail = email.toLowerCase();

// Toon het resultaat in de outputDiv
outputDiv.innerHTML = `Naam (hoofdletters): ${upperCaseName}<br>E-mail (kleine letters): ${lowerCaseEmail}<br>Bericht: ${message}`;
}
