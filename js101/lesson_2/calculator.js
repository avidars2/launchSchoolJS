// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

//For Calculator Bonus Features assignment, please see folder:
// launchSchool/js-assignments/js101-assignments/l2-16-calculator.js

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("This number doesn't look valid");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("This number doesn't look valid");
  number2 = readline.question();
}
prompt(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);

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