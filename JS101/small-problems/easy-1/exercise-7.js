/*
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
*/

function shortLongShort(str1, str2) {
  let newString = '';

  if (str1.length < str2.length) {
    newString = str1 + str2 + str1;
  } else {
    newString = str2 + str1 + str2;
  }

  return newString;
}
