/* Problem: Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

Write a program that uses this array to create an object where the names are
the keys and the values are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 } */


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Solution 1
function objectCreator(arr) {
  let index = Object.keys(arr);
  let obj = {};

  for (let iterator = 0; iterator < arr.length; iterator++) {
    let key = arr[iterator];
    let value = Number(index[iterator]);
    obj[key] = value;
  }
  return obj;
}

console.log(objectCreator(flintstones));

// Solution 2
let flintstonesObj = {};

flintstones.forEach(function(name, index) {
  flintstonesObj[name] = index;
});

console.log(flintstonesObj);
