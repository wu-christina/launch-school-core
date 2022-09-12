/* Write a function that takes a positive integer as an argument and returns that number with its digits
reversed. */

function reverseNumber(integer) {
  let integerToString = String(integer);
  let reversedInteger = ''

  for (let i = integerToString.length - 1; i >= 0; i--) {
    let number = integerToString[i];
    reversedInteger += number;
  }
  return Number(reversedInteger);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
