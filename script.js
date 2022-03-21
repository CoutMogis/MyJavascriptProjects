'use strict';

// -----------------------------------DOM Manipulation-----------------------

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number! ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// -----------------------------------Handling Click Events-----------------------

// The handling events use two arguments, one of them must be a function.

/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Found.';
  }
});
*/

// -----------------------------------Game Logic Implementation-----------------------

let score = 20; // state variable
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 15) + 1; // Trunc converts the decimal into an integer from the random password generator

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // function created to practice the DRY principle
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number Found.');
  }

  // when player wins
  else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent =
        'Yay! Happy Birthday Mom!😘🎂')
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high mama :(' : 'too low mama :('; // using ternary operator to follow DRY principle

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high mama :( ';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low mama :( ';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

*/
}); // --- these are the beginning of the function braces

// -----------------------------------Coding Challenge 1-----------------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 15) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = 'rgb(196, 84, 149)';
  document.querySelector('.message').textContent = 'Guess Mama...';
  document.querySelector('.number').textContent = '?';
});
