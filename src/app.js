/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Guardamos los selectores en variables
  const cardValue = document.querySelector(".number");
  const topCardSuit = document.querySelector(".top-suit");
  const bottomCardSuit = document.querySelector(".bottom-suit");

  // Valores posibles de la carta
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Generamos valores aleatorios
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Generar palo aleatorio para la carta (♠, ♣, ♥, ♦)
  const suits = ["♠", "♣", "♥", "♦"]; // Espadas, Tréboles, Corazones, Diamantes
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  // Asignamos un valor aleatorio
  cardValue.innerHTML = randomValue;

  // Asignamos un palo aleatorio
  topCardSuit.innerHTML = randomSuit;
  bottomCardSuit.innerHTML = randomSuit;

  // Aplicamos el color rojo o negro en función del palo
  if (randomSuit === "♥" || randomSuit === "♦") {
    topCardSuit.classList.add("red");
    bottomCardSuit.classList.add("red");
    cardValue.classList.add("red");
  } else {
    topCardSuit.classList.add("black");
    bottomCardSuit.classList.add("black");
    cardValue.classList.add("black");
  }
};
