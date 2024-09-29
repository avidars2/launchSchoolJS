// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const nodeDirectory = "/home/avi/launchSchool/node_modules/";
const readline = require(nodeDirectory + "readline-sync");
const MESSAGES_FILE = require('./calculator_messages.json');
let msg = MESSAGES_FILE['en-US'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function chooseLanguage(msg, language = 'en-US') {
  prompt('Choose Language ("en-US") or ("en-UK)');
  language = readline.question();
  while (!['en-US', 'en-UK'].includes(language)) {
    prompt("Choose again, either 'en-US' or 'en-UK'");
    language = readline.question();
  }
  return msg[language];
}

prompt(msg.messages.welcome);

let language = readline.question('Change Lanaguage? (y/n)');
if (language === 'y') {
  chooseLanguage(msg);
}

while (true) {
  prompt(msg.messages.firstNum);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("This number doesn't look valid");
    number1 = readline.question();
  }

  prompt(msg.messages.secondNum);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("This number doesn't look valid");
    number2 = readline.question();
  }
  prompt(msg.messages.operation);

  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Invalid input, please choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt(msg.messages.repeatCalculation);
  let repeat = readline.question();
  if (repeat[0].toLowerCase() !== 'y') break;
}