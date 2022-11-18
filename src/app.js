/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = */

boton.onclick = function otra() {
  const excuseHTML = document.querySelector("#excuse");
  let i,
    j,
    k = 0;
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = [" ate ", " pissed ", " crushed ", " broked "];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  i = Math.floor(Math.random() * 4);
  j = Math.floor(Math.random() * 4);
  k = Math.floor(Math.random() * 5);
  let excuse = who[i] + what[j] + when[k];
  excuseHTML.innerHTML = excuse;
  return excuse;
};
