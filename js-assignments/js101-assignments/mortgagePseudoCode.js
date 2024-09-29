//Purpose: Calculate monthly payment of car loan/mortgage

//
//Program takes 4 inputs: Loan amount (Total Borrowed), APR (Interest), loan duration Years & months
//Program uses inputs to calculate total
//Program converts total to USD format
//Program prints monthly payment, total that will be paid

//Monthly interest rate = APR/12
//loanDurationMonthly = loanDurationYearly

/**
 * START
 *
 * SET repeat = true
 * WHILE (repeat) {carLoanCalculator()}
 * 
 * SET function carLoanCalculator() 
   * SET APR = Number(user number input as string integer/non integer (1 = 1%)) * .01
   * SET loanAmount = Number(user number input as a string (integer/non-integer))
   * SET loanDuration = {Years: user input Years, Months: user input Months} 
   * SET monthlyInterestRate = APR/12
   * 
   * SET monthlyPayment = formula
   * 
   * PRINT convertToUSD(monthlyPayment)
   * 
   * READ repeat = calculate again?
   * 
   * IF NO, repeat = false
   * ELSE do nothing
   * 
 * 
 * SET function convertToUSD(number)
   * number = number.toFixed(2)
   * return '$' + number
 * 
 * STOP
 * 
 */
