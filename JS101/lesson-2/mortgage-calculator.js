const readline = require('readline-sync');
const NUMBER_OF_MONTHS_IN_A_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidLoanValue(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) ||
  Number(number) < 0 || Number(number) === 0 / -1;
}

function askLoan() {
  prompt('What is the loan amount?');
  let loanAmount = readline.question();

  while (invalidLoanValue(loanAmount)) {
    prompt('Please enter a number greater than 0.');
    loanAmount = readline.question();
  }
  return Number(loanAmount);
}

function invalidLoanDurationValue(number) {
  return Number(number) % 1 !== 0 || number.trimStart() === '' || Number(number) < 0;
}

function askForValidLoanDuration(value) {
  while (invalidLoanDurationValue(value)) {
    prompt('Enter a whole number greater or equal to 0.');
    value = readline.question();
  }
  return value;
}

function calcYearsAndMonthsToTotalMonths (years, months) {
  return (Number(years) * NUMBER_OF_MONTHS_IN_A_YEAR) + Number(months);
}

function askLoanDuration() {
  prompt('Enter the loan duration in years and months.');

  prompt('Please enter the number of years.');
  let loanYears = readline.question();
  loanYears = askForValidLoanDuration(loanYears);

  prompt('Please enter the number of months.');
  let loanMonths = readline.question();
  loanMonths = askForValidLoanDuration(loanMonths);

  let totalMonths = calcYearsAndMonthsToTotalMonths(loanYears, loanMonths);
  prompt(`You have entered ${loanYears} years and ${loanMonths} months, which is the equal to ${totalMonths} months.`);

  return totalMonths;
}

function askAPRFormat() {
  prompt("How will the APR be entered?\n1) Percentage form (Ex. Enter 10 for 10%)\n2) Decimal form (Ex. Enter 0.10 for 10%)");
  let percentForm = readline.question();

  while (!['1', '2'].includes(percentForm)) {
    prompt('Please select 1 or 2.');
    percentForm = readline.question();
  }
  return percentForm;
}

function invalidAPR(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) ||
  Number(number) < 0;
}

function askAPR() {
  prompt("What is your APR?");
  let APR = readline.question();

  while (invalidAPR(APR)) {
    prompt('Please enter a number greater than or equal to 0.');
    APR = readline.question();
  }
  return Number(APR);
}

function calculateMonthlyInterestRate(APRFormat, APR) {
  let monthlyInterestRate;

  if (APRFormat === '1') {
    monthlyInterestRate = APR / NUMBER_OF_MONTHS_IN_A_YEAR / 100;
  } else {
    monthlyInterestRate = APR / NUMBER_OF_MONTHS_IN_A_YEAR;
  }

  return monthlyInterestRate;
}

function calculateMonthlyPayment(loanAmount, monthlyInterestRate,
  totalMonths, APR) {
  let paymentAmount;

  if (totalMonths === 0) {
    paymentAmount = loanAmount;
  } else if (APR > 0) {
    paymentAmount = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate),(-totalMonths))));
  } else if (APR === 0) {
    paymentAmount = loanAmount / totalMonths;
  }

  return Number(paymentAmount).toFixed(2);
}

function monthlyPaymentMessage(percentFormat, loan, months, APR,
  monthlyPayment) {
  if (percentFormat === '1') {
    prompt(`For a loan of $${loan} with a duration of ${months} months and a APR of ${APR}%, the monthly payment is $${monthlyPayment}.`);
  } else {
    prompt(`For a loan of $${loan} with a duration of ${months} months and a APR of ${APR * 100}%, the monthly payment is $${monthlyPayment}.`);
  }
}

function askRecalculation() {
  prompt('Do you want to perform another calculation?\n (y / n)');
  let answer = readline.question();

  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
  }
  return answer;
}


prompt('Welcome to the Mortgage Calculator!\n');

while (true) {

  let loanAmount = askLoan();
  let loanDuration = askLoanDuration();
  let percentFormat = askAPRFormat();
  let APR = askAPR();
  let monthlyInterestRate = calculateMonthlyInterestRate(percentFormat, APR);
  let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate,
    loanDuration, APR);

  monthlyPaymentMessage(percentFormat, loanAmount, loanDuration,
    APR, monthlyPayment);

  let answer = askRecalculation();

  if (answer !== 'y') {
    prompt('Calculation is complete. Goodbye!\n');
    break;
  }
}
