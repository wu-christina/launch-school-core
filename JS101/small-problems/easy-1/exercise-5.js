/* Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation
and assume that the user will enter numbers. */

const readline = require("readline-sync");

let bill = readline.question('What is the bill? ');

let percentage = readline.question('What is the tip percentage? ');

let tip = Number(bill) * (Number(percentage) / 100);

let total = Number(bill) + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
