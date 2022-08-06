// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// [{ first: 42 }, { second: "value2" }, 3, 4, 5]
// arr1[0] and arr2[0] point to the same object stored in memory
// changing the value of the first property on arr2 would also change the value of the first property on arr1
