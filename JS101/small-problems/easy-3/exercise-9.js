/* Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the non-alphabetic
characters replaced by spaces. If one or more non-alphabetic characters occur in a row,
you should only have one space in the result (i.e., the result string should never have
consecutive spaces). */

function cleanUp(text) {
  let cleanText = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if(isLowerCase(char) || isUpperCase(char)) {
      cleanText += char;
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
