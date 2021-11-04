window.onscroll = function () {
  //orientiert sich an erster Funktion
  setTimeout(floatIn, 1000);
};

let fish = document.querySelector(".img1");
let trash = document.querySelector(".trash");
let text = document.querySelector(".headline");
let beginn = text.offsetTop;

function floatIn() {
  if (window.pageYOffset - 1200 >= beginn) {
    //wenn die Headline sich eine bestimmte Menge außerhalb des Bildschirms befindet
    fish.classList.add("anim");
    trash.classList.add("animtrash");
    // und er schwebt von der Seite herein

    fish.classList.remove("invisible");
    trash.classList.remove("invisible"); // wird die Unsichtbarkeit des Fisches aufgelöst
  }
}
