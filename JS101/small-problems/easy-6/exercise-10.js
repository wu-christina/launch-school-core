/* Write a function that takes a string argument containing one or more words and returns a new string
containing the words from the string argument. All five-or-more letter words should have their letters in
reverse order. The string argument will consist of only letters and spaces. Words will be separated by a
single space. */

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords(string) {
  let wordsArray = string.split(' ');
  let newWordsArray = [];

  wordsArray.forEach(word => {
    if (word.length >= 5) {
      newWordsArray.push(reverseOrder(word));
    } else {
      newWordsArray.push(word);
    }
  })
  return newWordsArray.join(' ');
}


function reverseOrder(word) {
  let newWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord;
}
