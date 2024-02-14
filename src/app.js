/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
	
  let domain = [];
  
  for (let index in pronoun) {
		domain[0] = pronoun[index];
    for (let index in adj) {
    	domain[1] = adj[index];
      for (let index in noun) {
      	domain[2] = noun[index];
        console.log(domain[0] + domain[1] + domain[2] + ".com")
      }
    }
  }   
};
