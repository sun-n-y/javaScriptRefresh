const people = [
  { name: 'jim', age: 20, position: 'developer', id: 1 },
  { name: 'tim', age: 50, position: 'intern', id: 2 },
  { name: 'kim', age: 30, position: 'boss', id: 3 },
];

//forEach

people.forEach(function (item) {
  console.log(item.age);
});

//map

const ages = people.map(function (item) {
  return item.age;
});

console.log(ages);

//filter
const youngPeople = people.filter(function (item) {
  return item.age <= 30;
});

console.log(youngPeople);

//find
console.log(
  people.find(function (item) {
    return item.name === 'kim';
  })
);

//reduce
console.log(
  people.reduce(function (acc, curr) {
    acc += curr.age;
    return acc;
  }, 0)
);
