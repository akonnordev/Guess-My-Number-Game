"use strict";
//console.log(document.querySelector(".message"));

//console.log(document.querySelector(".message").textContent);

/*What's DOM AND DOM MANIPULATION 

DOM: Document Object Model: Structured Representation of HTML documents. Allows Javascript to access html elements
and styles to manipulate them.

With Dom, we can/will be able to change text,HTML, attributes and even CSS Styles.

A DOM is a connection point between HTML code and Javascript code.
<html>
<head>
  <title></title>
</head>
<body>
  <section>
  <p>A paragraph with a <a> link </a> </p>
  <p> A second paragraph</p>
  </section>
  <section>
  <img src ="dom.png" alt = "The DOM"/>
  </section>
</body>
</html>

The DOM doesn't include only elements, but includes texts and even comments

DOM !== Javascript

DOM Methods and properties for DOM Manipulation

If DOM is not part of JS then how does it work?

DOM Method & DOM are part of WEB API
WEB APIs are libraries browsers implement and can interact with Javascript

Application Programming Interface

Aside DOM methods, there are other WEB APIs like timers, fetch, etc.

HANDLING CLICK EVENTS

To handle click events, we use an event listener.

*/
// document.querySelector(".message").textContent = "Correct Number";
// console.log(
//   (document.querySelector(".message").textContent = "Correct Number")
// );
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log((document.querySelector(".guess").value = 23));

let score = 20;
let secretNumber = Math.trunc(Math.random() * 21);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const HighestScore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const displayNumber1 = function (number1) {
  document.querySelector(".number").textContent = number1;
};
const displayBody = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //document.querySelector(".message").textContent = "Correct Number";
  console.log(typeof guess, guess);
  if (!guess) {
    displayMessage("No number");
    //document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    //document.querySelector(".number").textContent = secretNumber;
    displayNumber1(secretNumber);
    //document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");
    HighestScore(score);
    //document.querySelector("body").style.backgroundColor = "#60b347";
    displayBody("#60b347");
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High" : "Too low";
      score--;
      //document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      // document.querySelector(".message").textContent =
      //   "You lost the Game/Game Over";
      displayMessage("You lost the Game/Game Over");
      //document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "You lost the Game/Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "You lost the Game/Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  //document.querySelector(".score").textContent = score;
  displayScore(score);
  //document.querySelector("body").style.backgroundColor = "#222";
  displayBody("#222");
  document.querySelector(".number").style.width = "30rem";
  //document.querySelector(".message").textContent = "Start Guessing";
  displayMessage("Start Guessing");
  //document.querySelector(".number").textContent = "?";
  displayNumber1("?");
  document.querySelector(".guess").value = "";
});

//MANIPULATION CSS
/*
CODE REFACTORING

Whenever we have duplicate codes and we want to change some functionality,
 we have to change at all the places it has been duplicated. In a small example it's not a 
 big problem but in a larger code base, it becomes a nightmare.

 Refactoring means restructurig a code but without changing how it works. Refactoring is done to improve
the codes and eliminate duplicates. The first step of refactoring is to identify duplicate codes.

Let's identify duplicate codes
*/
