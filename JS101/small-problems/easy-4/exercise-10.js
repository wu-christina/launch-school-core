/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one
word. You may also assume that each string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces. */

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

function swap(string) {
  let wordsArray = string.split(' ');
  let newWordsArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    newWordsArray.push(swapFirstAndLastLetters(word))
  }
  return newWordsArray.join(' ');
}

function swapFirstAndLastLetters(word){
  if (word.length === 1) {
    return word;
  }
  
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
