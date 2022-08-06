/* Create an array from this object that contains only two elements: Barney's
name and Barney's number: */

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };



let flintstonesKeys = Object.keys(flintstones); // ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']
let barneyArray = flintstonesKeys.filter(key => key === "Barney") // ['Barney']
barneyArray.push(flintstones["Barney"]); // returns new length of barneyArray: 2
console.log(barneyArray) // ['Barney', 2]

// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());
