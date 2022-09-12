/* Write a function that takes a string, doubles every character in the string, and returns the result as a
new string. */

function repeater(string) {
  let doubledString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    doubledString += char + char;
  }
  return doubledString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
