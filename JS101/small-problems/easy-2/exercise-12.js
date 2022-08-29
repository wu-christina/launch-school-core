/* In the previous exercise, you developed a function that converts non-negative numbers
to strings. In this exercise, you're going to extend that function by adding the ability
to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as
String() and Number.prototype.toString(). You may, however, use integerToString() from the
previous exercise. */

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

function signedIntegerToString(integer) {
  if (Math.sign(integer) === -1) {
    return `-${integerToString(-integer)}`;
  } else if (Math.sign(integer) === 1) {
    return `+${integerToString(integer)}`;
  } else {
    return integerToString(integer);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
