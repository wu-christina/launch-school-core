/* Write a function that takes one argument, a positive integer, and returns a list of the digits in the number. */

function digitList(num) {
  let string = String(num);
  let array = [];

  for (let i = 0; i < string.length; i++) {
    array.push(Number(string[i]));
  }
  return array;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
