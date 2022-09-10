/* Write a function that takes a string consisting of zero or more space separated words and returns an object that
shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */

function wordSizes(string) {
  let wordsLengthCount = {};
  let wordsArray = string.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    let wordLength = wordsArray[i].length;

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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
