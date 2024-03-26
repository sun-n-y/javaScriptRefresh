const people = [
  { name: 'jim', age: 20, position: 'developer' },
  { name: 'tim', age: 50, position: 'intern' },
  { name: 'kim', age: 30, position: 'boss' },
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
