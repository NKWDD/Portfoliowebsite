//Auteur: Kamil Kala
//Opdracht: Praktijk opdracht
//Datum: 01-12-2023

// Array met menu items
var menuItems = ["New", "Women", "Men", "Kids", "Sale"];

// Haal het menu element op
var menu = document.getElementById("menu");

// Creëer een ul element
var ul = document.createElement("ul");

// Loop door de array en maak li elementen met a elementen
menuItems.forEach(function(item) {
// Maak een nieuw list item (li) element aan
var li = document.createElement("li");

// Maak een nieuw anker (a) element aan
var a = document.createElement("a");

// Stel de href van het anker in op "#" gevolgd door de naam van het item in kleine letters
a.href = "#" + item.toLowerCase();

// Stel de tekstinhoud van het anker in op de naam van het item
a.textContent = item;

// Voeg het anker toe aan het list item
li.appendChild(a);

// Voeg het list item toe aan de unordered list (ul)
ul.appendChild(li);
});

// Voeg de ul toe aan het menu element
menu.appendChild(ul);

// Vraag de bezoeker of hij een student of medewerker is
var gebruikerType = prompt("Ben je een student of medewerker?"); 

// Controleer de keuze en toon de bijbehorende footer
if (gebruikerType.toLowerCase() === "student") {
// Toon het studenten-gedeelte van de footer en pas de tekst aan
document.querySelector(".footer-student").style.display = "flex";
document.getElementById("footer-text").textContent = "Dit is de footer voor student";
} else if (gebruikerType.toLowerCase() === "medewerker") {
  // Toon het medewerkers-gedeelte van de footer en pas de tekst aan
document.querySelector(".footer-medewerker").style.display = "flex";
document.getElementById("footer-text").textContent = "Dit is de footer voor medewerker";
}