/* Write a function that takes a string as an argument and returns that string with every
lowercase letter changed to uppercase and every uppercase letter changed to lowercase.
Leave all other characters unchanged. */

function swapCase(string) {
  let switchedCaseString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (isUppercase(char)) {
      switchedCaseString += char.toLowerCase();
    } else if (isLowercase(char)) {
      switchedCaseString += char.toUpperCase();
    } else {
      switchedCaseString += char;
    }
  }
  return switchedCaseString;
}

function isUppercase(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
  return char >= 'a' && char <= 'z';
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
