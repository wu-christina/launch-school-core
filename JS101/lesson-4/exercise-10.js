/* Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

*/


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


// Solution 1
let agesArray = Object.values(ages); // [ 32, 30, 5843, 10, 22, 237 ]
let smallestAge = Infinity;

for (let i = 0; i < agesArray.length - 1; i++) {
  let age = agesArray[i];
  if (age < agesArray[i + 1] && smallestAge > age) {
    smallestAge = age;
  } else if (age > agesArray[i + 1] && smallestAge > agesArray[i + 1]) {
    smallestAge = agesArray[i + 1];
  }
}
console.log(smallestAge); // 10

// Solution 2
console.log(Math.min(...agesArray)); // 10
