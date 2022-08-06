/* Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before
computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each
line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

*/

let numberOfLoops = 10;
let message = "The Flintstones Rock!"

function addIndent(message) {
  for (let loop = 0; loop < numberOfLoops; loop++) {
    console.log(message.padStart(loop + message.length));
  }
}

addIndent(message);
