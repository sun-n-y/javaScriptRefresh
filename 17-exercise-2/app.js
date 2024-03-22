const gas = [20, 40, 100];

const food = [10, 40, 50];

function calculateTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (total > 100) {
    console.log('total is high');
    return 'total is to high';
  }
  return total;
}

console.log(calculateTotal(gas));
console.log(calculateTotal([1, 2, 3, 4, 5]));

console.log({
  gas: calculateTotal(gas),
  miles: calculateTotal([1, 2, 3]),
});
