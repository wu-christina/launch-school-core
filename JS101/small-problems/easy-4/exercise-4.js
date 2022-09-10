/* Write a function that returns true if the string passed
as an argument is a palindrome, or false otherwise. A
palindrome reads the same forwards and backwards. For this
problem, the case matters and all characters matter. */

function isPalindrome(string) {
  let backwardsString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    backwardsString += char;
  }

  return string === backwardsString;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
