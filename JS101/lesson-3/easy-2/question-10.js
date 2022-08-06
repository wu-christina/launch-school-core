/* Write a one-line expression to count the number of lower-case t characters
in each of the following strings: */

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// option 1
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;

// option 2
statement1.match(/t/g) ? statement1.match(/t/g).length : 0;
statement2.match(/t/g) ? statement2.match(/t/g).length : 0;
