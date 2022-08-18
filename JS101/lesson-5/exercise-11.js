/* Given the following data structure, use the map method to
return a new array identical in structure to the original but,
with each number incremented by 1. Do not modify the original data
structure. */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

let newArr = deepCopiedArr.map((obj => {
  let keys = Object.keys(obj);
  return keys.map(key => {
    obj[key] += 1;
    return obj;
  });
}));

console.log(deepCopiedArr) // [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]
console.log(arr) // [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
