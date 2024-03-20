//
const add = function (subTotal, tax) {
  return subTotal + tax;
};

var order1 = add(5, 5);
var order2 = add(6, 6);
var order3 = add(9, 9);

console.log(order1, order2, order3);
