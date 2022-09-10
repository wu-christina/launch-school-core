/* Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For
instance, the word size of "it's" is 3, not 4. */

function wordSizes(string) {
  let wordsLengthCount = {};
  let wordsArray = string.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    let wordLength = onlyAlphabetWord(wordsArray[i]).length;

    if (wordLength === 0) {
      continue;
    }

    if (!wordsLengthCount[wordLength]) {
      wordsLengthCount[wordLength] = 0;
    }
    wordsLengthCount[wordLength] += 1;
  }

  return wordsLengthCount;
}


function onlyAlphabetWord(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (isAlphabet(char)) {
      newWord += char;
    }
  }
  return newWord;
}

console.log(onlyAlphabetWord("What's"));


function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
