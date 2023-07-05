/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(switchIcons());

  document.querySelector("#click").addEventListener("click", () => {
    document
      .querySelector(".card")
      .classList.remove("diamond", "heart", "spade", "club");
    document.querySelector(".card").classList.add(switchIcons());
    document.querySelector(".card-number").innerHTML = switchNumber();
  });
};

//My code is right below here!
const switchNumber = () => {
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let numIndex = Math.floor(Math.random() * numbers.length);
  return numbers[numIndex];
};

const switchIcons = () => {
  let icons = ["diamond", "heart", "spade", "club"];
  let iconsIndex = Math.floor(Math.random() * icons.length);
  return icons[iconsIndex];
};
