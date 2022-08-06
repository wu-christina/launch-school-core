// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [1, 2] }

/* numArray is pointing to [1]. The push() method modifies the array,
also modifing the array in object. */
