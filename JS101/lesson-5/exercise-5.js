/* Compute and display the total age of the male members of the
family. */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munsterArray = Object.keys(munsters); // ['Herman', 'Lily', 'Grandpa', 'Eddie', 'Marilyn']

function addMaleMembersAge (obj, keyArray) {
  let totalAgeOfMaleMembers = 0;

  for (let i = 0; i < keyArray.length; i++) {
    if (obj[keyArray[i]]['gender'] === 'male') {
      totalAgeOfMaleMembers += obj[keyArray[i]]['age'];
    }
  }
  return totalAgeOfMaleMembers;
}

console.log(addMaleMembersAge(munsters, munsterArray)); // 444
