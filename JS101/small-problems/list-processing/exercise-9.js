/* Write a function that takes two arguments, an inventory item ID and a list of
transactions, and returns an array containing only the transactions for the specified
inventory item. */

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


// first attempt
// function transactionsFor(id, transactionsArray) {
//   let result = [];

//   for (let i = 0; i < transactionsArray.length; i++) {
//     if (transactions[i]['id'] === id) {
//       result.push(transactions[i])
//     }
//   }
//   return result;

// }

function transactionsFor(id, transactionsArray) {
  return transactionsArray.filter(inventory => inventory['id'] === id)
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
