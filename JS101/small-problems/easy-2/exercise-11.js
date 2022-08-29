/* In the previous two exercises, you developed functions that convert simple numeric
strings to signed integers. In this exercise and the next, you're going to reverse
those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so
on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such
as String(), Number.prototype.toString, or an expression such as '' + number. Your
function should do this the old-fashioned way and construct the string by analyzing
and manipulating the number. */

// first try
// function integerToString(integer) {
//   let array = [integer];

//   return array.join();
// }

// second try
function integerToString(num) {
  let arr = [];
  let remainder;
  do {
    remainder = num % 10;
    arr.unshift(remainder);
    num = Math.floor(num / 10);
  } while (num > 0)
  arr = arr.join('');
  return arr;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
