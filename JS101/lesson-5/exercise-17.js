/* A UUID is a type of identifier often used to uniquely identify items, even when
some of those items were created on a different server or by a different application.
That is, without any synchronization, two or more computer systems can create new
items and label them with a UUID with no significant risk of stepping on each other's
toes. It accomplishes this feat through massive randomization. The number of possible
UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a
conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
represented as a string. The value is typically broken into 5 sections in an
8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID. */

// function generateUUID() {
//   let uuid = '';

//   let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//   let sections = [8, 4, 4, 4, 12];

//   sections.forEach((section, sectionIndex) => {
//     for (let i = 0; i < section; i++) {
//       uuid += chars[Math.floor(Math.random()* chars.length)];
//     }

//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }

//   });

//   return uuid;
// }

// console.log(generateUUID())


function generateUUID() {
  let uuid = '';
  let chars = '0123456789abcdef';
  let sections = [8, 1, 4, 1, 4, 1, 4, 1, 12];

  sections.forEach((section) => {
    if (section !== 1) {
      for (let i = 0; i < section; i++) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length))
      }
    } else {
      uuid += '-';
    }

  });
  return uuid;
}

console.log(generateUUID())
