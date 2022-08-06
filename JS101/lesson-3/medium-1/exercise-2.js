/* Starting with the string: return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.` */

let munstersDescription = "The Munsters are creepy and spooky.";

// version 1
function swapCases(message){
  let charsArray = message.split('');
  let newCharsArray = [];

  charsArray.forEach(function(char) {
    if (char.toUpperCase() === char) {
      newCharsArray.push(char.toLowerCase());
    } else {
      newCharsArray.push(char.toUpperCase());
    }
  })

  return newCharsArray.join('');
}

// version 2
function swapCases(messages) {
  return messages.split("").map(function(char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("");
}

swapCases(munstersDescription);
