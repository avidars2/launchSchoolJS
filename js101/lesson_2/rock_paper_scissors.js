const readline = require('readline-sync');
const USER_CHOICES = {rock: ['r' , 'rock'], paper: ['p', 'paper' ], 
  scissors: ['sc', 'scissors'], lizard: ['l', 'lizard'], spock: ['sp', 'spock']};
const VALID_CHOICES = Object.keys(USER_CHOICES);

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

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  let choiceValues = [];

  Object.values(USER_CHOICES).forEach(choiceList => {
    choiceValues = choiceValues.concat(choiceList);
  })

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

  let result = decideWinner(choice, computerChoice);
  displayWinner(result);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

/**
 * Things to consider
Notice how the displayWinner function calls the prompt function. 
What happens if you move the displayWinner function definition above the prompt function definition? Does it still work?
-Yes - because it is a function declaration and not a function expression it may be called from anywhere that is within it's scope

How would you use the displayWinner function differently if it returned a string, as opposed to outputting the string directly?
-The return value could be assigned to a variable and logged within the while loop

We used the Math object to generate a random number and round down a floating point number. 
Skim through the documentation for the Math object and see what other methods from the object you may find useful. 
Specifically, read the pages for Math.round and Math.ceil. 
How would you rewrite the random index expression if you were to use one of these two methods instead of Math.floor?
-  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
-  let randomIndex = (Math.ceil(Math.random() * VALID_CHOICES.length)) - 1;

We used a while loop with an always-true condition and a break statement to decide whether to replay the game. 
Can you rewrite the loop so that we don't need to use the break statement to stop the loop?
-let continue = true;
-while (continue)
-  if (answer[0] !== 'y') continue = false;
 */