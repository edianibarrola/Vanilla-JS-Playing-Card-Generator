/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let card = document.querySelector(".card");
  let cardNumber = document.querySelector(".card h1");
  let suit = ["heart", "diamond", "club", "spade"];

  let numbers = ["A", "1", "2", "3", "4"];

  card.classList.add(suit[getRandomInt(0, suit.length - 1)]);
  cardNumber.innerHTML = numbers[getRandomInt(0, numbers.length - 1)];
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
