/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.

Example 1:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Example 2:
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let readline = require('readline-sync');

function invalidInteger(value) {
  return value <= 0 || value % 1 !== 0;
}

function invalidOperation(operation) {
  return !['s', 'p'].includes(operation);
}

function invalidAnswer(answer){
  return !['y', 'n'].includes(answer);
}

function askInteger() {
  let integer = readline.question('Please enter an integer greater than 0: ');

  while (invalidInteger(integer)) {
    integer = readline.question('Invalid input. Please enter an integer greater than 0: ');
  }

  return parseInt(integer);
}

function askOperation() {
  let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');

  while (invalidOperation(operation)) {
    operation = readline.question('Invalid input. Enter "s" to compute the sum, or "p" to compute the product: ');
  }

  return operation;
}

function calculateProduct(num) {
  let result = 1;

  for (let iterator = 1; iterator <= num; iterator++) {
    result *= iterator;
  }

  console.log(`The sum of integers between 1 and ${num} is ${result}.`);
}

function calculateSum(num) {
  let result = 0;

  for (let iterator = 1; iterator <= num; iterator++) {
    result += iterator;
  }

  console.log(`The product of integers between 1 and ${num} is ${result}.`);
}

function operationResult(num, operation) {
  if (operation === 's') {
    calculateSum(num);
  } else {
    calculateProduct(num);
  }
}

function askCalculateAgain() {
  let answer = readline.question('Make another calculation (y/n)? ');

  while (invalidAnswer(answer)) {
    answer = readline.question('Invalid input. Make another calculation (y/n)? ');
  }
  return answer;
}


// start of the program

while (true) {
  let integer = askInteger();
  let operation = askOperation();

  operationResult(integer, operation);

  let answer = askCalculateAgain();

  if (answer !== 'y') {
    break;
  }
}
