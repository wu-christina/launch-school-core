/* Write a function that takes one argument, a positive integer, and returns the sum of its
digits. Do this without using for, while, or do...while loops - instead, use a series of
method calls to perform the sum. */

function sum(num) {
  let numArray = String(num).split('');
  return numArray.reduce((previousVal, currentVal) => Number(previousVal) + Number(currentVal));
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
