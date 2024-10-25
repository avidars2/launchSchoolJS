const readline = require('readline-sync');
const USER_CHOICES = {rock: ['r' , 'rock'], paper: ['p', 'paper' ],
  scissors: ['sc', 'scissors'], lizard: ['l', 'lizard'], spock: ['sp', 'spock']};
const VALID_CHOICES = Object.keys(USER_CHOICES);
const score = {player: 0, computer: 0, ties: 0};
let autoPlay = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(outcome) {
  prompt(`You chose ${outcome.choice}, computer chose ${outcome.computerChoice}`);

  if (outcome.result === 'win') {
    prompt('You Win!');
  } else if (outcome.result === 'loss') {
    prompt('Computer Wins!');
  } else {
    prompt('Tie!');
  }

  prompt(`You: ${score.player} | Computer: ${score.computer} | Draws: ${score.ties}`);
}

function decideWinner(choice, computerChoice) {
  let outcome = {choice, computerChoice, result: ''};
  if (((choice === 'rock' || choice === 'spock') && computerChoice === 'scissors') ||
    ((choice === 'paper' || choice === 'spock') && computerChoice === 'rock') ||
    ((choice === 'scissors' || choice === 'lizard') && computerChoice === 'paper') ||
    ((choice === 'rock' || choice === 'scissors') && computerChoice === 'lizard') ||
    ((choice === 'paper' || choice === 'lizard') && computerChoice === 'spock')) {
    outcome.result = 'win';
  } else if (choice === computerChoice) {
    outcome.result = 'tie';
  } else {
    outcome.result = 'loss';
  }

  return outcome;
}

function updateScoreboard(result) {
  if (result === 'win') {
    score.player += 1;
  } else if (result === 'loss') {
    score.computer += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  let choiceValues = [];

  Object.values(USER_CHOICES).forEach(choiceList => {
    choiceValues = choiceValues.concat(choiceList);
  });

  while (!Object.values(choiceValues).includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  for (let userInputs in USER_CHOICES) {
    if (USER_CHOICES[userInputs].includes(choice)) {
      choice = userInputs;
      break;
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let outcome = decideWinner(choice, computerChoice);
  updateScoreboard(outcome.result);
  displayWinner(outcome);

  if (score.player === 3 || score.computer === 3) {
    let grandWinner = score.player === 3 ? 'You are' : 'Computer is';
    prompt(`${grandWinner} the grand winner!`);
    break;
  }

  if (!autoPlay) {
    prompt('Do you want to play again (y/n)? (type "a" to play until grand winner [3 wins])');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y' && answer[0] !== 'a') {
      prompt('Please enter "y" or "n" or "a".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y' && answer[0] !== 'a') break;
    if (answer[0] === 'a') {
      autoPlay = true;
    }
  }
}