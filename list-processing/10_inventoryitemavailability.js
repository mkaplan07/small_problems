// input: id, list of transactions [{}, {}, etc.]
// output: t/f (return count > 0)

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
let tests = [101, 102, 103, 104, 105];

function filterTransactionsByID(id, list) {
  return list.filter(obj => obj.id === id);
}

function checkAvailability(id, list) {
  let lineItems = filterTransactionsByID(id, list); // array of objects
  let count = 0;

  for (let i = 0; i < lineItems.length; i += 1) {
    if (lineItems[i].movement === 'in') {
      count += lineItems[i].quantity;
    } else {
      count -= lineItems[i].quantity;
    }
  }

  return count > 0;
}

console.log('my solution:');
tests.forEach(id => console.log(id, checkAvailability(id, transactions)));

function reduceAvailability(id, list) {
  let count = filterTransactionsByID(id, list).reduce((sum, obj) => {
    if (obj.movement === 'in') {
      return sum + obj.quantity;
    } else {
      return sum - obj.quantity;
    }
  }, 0);

  return count > 0;
}

console.log('with .reduce()');
tests.forEach(id => console.log(id, reduceAvailability(id, transactions)));
