/* Write a program that prompts the user for two positive
integers, and then prints the results of the following operations
on those two numbers: addition, subtraction, product, quotient,
remainder, and power. Do not worry about validating the input.

Example:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

const readline = require("readline-sync");

function operation(num1, num2) {
  let n1 = parseInt(num1);
  let n2 = parseInt(num2);

  console.log(`==> ${n1} + ${n2} = ${n1 + n2}`);
  console.log(`==> ${n1} - ${n2} = ${n1 - n2}`);
  console.log(`==> ${n1} * ${n2} = ${n1 * n2}`);
  console.log(`==> ${n1} / ${n2} = ${(n1 / n2).toFixed(0)}`);
  console.log(`==> ${n1} % ${n2} = ${n1 % n2}`);
  console.log(`==> ${n1} ** ${n2} = ${n1 ** n2}`);
}

let num1 = readline.question('==> Enter the first number: ');
let num2 = readline.question('==> Enter the second number: ');

operation(num1, num2);
