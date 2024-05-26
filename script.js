'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;   
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// this is a check the guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins is correct go to the loops in script
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
// this is a correct the guessing number background is green
      // document.querySelector('.check').style.display = 'none';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
       highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong using the loops in script
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      //this guessing is false

    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
        //  document.querySelector('.check').style.display = 'none';

      //this is a correct the guessing number background is red.
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    }
  }
});

// this is a put the again button
document.querySelector('.again').addEventListener('click', function () {
  let score = 20
  secretNumber = Math.trunc(Math.random() * 20) +1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = "";
  document.querySelector('.number').style.width = '15rem';


 });


 console.log(secretNumber);





