// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// option 1
str1[str1.length - 1] === '!';
str2[str2.length - 1] === '!';

// option 2
str1.endsWith('!');
str2.endsWith('!');
