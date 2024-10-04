const rlSync = require("readline-sync");
const clc = require("cli-color");
const USER_PROMPTS = require('./loan_messages_and_inputs.json');

const affirmations = USER_PROMPTS.confirmations.affirmations;
const declinations = USER_PROMPTS.confirmations.declinations;


runProgram();

function runProgram() {

  let repeat = true;

  while (repeat) {
    console.log(clc.red(USER_PROMPTS.guidanceMessages.welcome));
    let loanData = getUserInput();
    let calculatedLoanData = carLoanCalculator(loanData);
    displayPaymentInfoAsUSD(calculatedLoanData, loanData);

    repeat = checkIfRepeatProgram();
  }

}

function checkIfRepeatProgram() {
  let invalidResponse = false;
  do {
    let confirmRepeat = rlSync.question(clc.magenta(USER_PROMPTS
      .guidanceMessages
      .repeatCalculation));
    if (affirmations.includes(confirmRepeat.toLowerCase())) {
      return true;
    } else if (declinations.includes(confirmRepeat.toLowerCase())) {
      return false;
    }
    console.log(USER_PROMPTS.guidanceMessages.invalidInputYesNo);
    invalidResponse = true;
  } while (invalidResponse);

  return false;
}


function getUserInput() {
  let APR = (validateInput(USER_PROMPTS.functionMessages.enterAPR) * .01);
  let loanAmount = validateInput(USER_PROMPTS.functionMessages.enterLoan);
  console.log(USER_PROMPTS.functionMessages.enterLoanDuration);
  let loanDurationTimes = {
    years: validateInput('Years: '),
    months: validateInput('Months: ')
  };

  return {APR, loanAmount, loanDurationTimes};

}

function validateInput(question) {
  let numberInput;
  do {
    numberInput = (cleanInput(rlSync.question(clc.green(question))));
    if (Number.isNaN(numberInput) || (numberInput < 0)) {
      console.log(clc.red(USER_PROMPTS.guidanceMessages.invalidInput));
    }
  } while (Number.isNaN(numberInput) || (numberInput < 0));

  return numberInput;
}

function carLoanCalculator(loanData) {
  const monthsInAYear = 12;
  let loanDuration = ((loanData.loanDurationTimes.years * monthsInAYear)
   + loanData.loanDurationTimes.months);
  let monthlyInterestRate = (loanData.APR / monthsInAYear);

  let monthlyPayment;
  let totalPayment;
  if (monthlyInterestRate !== 0) {
    monthlyPayment = (loanData.loanAmount * (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration)))));

    totalPayment = monthlyPayment * loanDuration;
  } else {
    monthlyPayment = loanData.loanAmount / loanDuration;
    totalPayment = monthlyPayment * loanDuration;
  }

  return {monthlyPayment, totalPayment, loanDuration};
}

function displayPaymentInfoAsUSD(calculatedLoanData, loanData) {
  let convertedMonthlyPayment = convertToUSD(calculatedLoanData.monthlyPayment);
  let convertedTotalPayment = convertToUSD(calculatedLoanData.totalPayment);

  console.log(`For APR: ${loanData.APR}, Loan: ${convertToUSD(loanData.loanAmount)}, Loan Duration: ${calculatedLoanData.loanDuration} months. You have:`);
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
