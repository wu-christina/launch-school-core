// Given the following similar sets of code, what will each code snippet print?

// SNIPPET A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
  console.log(one)
}
// one, two, and three are local variables in messWithVars function
// reassignment produces a local copy
// when function ends, local copy is discarded

let one = ["one"];
let two = ["two"];
let three = ["three"];

console.log(messWithVars(one, two, three));

console.log(`one is: ${one}`);     // 'one is one'
console.log(`two is: ${two}`);     // 'two is two'
console.log(`three is: ${three}`); // 'three is three'


// SNIPPET B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}
// one, two, and three are local variables in messWithVars function
// reassignment produces a local copy
// when function ends, local copy is discarded

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);     // 'one is one'
console.log(`two is: ${two}`);     // 'two is two'
console.log(`three is: ${three}`); // 'three is three'


// SNIPPET C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);      // 'one is two'
console.log(`two is: ${two}`);      // 'two is three'
console.log(`three is: ${three}`);  // 'three is one'
/* Note: splice changes contents of array by removing or replacing existing elements and/or adding new elements in place. When an operation
within function mutates its argument, it affects original object */
