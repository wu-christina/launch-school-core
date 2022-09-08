/* Create a simple madlib program that prompts for a noun, a verb, an adverb, and an
adjective, and injects them into a story that you create. */

const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');;
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
console.log(`The ${noun} ${adverb} ${verb}s up to ${adjective} Joe's turtle.`);
