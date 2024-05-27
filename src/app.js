/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronouns = ["the", "our"];
  const nouns = ["jogger", "racoon"];
  const adjectives = ["great", "big"];
  
  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        console.log(`${pronoun}${adjective}${noun}.com`);
      });
    });
  });
  
};
