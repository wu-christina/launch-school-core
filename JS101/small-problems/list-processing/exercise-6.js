/* Write a function that returns a list of all palindromic substrings of a string. That is,
each substring must consist of a sequence of characters that reads the same forward and
backward. The substrings in the returned list should be sorted by their order of appearance
in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to
case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition,
assume that single characters are not palindromes. */

function substrings(string) {
  let substringsArray = [];

  for(let i = 0; i < string.length; i++) {
    substringsArray = substringsArray.concat(leadingSubstrings(string.slice(i)));
  }
  return substringsArray;
}


function leadingSubstrings(string) {
  let addedString = '';
  let subStringArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    subStringArray.push(addedString += char);
  }
  return subStringArray;
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  let forward = string;
  let backward = '';

    for (let i = string.length - 1; i >= 0; i--) {
      backward += string[i];
    }
  return string.length > 1 && forward === backward;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
