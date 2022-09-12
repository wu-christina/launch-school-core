/* Write a function that takes a string, doubles every consonant character in the string, and returns the
result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation,
or whitespace. */

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


function doubleConsonants(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (isConsonant(char)) {
      newString += char + char;
    } else {
      newString += char
    }
  }
  return newString;
}


function isConsonant(char) {
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  return consonants.includes(char);
}
