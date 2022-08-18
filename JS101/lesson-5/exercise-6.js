/* Given this previously seen family object, print the name, age, and gender of each family member.

Each output line should follow this pattern:
(Name) is a (age)-year-old (male or female).
*/


let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let names = Object.keys(munsters); // ['herman', 'lily', 'grandpa', 'eddie', 'marilyn']
let capitalizeNames = names.map((name) => name[0].toUpperCase() + name.slice(1)); // ['Herman', 'Hily', 'Grandpa', 'Eddie', 'Marilyn']

for (let i = 0; i < names.length; i++) {
  console.log(`${capitalizeNames[i]} is a ${munsters[names[i]]['age']}-year-old ${munsters[names[i]]['gender']}.`)
}

// Herman is a 32-year-old male.
// Lily is a 30-year-old female.
// Grandpa is a 402-year-old male.
// Eddie s a 10-year-old male.
// Marilyn is a 23-year-old female.
