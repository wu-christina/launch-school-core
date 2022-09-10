/* Write a program that solicits six numbers from the user and logs a message that
describes whether the sixth number appears among the first five numbers. */

const readline = require("readline-sync");

let firstNum = readline.question("Enter the 1st number: ");
let secondNum = readline.question("Enter the 2nd number: ");
let thirdNum = readline.question("Enter the 3rd number: ");
let fourthNum = readline.question("Enter the 4th number: ");
let fifthNum = readline.question("Enter the 5th number: ");
let lastNum = readline.question("Enter the last number: ");

if (isInNumbers(firstNum, secondNum, thirdNum, fourthNum, fifthNum, lastNum)) {
  console.log( `The number ${lastNum} appears in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, and ${fifthNum}.`);
} else {
  console.log( `The number ${lastNum} does not appear in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, and ${fifthNum}.`);
}

function isInNumbers(n1, n2, n3, n4, n5, lastNum) {
  let collectionOfNumbers = [n1, n2, n3, n4, n5];
  return collectionOfNumbers.includes(lastNum);
}
