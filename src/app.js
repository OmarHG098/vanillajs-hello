/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Nueva!");
  document.querySelector("#excuse").innerHTML = excusa();
};
let excusa = () => {
  let quien = ["Mi perro ", "Mi mamá ", "El vecino ", "Un alien "];
  let que = ["mordió ", "pateó ", "destruyó ", "incendió "];
  let objeto = ["mi tarea ", "mi laptop ", "mi cara ", "mi auto "];
  let cuando = [
    "antes de clases.",
    "mientras dormía.",
    "por la mañana.",
    "anoche."
  ];

  let quienIndx = Math.floor(Math.random() * quien.length);
  let queIndx = Math.floor(Math.random() * que.length);
  let objetoIndx = Math.floor(Math.random() * objeto.length);
  let cuandoIndx = Math.floor(Math.random() * cuando.length);
  return (
    quien[quienIndx] + que[queIndx] + objeto[objetoIndx] + cuando[cuandoIndx]
  );
};
