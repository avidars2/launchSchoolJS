const rlSync = require("readline-sync");
const clc = require("cli-color");


let repeat = true;

while (repeat) {
  console.log(clc.red('\nWelcome to the monthly payment calculator!\n'));
  getUserInput();
  repeat = rlSync.question(clc.magenta('Calculate again? (Yes/No): '));
  repeat = ['Yes', 'yes', 'y'].includes(repeat);
}

function getUserInput() {
  let APR = (validateInput('Enter APR (Example: 1.5 would be 1.5%): ') * .01);
  let loanAmount = validateInput('Enter amount borrowed (loan): $');
  console.log('Enter loan duration (Years and Months)');
  let loanDurationTimes = {
    years: validateInput('Years: '),
    months: validateInput('Months: ')
  };

  carLoanCalculator(APR, loanAmount, loanDurationTimes);

}

function validateInput(question) {
  let numberInput;
  do {
    numberInput = (cleanInput(rlSync.question(clc.green(question))));
    if (Number.isNaN(numberInput)) {
      console.log(clc.red('Invalid Input'));
    }
  } while (Number.isNaN(numberInput));

  return numberInput;
}

function carLoanCalculator(APR, loanAmount, loanYearsMonths) {
  let loanDuration = ((loanYearsMonths.years * 12) + loanYearsMonths.months);
  let monthlyInterestRate = (APR / 12);

  let monthlyPayment;
  let totalPayment;
  if (monthlyInterestRate !== 0) {
    monthlyPayment = (loanAmount * (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration)))));

    totalPayment = monthlyPayment * loanDuration;
  } else {
    monthlyPayment = loanAmount / loanDuration;
    totalPayment = monthlyPayment * loanDuration;
  }

  let convertedMonthlyPayment = convertToUSD(monthlyPayment);
  let convertedTotalPayment = convertToUSD(totalPayment);

  console.log(`For APR: ${APR}, Loan: ${convertToUSD(loanAmount)}, Loan Duration: ${loanDuration} months. You have:`);
  console.log(clc.blue(` Monthly Payment: ${convertedMonthlyPayment}\n Total Payment: ${convertedTotalPayment}`));

}

function convertToUSD(monthlyPayment) {
  monthlyPayment = monthlyPayment.toFixed(2);
  return ('$' + monthlyPayment);
}

function cleanInput(numberString) {
  let numberArray = numberString.split(',');

  if (numberArray.length > 1) {
    numberString = numberArray.join('');
  }

  let plainNumber = Number(numberString);
  return plainNumber;
}
