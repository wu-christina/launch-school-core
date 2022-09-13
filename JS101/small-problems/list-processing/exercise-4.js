/* Write a function that takes a string argument and returns a list of substrings of that
string. Each substring should begin with the first letter of the word, and the list should
be ordered from shortest to longest. */

function leadingSubstrings(string) {
  let addedString = '';
  let subStringArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    subStringArray.push(addedString += char);
  }
  return subStringArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
