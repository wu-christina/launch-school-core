/* Write a function that returns a list of all substrings of a string. Order the returned
list by where in the string the substring begins. This means that all substrings that start
at index position 0 should come first, then all substrings that start at index position 1,
and so on. Since multiple substrings will occur at each position, return the substrings at
a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise: */

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

console.log(substrings('abcde'));

// returns
/* [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */
