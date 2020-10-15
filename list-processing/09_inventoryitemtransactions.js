// input: id, list of transactions [{}, {}, etc.]
// output: array, filtered by obj.id transactions

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
                     
function filterTransactionsByID(id, list) {
  return list.filter(obj => obj.id === id);
}

let tests = [101, 102, 103, 104, 105];
tests.forEach(id => console.log(filterTransactionsByID(id, transactions)));
