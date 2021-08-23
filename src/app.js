/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  randomExcuse();
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

var lastItem = who.length - 1;

var selected = Math.floor(Math.random() * lastItem);
var chosen = Math.floor(Math.random() * lastItem);
var highlighted = Math.floor(Math.random() * lastItem);
var singled = Math.floor(Math.random() * lastItem);

function randomExcuse() {
  let excuse =
    who[selected] +
    " " +
    action[chosen] +
    " " +
    what[highlighted] +
    " " +
    when[singled];
  document.querySelector("#excuse").innerHTML = excuse;
}
