/* Modify the function from the previous exercise so it ignores non-alphabetic characters
when determining whether it should uppercase or lowercase each letter. The non-alphabetic
characters should still be included in the return value; they just don't count when
toggling the desired case. */

function staggeredCase(string) {
  let newString = '';
  let uppercase = true;
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (isLetter(char)) {
      if (uppercase) {
        uppercase = false;
        newString += char.toUpperCase();
      } else {
        uppercase = true;
        newString += char.toLowerCase();
      }
    } else {
      newString += char;
    }
  }
  return newString;
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') ||(char >= 'A' && char <= 'Z');
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
